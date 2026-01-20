import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function FAQ() {
  const faqs = [
    {
      question: "Is FX1 Airdrop Checkmate free to use?",
      answer: "Yes, our core airdrop scanning features are completely free. We may introduce premium analytics and automated farming features in the future, but identifying unclaimed rewards will always be accessible to all users."
    },
    {
      question: "Do I need to connect my wallet to use the checker?",
      answer: "No, you can manually enter any EVM or Solana wallet address to scan. However, connecting your wallet makes it faster to switch between accounts and provides a more integrated experience."
    },
    {
      question: "How does the scanning logic work?",
      answer: "We scan historical transaction data and protocol-specific metadata across supported blockchains. We compare your wallet's activity against known eligibility criteria for over 50+ major protocols."
    },
    {
      question: "Is it safe to click the claim links?",
      answer: "We only provide verified links to official protocol claim portals. For your safety, every link is protected by a Security Interstitial Modal that shows you the official URL before you leave our site. However, we always recommend verifying the URL yourself and never signing transactions on sites you don't trust. FX1 will never ask for your private keys."
    },
    {
      question: "Which blockchains are supported?",
      answer: "Currently, we support Ethereum, Solana, Base, Arbitrum, Optimism, Polygon, zkSync, and Linea. We are constantly adding new chains and L2s as they emerge."
    },
    {
      question: "Why does it say 'Possibly Eligible' for some protocols?",
      answer: "Some protocols haven't released their final snapshot criteria or are still in the 'points' phase. We flag these based on your high probability of inclusion based on typical airdrop models."
    }
  ]

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
        <p className="text-muted-foreground">Everything you need to know about FX1 Airdrop Checkmate.</p>
      </div>

      <Card className="glass border-white/10 p-6 md:p-10 rounded-[2rem]">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-white/5 py-2">
              <AccordionTrigger className="text-left font-bold hover:text-primary transition-colors hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Card>

      <div className="mt-16 text-center">
         <p className="text-sm text-muted-foreground mb-4">Still have questions?</p>
         <a href="mailto:support@fx1.com" className="text-primary font-bold hover:underline">
            Contact Support
         </a>
      </div>
    </div>
  )
}

import { Card } from '@/components/ui/card'
