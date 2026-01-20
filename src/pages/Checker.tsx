import React, { useState, useEffect } from 'react'
import { useAccount } from 'wagmi'
import { useWallet } from '@solana/wallet-adapter-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { 
  Search, 
  Wallet, 
  RefreshCw, 
  ExternalLink, 
  CheckCircle2, 
  AlertCircle, 
  Clock,
  Filter,
  Share2,
  Zap,
  ArrowRight,
  Shield,
  Lock
} from 'lucide-react'
import { useAirdropScanner, AirdropResult, AirdropStatus } from '@/hooks/useAirdropScanner'
import { FarmingChecklist } from '@/components/FarmingChecklist'
import { toast } from 'react-hot-toast'
import { ProfessionalConnect } from '@/components/wallet/ConnectButton'
import { SecurityModal } from '@/components/security/SecurityModal'

export function Checker() {
  const { address: evmAddress, isConnected: isEVMConnected } = useAccount()
  const { publicKey: solanaAddress, connected: isSolanaConnected } = useWallet()
  const [manualAddress, setManualAddress] = useState('')
  const { isScanning, progress, results, scan } = useAirdropScanner()
  
  const [securityModalData, setSecurityModalData] = useState<{
    isOpen: boolean
    projectName: string
    claimUrl: string
  }>({
    isOpen: false,
    projectName: '',
    claimUrl: '',
  })

  const isConnected = isEVMConnected || isSolanaConnected

  const handleScan = () => {
    const targetAddress = manualAddress || evmAddress || solanaAddress?.toString()
    if (!targetAddress) {
      toast.error('Please connect a wallet or enter an address manually')
      return
    }
    scan(targetAddress)
  }

  // Auto-scan on connect
  useEffect(() => {
    if (isConnected && results.length === 0 && !isScanning) {
      handleScan()
    }
  }, [isConnected])

  const handleClaimClick = (result: AirdropResult) => {
    if (result.claimLink) {
      setSecurityModalData({
        isOpen: true,
        projectName: result.name,
        claimUrl: result.claimLink,
      })
    }
  }

  const proceedToClaim = () => {
    window.open(securityModalData.claimUrl, '_blank', 'noopener,noreferrer')
    setSecurityModalData(prev => ({ ...prev, isOpen: false }))
  }

  const getStatusBadge = (status: AirdropStatus) => {
    switch (status) {
      case 'eligible':
        return <Badge className="bg-green-500/10 text-green-500 border-green-500/20">Eligible</Badge>
      case 'claimed':
        return <Badge className="bg-blue-500/10 text-blue-500 border-blue-500/20">Claimed</Badge>
      case 'possibly_eligible':
        return <Badge className="bg-yellow-500/10 text-yellow-500 border-yellow-500/20">Possible</Badge>
      case 'not_eligible':
        return <Badge variant="outline" className="opacity-50">Not Eligible</Badge>
    }
  }

  const getStatusIcon = (status: AirdropStatus) => {
    switch (status) {
      case 'eligible':
        return <CheckCircle2 className="w-5 h-5 text-green-500" />
      case 'claimed':
        return <CheckCircle2 className="w-5 h-5 text-blue-500" />
      case 'possibly_eligible':
        return <Clock className="w-5 h-5 text-yellow-500" />
      case 'not_eligible':
        return <AlertCircle className="w-5 h-5 text-muted-foreground" />
    }
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
        <div>
          <h1 className="text-4xl font-bold mb-2">Airdrop Checker</h1>
          <p className="text-muted-foreground">Scan your wallet for potential rewards and unclaimed tokens.</p>
        </div>
        <ProfessionalConnect />
      </div>

      <div className="grid md:grid-cols-[1fr_300px] gap-8">
        <div className="space-y-8">
          {/* Input Area */}
          <Card className="glass border-white/10 overflow-hidden shadow-2xl">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input 
                    placeholder="Enter EVM or Solana address..." 
                    className="pl-10 h-12 bg-white/5 border-white/10 focus:ring-primary"
                    value={manualAddress}
                    onChange={(e) => setManualAddress(e.target.value)}
                  />
                </div>
                <Button 
                  onClick={handleScan} 
                  disabled={isScanning}
                  className="h-12 px-8 min-w-[140px] gap-2 bg-primary hover:bg-primary/90 font-bold"
                >
                  {isScanning ? <RefreshCw className="w-4 h-4 animate-spin" /> : <RefreshCw className="w-4 h-4" />}
                  {isScanning ? 'Scanning...' : 'Scan Wallet'}
                </Button>
              </div>

              {isConnected && !manualAddress && (
                <div className="mt-4 flex flex-wrap gap-2">
                   {isEVMConnected && (
                     <Badge variant="secondary" className="gap-2 px-3 py-1 cursor-pointer hover:bg-secondary/80 bg-[#0052FF]/10 text-[#0052FF] border-[#0052FF]/20" onClick={() => setManualAddress(evmAddress || '')}>
                        <Wallet className="w-3 h-3" />
                        EVM: {evmAddress?.slice(0, 6)}...{evmAddress?.slice(-4)}
                     </Badge>
                   )}
                   {isSolanaConnected && (
                     <Badge variant="secondary" className="gap-2 px-3 py-1 cursor-pointer hover:bg-secondary/80 bg-[#14F195]/10 text-[#14F195] border-[#14F195]/20" onClick={() => setManualAddress(solanaAddress?.toString() || '')}>
                        <Wallet className="w-3 h-3" />
                        SOL: {solanaAddress?.toString().slice(0, 6)}...{solanaAddress?.toString().slice(-4)}
                     </Badge>
                   )}
                </div>
              )}
            </CardContent>
            {isScanning && (
              <div className="px-8 pb-8 animate-fade-in">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-muted-foreground flex items-center gap-2">
                    <RefreshCw className="w-3 h-3 animate-spin text-primary" />
                    Scanning multi-chain protocols via Daylight API...
                  </span>
                  <span className="font-bold text-primary">{progress}%</span>
                </div>
                <Progress value={progress} className="h-1.5" />
              </div>
            )}
          </Card>

          {/* Results Area */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold">Scan Results {results.length > 0 && `(${results.length})`}</h3>
              {results.length > 0 && (
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="gap-2">
                    <Filter className="w-4 h-4" />
                    Filter
                  </Button>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Share2 className="w-4 h-4" />
                    Share
                  </Button>
                </div>
              )}
            </div>

            {!isConnected && !manualAddress ? (
              <div className="text-center py-20 glass rounded-3xl border-dashed border-white/10 flex flex-col items-center">
                <div className="w-20 h-20 bg-primary/5 rounded-full flex items-center justify-center mb-6">
                  <Lock className="w-10 h-10 text-primary/40" />
                </div>
                <h4 className="text-2xl font-bold mb-2">Connect to Start Scanning</h4>
                <p className="text-muted-foreground max-w-sm mx-auto mb-8">
                  Connect your wallet to discover unclaimed airdrops across 10+ blockchains in real-time.
                </p>
                <ProfessionalConnect />
              </div>
            ) : results.length === 0 && !isScanning ? (
              <div className="text-center py-20 glass rounded-3xl border-dashed border-white/10">
                <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-muted-foreground" />
                </div>
                <h4 className="text-lg font-medium mb-1">No airdrops found</h4>
                <p className="text-sm text-muted-foreground">We couldn't find any unclaimed airdrops for this address yet.</p>
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 gap-4">
                {results.map((result) => (
                  <Card key={result.id} className="glass border-white/10 hover:border-primary/30 transition-all group overflow-hidden animate-fade-in shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center overflow-hidden border border-white/5 shadow-inner">
                            {result.protocolLogo ? (
                              <img src={result.protocolLogo} alt={result.name} className="w-full h-full object-cover" />
                            ) : (
                              <span className="font-bold text-primary text-xl">{result.name[0]}</span>
                            )}
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <h4 className="font-bold text-lg">{result.name}</h4>
                              {result.projectVerified && (
                                <Shield className="w-4 h-4 text-primary fill-primary/10" />
                              )}
                            </div>
                            <p className="text-xs text-muted-foreground uppercase tracking-widest font-semibold">{result.chain}</p>
                          </div>
                        </div>
                        {getStatusIcon(result.status)}
                      </div>

                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2 min-h-[40px]">
                        {result.description || 'Eligible for unclaimed rewards based on onchain activity.'}
                      </p>

                      <div className="flex items-end justify-between border-t border-white/5 pt-4">
                        <div>
                          <p className="text-xs text-muted-foreground mb-1 uppercase tracking-tighter">Status</p>
                          {getStatusBadge(result.status)}
                        </div>
                        {result.value && (
                          <div className="text-right">
                            <p className="text-xs text-muted-foreground mb-1 uppercase tracking-tighter">Value</p>
                            <p className="text-xl font-bold text-primary">{result.value}</p>
                          </div>
                        )}
                      </div>

                      {result.status === 'eligible' && result.claimLink && (
                        <Button 
                          onClick={() => handleClaimClick(result)}
                          className="w-full mt-6 gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-bold shadow-lg" 
                        >
                          Claim on Official Site
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      )}
                      
                      <div className="flex items-center justify-center gap-1.5 mt-3 opacity-50">
                        <Shield className="w-3 h-3 text-green-500" />
                        <span className="text-[10px] uppercase font-bold tracking-widest">FDH Verified Link</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Sidebar Analytics */}
        <div className="space-y-6">
          <Card className="glass border-white/10 shadow-xl overflow-hidden relative">
            <div className="absolute top-0 right-0 p-2 opacity-10">
              <Shield className="w-12 h-12" />
            </div>
            <CardHeader>
              <CardTitle className="text-lg">Wallet Insights</CardTitle>
              <CardDescription>Powered by FX1 Intelligence</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {!isConnected ? (
                <div className="py-6 text-center space-y-4">
                  <Lock className="w-8 h-8 mx-auto text-muted-foreground/30" />
                  <p className="text-xs text-muted-foreground">Connect wallet to unlock detailed eligibility analytics.</p>
                  <ProfessionalConnect />
                </div>
              ) : (
                <>
                  <div className="p-4 rounded-xl bg-primary/5 border border-primary/10">
                    <p className="text-xs text-muted-foreground mb-1">Activity Score</p>
                    <p className="text-2xl font-bold">78/100</p>
                    <div className="mt-2 h-1.5 bg-primary/10 rounded-full overflow-hidden">
                      <div className="h-full bg-primary w-[78%] shadow-[0_0_10px_rgba(0,82,255,0.5)]" />
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-primary/5 border border-primary/10">
                    <div className="flex justify-between items-center mb-1">
                      <p className="text-xs text-muted-foreground">Early Wallet Badge</p>
                      <Badge className="bg-primary/20 text-primary hover:bg-primary/30 border-none text-[10px] font-bold">ACTIVE</Badge>
                    </div>
                    <p className="text-sm font-medium">Top 5% on Base Network</p>
                  </div>
                  <div className="flex items-center justify-center gap-1 opacity-50">
                    <Shield className="w-3 h-3 text-primary" />
                    <span className="text-[9px] uppercase font-bold tracking-widest">Verified by FX1 Hubs</span>
                  </div>
                </>
              )}
            </CardContent>
          </Card>

          <FarmingChecklist />

          <Card className="glass border-primary/20 bg-primary/5 shadow-inner">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Zap className="w-4 h-4 text-primary" />
                Farming Tip
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Your wallet has high volume on Base but low interaction with <strong>Aerodrome</strong>. Consider swapping to increase eligibility for future Base-native rewards.
              </p>
              <Button variant="link" className="p-0 h-auto mt-4 text-primary">
                View Checklist <ArrowRight className="w-3 h-3 ml-1" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <SecurityModal 
        isOpen={securityModalData.isOpen}
        onClose={() => setSecurityModalData(prev => ({ ...prev, isOpen: false }))}
        onConfirm={proceedToClaim}
        projectName={securityModalData.projectName}
        claimUrl={securityModalData.claimUrl}
      />
    </div>
  )
}
