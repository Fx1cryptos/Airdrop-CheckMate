import { Shield } from 'lucide-react'

export function FDHBadge() {
  return (
    <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 shadow-sm">
      <Shield className="w-3.5 h-3.5 text-primary fill-primary/10" />
      <span className="text-[10px] font-bold text-primary uppercase tracking-widest">
        Verified by FX1 Digital Hubs
      </span>
    </div>
  )
}

export function BaseBadge() {
  return (
    <div className="inline-flex items-center gap-2 bg-[#0052FF]/10 border border-[#0052FF]/20 rounded-full px-3 py-1">
      <div className="w-2 h-2 rounded-full bg-[#0052FF] animate-pulse" />
      <span className="text-[10px] font-extrabold text-[#0052FF] uppercase tracking-tighter">
        Built on Base
      </span>
    </div>
  )
}
