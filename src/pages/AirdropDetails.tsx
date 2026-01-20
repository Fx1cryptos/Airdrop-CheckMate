import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  ArrowLeft, 
  ExternalLink, 
  ShieldCheck, 
  Users, 
  Calendar,
  DollarSign,
  Info
} from 'lucide-react'

export function AirdropDetails() {
  const { id } = useParams()
  
  // In a real app, you'd fetch this based on the ID
  const airdrop = {
    name: "Optimism Drop 4",
    chain: "Optimism",
    status: "eligible",
    value: "250 OP",
    description: "Drop 4 is dedicated to the superchain builders and active governance participants who have contributed to the growth of the Optimism ecosystem.",
    deadline: "2024-12-31",
    totalPool: "10,000,000 OP",
    participants: "150,000",
    requirements: [
      "Interacted with 5+ Superchain dApps",
      "Voted in Governance at least twice",
      "Held 100+ OP tokens during snapshot",
      "Mainnet transaction history > 6 months"
    ],
    officialLink: "https://app.optimism.io/airdrop"
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <Link to="/checker" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8 transition-colors">
        <ArrowLeft className="w-4 h-4" />
        Back to Checker
      </Link>

      <div className="grid md:grid-cols-[1fr_320px] gap-8">
        <div className="space-y-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Badge className="bg-primary/20 text-primary border-none">{airdrop.chain}</Badge>
              <Badge variant="outline" className="text-green-500 border-green-500/20 bg-green-500/5 uppercase tracking-widest text-[10px]">VERIFIED</Badge>
            </div>
            <h1 className="text-4xl font-bold mb-4">{airdrop.name}</h1>
            <p className="text-muted-foreground leading-relaxed text-lg">
              {airdrop.description}
            </p>
          </div>

          <Card className="glass border-white/10">
            <CardHeader>
              <CardTitle className="text-xl">Eligibility Requirements</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {airdrop.requirements.map((req, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {req}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <div className="bg-primary/5 border border-primary/20 rounded-3xl p-8 flex items-center justify-between">
            <div>
               <p className="text-sm text-muted-foreground mb-1">Your Estimated Reward</p>
               <p className="text-3xl font-bold text-primary">{airdrop.value}</p>
            </div>
            <Button size="lg" className="gap-2 px-8" asChild>
              <a href={airdrop.officialLink} target="_blank" rel="noopener noreferrer">
                Claim Now
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>

        <div className="space-y-6">
          <Card className="glass border-white/10">
            <CardHeader>
              <CardTitle className="text-sm uppercase tracking-widest text-muted-foreground">Protocol Info</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                  <DollarSign className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Total Pool</p>
                  <p className="font-bold">{airdrop.totalPool}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                  <Users className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Participants</p>
                  <p className="font-bold">{airdrop.participants}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-muted-foreground" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Deadline</p>
                  <p className="font-bold">{airdrop.deadline}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
             <div className="flex items-center gap-2 mb-3 text-primary">
                <ShieldCheck className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-tighter">Safety Notice</span>
             </div>
             <p className="text-[11px] text-muted-foreground leading-relaxed">
                Always ensure you are connecting to the official protocol website. FX1 Airdrop Checkmate provides links for convenience but does not control external protocols.
             </p>
          </div>
        </div>
      </div>
    </div>
  )
}
