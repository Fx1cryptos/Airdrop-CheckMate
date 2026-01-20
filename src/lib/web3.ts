import { getDefaultConfig } from '@rainbow-me/rainbowkit'
import { mainnet, base, arbitrum, optimism, polygon, zkSync, linea } from 'wagmi/chains'

export const config = getDefaultConfig({
  appName: 'FX1 Airdrop Checkmate',
  projectId: import.meta.env.VITE_WALLETCONNECT_PROJECT_ID || 'YOUR_PROJECT_ID',
  chains: [mainnet, base, arbitrum, optimism, polygon, zkSync, linea],
  ssr: true,
})
