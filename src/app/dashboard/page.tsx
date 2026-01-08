'use client';
import { useAccount } from 'wagmi';
import { Wallet, ConnectWallet } from '@coinbase/onchainkit/wallet';
import { useEffect, useState } from 'react';
import { checkEligibility } from '@/lib/eligibility';
import { memoryService } from '@/lib/mem0';

export default function Dashboard() {
  const { address, isConnected } = useAccount();
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isConnected && address) {
      handleSync();
    }
  }, [isConnected, address]);

  const handleSync = async () => {
    setLoading(true);
    const results = await checkEligibility(address!);
    setData(results);
    
    // Save to Memory Protocol
    await memoryService.saveUserProfile(address!, results);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-white text-[#0405aa] p-8">
      <header className="flex justify-between items-center mb-12">
        <h1 className="text-3xl font-bold font-space-grotesk">Airdrop CheckMate</h1>
        <ConnectWallet className="bg-[#0405aa] text-white px-6 py-2 rounded-full" />
      </header>

      {isConnected ? (
        <main className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Eligibility Score Gauge */}
          <div className="bg-slate-50 p-8 rounded-3xl border-2 border-[#0405aa]/10 flex flex-col items-center">
            <h2 className="text-xl font-semibold mb-4">Eligibility Score</h2>
            <div className="relative flex items-center justify-center">
               <svg className="w-32 h-32">
                 <circle className="text-gray-200" strokeWidth="10" stroke="currentColor" fill="transparent" r="50" cx="64" cy="64"/>
                 <circle className="text-[#0405aa]" strokeWidth="10" strokeDasharray={314} strokeDashoffset={314 - (314 * (data?.score || 0)) / 100} strokeLinecap="round" stroke="currentColor" fill="transparent" r="50" cx="64" cy="64"/>
               </svg>
               <span className="absolute text-2xl font-bold">{data?.score || 0}</span>
            </div>
            <p className="mt-4 text-sm text-center">Score based on your Base chain activity</p>
          </div>

          {/* Active Opportunities */}
          <div className="md:col-span-2 space-y-4">
            <h2 className="text-2xl font-bold">Active Opportunities</h2>
            <div className="grid gap-4">
              {loading ? (
                <div className="animate-pulse bg-slate-100 h-24 rounded-xl" />
              ) : (
                <div className="bg-[#0405aa] text-white p-6 rounded-2xl flex justify-between items-center">
                  <div>
                    <h3 className="font-bold">Base Ecosystem Grant</h3>
                    <p className="text-sm opacity-80">Action required: Mint Builder NFT</p>
                  </div>
                  <button className="bg-white text-[#0405aa] px-4 py-2 rounded-lg font-bold">Claim Now</button>
                </div>
              )}
            </div>
          </div>
        </main>
      ) : (
        <div className="text-center py-20">
          <h2 className="text-4xl font-bold mb-4">Connect your wallet to scan Base.</h2>
          <p>We analyze your on-chain history to find unclaimed rewards.</p>
        </div>
      )}
    </div>
  );
}
