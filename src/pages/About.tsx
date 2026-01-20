import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Globe, Shield, Users, Rocket, ExternalLink } from 'lucide-react'

export function About() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About FX1 Digital Hubs</h1>
        <p className="text-xl text-muted-foreground">Building the infrastructure for the Onchain Future.</p>
      </div>

      <div className="space-y-12">
        <section className="space-y-6">
          <h2 className="text-3xl font-bold">Our Vision</h2>
          <p className="text-muted-foreground leading-relaxed">
            FX1 Digital Hubs is committed to simplifying the Web3 experience for everyone. We believe that the blockchain should be accessible, rewarding, and secure. Our suite of tools, led by <strong>Airdrop Checkmate</strong>, is designed to help users navigate the complex landscape of decentralized finance and digital ownership.
          </p>
        </section>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="glass border-white/10">
            <CardContent className="pt-6">
              <Shield className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Security First</h3>
              <p className="text-sm text-muted-foreground">
                We never ask for your private keys or seed phrases. Our tools only require public wallet addresses to scan for metadata and onchain interactions.
              </p>
            </CardContent>
          </Card>
          <Card className="glass border-white/10">
            <CardContent className="pt-6">
              <Globe className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Multi-Chain Native</h3>
              <p className="text-sm text-muted-foreground">
                From Ethereum and Solana to the newest L2s like Base, we support the chains where the most innovation and value are being created.
              </p>
            </CardContent>
          </Card>
        </div>

        <section className="bg-primary/5 rounded-3xl p-8 border border-primary/20 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-2">Built on Base</h3>
            <p className="text-muted-foreground">
              FX1 Airdrop Checkmate is a proud participant in the Base ecosystem, bringing high-quality tools to the onchain economy.
            </p>
          </div>
          <Button className="gap-2 shrink-0">
            Visit FX1 Hubs
            <ExternalLink className="w-4 h-4" />
          </Button>
        </section>

        <section className="space-y-8">
           <h2 className="text-3xl font-bold">The Team</h2>
           <p className="text-muted-foreground leading-relaxed">
             Our team consists of veteran blockchain developers, data analysts, and designers who have been in the space since 2017. We've seen airdrops evolve from simple transfers to complex multi-step quests, and we're here to help you solve the puzzle.
           </p>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="text-center">
                  <div className="w-20 h-20 rounded-full bg-white/5 mx-auto mb-3 border border-white/10" />
                  <p className="font-bold text-sm">Team Member {i}</p>
                  <p className="text-xs text-muted-foreground">Core Contributor</p>
                </div>
              ))}
           </div>
        </section>
      </div>
    </div>
  )
}
