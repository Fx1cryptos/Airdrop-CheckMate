import React from 'react'
import { Link } from 'react-router-dom'
import { Coins } from 'lucide-react'
import { ProfessionalConnect } from '@/components/wallet/ConnectButton'
import { BaseBadge } from '@/components/ui/Badges'

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10 h-16 flex items-center px-6 justify-between shadow-lg">
      <div className="flex items-center gap-4">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">
            <Coins className="text-white w-6 h-6" />
          </div>
          <span className="text-xl font-black tracking-tighter">FX1 <span className="text-primary">CHECKMATE</span></span>
        </Link>
        <div className="hidden lg:block">
          <BaseBadge />
        </div>
      </div>

      <div className="hidden md:flex items-center gap-8">
        <Link to="/" className="text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors">Home</Link>
        <Link to="/checker" className="text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors text-primary">Checker</Link>
        <Link to="/history" className="text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors">History</Link>
        <Link to="/about" className="text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors">About</Link>
      </div>

      <ProfessionalConnect />
    </nav>
  )
}
