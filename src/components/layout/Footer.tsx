import React from 'react'
import { Twitter, Github, Globe } from 'lucide-react'
import { FDHBadge, BaseBadge } from '@/components/ui/Badges'

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-background/50 backdrop-blur-sm py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-12">
          <div className="flex flex-col gap-4 items-center md:items-start text-center md:text-left">
            <div className="text-2xl font-black tracking-tighter">FX1 Digital Hubs</div>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              "Building Onchain Tools for the Future" — Reimagining how users discover and unlock hidden value in the multichain ecosystem.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-2">
              <FDHBadge />
              <BaseBadge />
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end gap-6">
            <div className="flex gap-8">
              <a href="#" className="text-muted-foreground hover:text-primary transition-all hover:scale-110">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-all hover:scale-110">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-all hover:scale-110">
                <Globe className="w-6 h-6" />
              </a>
            </div>
            <div className="text-right hidden md:block">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/50 mb-1">
                Security Partners
              </p>
              <div className="flex gap-4 grayscale opacity-50 contrast-125">
                <img src="https://cdn.blink.new/assets/base-logo.png" className="h-4" alt="Base" />
                <img src="https://cdn.blink.new/assets/ethereum-logo.png" className="h-4" alt="Ethereum" />
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase font-bold tracking-widest text-muted-foreground/40">
          <div>© {new Date().getFullYear()} FX1 Airdrop Checkmate. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
          </div>
          <div className="text-primary/60">
            Powered by FX1 Digital Hubs • Built on Base
          </div>
        </div>
      </div>
    </footer>
  )
}
