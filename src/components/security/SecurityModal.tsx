import React, { useState } from 'react'
import { Shield, ExternalLink, Clock, AlertTriangle } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'

interface SecurityModalProps {
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
  projectName: string
  claimUrl: string
}

export function SecurityModal({
  isOpen,
  onClose,
  onConfirm,
  projectName,
  claimUrl,
}: SecurityModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-background border-2 border-border">
        <DialogHeader className="flex flex-col items-center text-center">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
            <Shield className="w-6 h-6 text-primary" />
          </div>
          <DialogTitle className="text-2xl font-bold">Security Notice</DialogTitle>
          <DialogDescription className="text-muted-foreground mt-2">
            You are now leaving <span className="font-bold text-foreground">Airdrop CheckMate</span> to visit the official claim page for:
          </DialogDescription>
          <p className="text-primary font-bold text-xl mt-4">{projectName}</p>
        </DialogHeader>

        <div className="bg-primary/5 border border-primary/10 rounded-xl p-4 my-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
            Official URL
          </p>
          <p className="text-sm font-mono break-all text-primary/80">
            {claimUrl}
          </p>
        </div>

        <div className="space-y-3 mb-6">
          <div className="flex items-start gap-3">
            <div className="mt-1 w-4 h-4 rounded-full bg-green-500/20 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-green-500" />
            </div>
            <p className="text-sm text-muted-foreground">FX1 Digital Hubs has verified this link as safe</p>
          </div>
          <div className="flex items-start gap-3">
            <div className="mt-1 w-4 h-4 rounded-full bg-yellow-500/20 flex items-center justify-center">
              <AlertTriangle className="w-3 h-3 text-yellow-500" />
            </div>
            <p className="text-sm text-muted-foreground">Always check the URL before signing transactions</p>
          </div>
        </div>

        <DialogFooter className="flex flex-row gap-3 sm:justify-center">
          <Button
            variant="outline"
            onClick={onClose}
            className="flex-1"
          >
            Cancel
          </Button>
          <Button
            variant="default"
            onClick={onConfirm}
            className="flex-1 bg-primary text-primary-foreground font-bold"
          >
            Continue Safely
          </Button>
        </DialogFooter>
        <p className="text-[10px] text-center text-muted-foreground mt-2 italic">
          Powered by FX1 Digital Hubs • Built on Base
        </p>
      </DialogContent>
    </Dialog>
  )
}
