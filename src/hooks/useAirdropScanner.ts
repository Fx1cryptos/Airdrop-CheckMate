import { useState, useCallback } from 'react'
import { fetchLiveAirdrops, DaylightAbility } from '@/lib/daylight'

export type AirdropStatus = 'eligible' | 'possibly_eligible' | 'not_eligible' | 'claimed'

export interface AirdropResult {
  id: string
  name: string
  chain: string
  status: AirdropStatus
  value?: string
  claimLink?: string
  protocolLogo?: string
  description?: string
  projectVerified?: boolean
  expiresAt?: string
}

export function useAirdropScanner() {
  const [isScanning, setIsScanning] = useState(false)
  const [progress, setProgress] = useState(0)
  const [results, setResults] = useState<AirdropResult[]>([])

  const scan = useCallback(async (address: string) => {
    if (!address) return
    
    setIsScanning(true)
    setProgress(0)
    setResults([])

    try {
      // Start scanning simulation for UI progress
      const scanPromise = fetchLiveAirdrops(address)
      
      // Update progress bar while waiting for API
      const progressInterval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 90) {
            clearInterval(progressInterval)
            return 90
          }
          return prev + 5
        })
      }, 200)

      const liveAirdrops = await scanPromise
      clearInterval(progressInterval)
      setProgress(100)

      const mappedResults: AirdropResult[] = liveAirdrops.map(airdrop => ({
        id: airdrop.id,
        name: airdrop.project.name || airdrop.name,
        chain: airdrop.chain,
        status: 'eligible',
        value: airdrop.value ? `${airdrop.value.amount} ${airdrop.value.currency}` : undefined,
        claimLink: airdrop.claimUrl,
        protocolLogo: airdrop.project.logo || airdrop.imageUrl,
        description: airdrop.description,
        projectVerified: airdrop.project.verified,
        expiresAt: airdrop.expiresAt || undefined
      }))

      setResults(mappedResults)
    } catch (error) {
      console.error('Scanning failed:', error)
    } finally {
      setIsScanning(false)
    }
  }, [])

  return { isScanning, progress, results, scan }
}
