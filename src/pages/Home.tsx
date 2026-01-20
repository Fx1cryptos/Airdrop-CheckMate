import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { 
  Search, 
  ShieldCheck, 
  Zap, 
  Layers, 
  TrendingUp, 
  History,
  ArrowRight,
  ChevronRight
} from 'lucide-react'

export function Home() {
  const features = [
    {
      icon: <Search className="w-6 h-6 text-primary" />,
      title: "Multi-Chain Scan",
      description: "Detect unclaimed airdrops across Ethereum, Solana, Base, and major L2s in seconds."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-accent" />,
      title: "Verified Links",
      description: "Access official claim portals and protocols directly. Stay safe from phishing sites."
    },
    {
      icon: <Zap className="w-6 h-6 text-primary" />,
      title: "Real-Time Eligibility",
      description: "Get instant analytics on your eligibility based on onchain activity and wallet history."
    }
  ]

  const chains = [
    "Ethereum", "Solana", "Base", "Arbitrum", "Optimism", "Polygon", "zkSync", "Linea"
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-6 overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/20 rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              NEW: SOLANA ECOSYSTEM SCANNER LIVE
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
              Track <span className="text-primary">Unclaimed</span> Airdrops.<br />
              Discover Hidden Value.
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Scan multiple blockchains, detect eligible protocols, and claim what belongs to you. The most powerful airdrop dashboard built for the onchain future.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/checker">
                <Button size="lg" className="h-14 px-8 text-base gap-2 rounded-xl">
                  Launch Checker
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" size="lg" className="h-14 px-8 text-base rounded-xl">
                  Learn More
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Chains Row */}
      <section className="py-12 border-y border-white/5 bg-white/2 overflow-hidden">
        <div className="flex whitespace-nowrap gap-12 animate-marquee">
          {[...chains, ...chains].map((chain, i) => (
            <div key={i} className="text-muted-foreground/40 font-bold text-2xl uppercase tracking-widest flex items-center gap-2">
              <Layers className="w-5 h-5" />
              {chain}
            </div>
          ))}
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-6 max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features for Early Adopters</h2>
          <p className="text-muted-foreground">Everything you need to stay ahead of the airdrop game.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="glass h-full border-white/10 hover:border-primary/50 transition-colors group">
                <CardContent className="pt-8">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px]" />
        
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Stay Early with <span className="text-primary">FX1</span> Analytics</h2>
            <div className="space-y-6">
              {[
                { icon: <TrendingUp />, title: "Wallet Activity Score", desc: "Understand your percentile rank among protocol users." },
                { icon: <History />, title: "Track History", desc: "Never miss a claim deadline again with automated reminders." },
                { icon: <Zap />, title: "One-Click Execution", desc: "Direct paths to claim pages for verified protocols." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="glass rounded-3xl p-8 border-white/10 shadow-2xl">
             <div className="space-y-4">
                <div className="flex justify-between items-center p-4 rounded-xl bg-white/5">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary" />
                    <span className="font-medium">Optimism Layer 2</span>
                  </div>
                  <span className="text-primary font-bold">ELIGIBLE</span>
                </div>
                <div className="flex justify-between items-center p-4 rounded-xl bg-white/5">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-accent" />
                    <span className="font-medium">Jupiter Solana</span>
                  </div>
                  <span className="text-accent font-bold">CLAIMED</span>
                </div>
                <div className="flex justify-between items-center p-4 rounded-xl bg-white/5 border border-primary/20">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-slate-500" />
                    <span className="font-medium">Base Ecosystem</span>
                  </div>
                  <span className="text-muted-foreground font-bold italic">SCANNING...</span>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto glass rounded-[2rem] p-12 md:p-20 border-white/10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to find your hidden value?</h2>
          <p className="text-muted-foreground text-lg mb-10">
            Connect your wallet and scan over 50+ protocols instantly.
          </p>
          <Link to="/checker">
            <Button size="lg" className="h-14 px-10 text-lg rounded-xl gap-2">
              Start Scanning Now
              <ChevronRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
