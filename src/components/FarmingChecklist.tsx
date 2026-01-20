import React from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Badge } from '@/components/ui/badge'
import { Rocket, Target, Send, Users } from 'lucide-react'

export function FarmingChecklist() {
  const steps = [
    { id: '1', title: 'Bridge to Base', desc: 'Move at least $100 ETH to Base Mainnet.', icon: <Rocket className="w-4 h-4" /> },
    { id: '2', title: 'Swap on Aerodrome', desc: 'Perform 3+ swaps to generate volume.', icon: <Target className="w-4 h-4" /> },
    { id: '3', title: 'Interact with Base Name Service', desc: 'Register a .base name to establish identity.', icon: <Users className="w-4 h-4" /> },
    { id: '4', title: 'Deploy a Smart Contract', desc: 'Use Base Scan or ThirdWeb to deploy a simple contract.', icon: <Send className="w-4 h-4" /> },
  ]

  return (
    <Card className="glass border-white/10">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl">Farming Checklist</CardTitle>
            <CardDescription>Maxmize your eligibility for Base rewards</CardDescription>
          </div>
          <Badge className="bg-primary/20 text-primary border-none">4 STEPS</Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {steps.map((step) => (
          <div key={step.id} className="flex items-start gap-4 group">
            <Checkbox id={step.id} className="mt-1 border-white/20 data-[state=checked]:bg-primary data-[state=checked]:border-primary" />
            <div className="flex-1">
              <label htmlFor={step.id} className="text-sm font-bold flex items-center gap-2 cursor-pointer group-hover:text-primary transition-colors">
                {step.icon}
                {step.title}
              </label>
              <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                {step.desc}
              </p>
            </div>
          </div>
        ))}
        
        <div className="pt-4 border-t border-white/5">
           <div className="flex justify-between text-xs mb-2">
              <span className="text-muted-foreground">Completion Progress</span>
              <span className="text-primary font-bold">25%</span>
           </div>
           <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
              <div className="h-full bg-primary w-1/4" />
           </div>
        </div>
      </CardContent>
    </Card>
  )
}
