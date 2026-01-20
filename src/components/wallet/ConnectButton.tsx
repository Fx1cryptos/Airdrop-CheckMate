import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useWallet } from '@solana/wallet-adapter-react'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import { Shield, Wallet } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function ProfessionalConnect() {
  const { connected: solanaConnected } = useWallet()

  return (
    <div className="flex items-center gap-3">
      {/* EVM Wallet Connection via RainbowKit */}
      <ConnectButton.Custom>
        {({
          account,
          chain,
          openAccountModal,
          openChainModal,
          openConnectModal,
          mounted,
        }) => {
          const ready = mounted
          const connected = ready && account && chain

          return (
            <div
              {...(!ready && {
                'aria-hidden': true,
                style: {
                  opacity: 0,
                  pointerEvents: 'none',
                  userSelect: 'none',
                },
              })}
            >
              {(() => {
                if (!connected) {
                  return (
                    <Button
                      onClick={openConnectModal}
                      variant="default"
                      className="bg-[#0052FF] hover:bg-[#0040CC] text-white font-bold px-6 h-10 rounded-lg shadow-lg"
                    >
                      Connect EVM
                    </Button>
                  )
                }

                if (chain.unsupported) {
                  return (
                    <Button
                      onClick={openChainModal}
                      variant="destructive"
                      className="font-bold h-10"
                    >
                      Wrong Network
                    </Button>
                  )
                }

                return (
                  <div className="flex gap-2">
                    <Button
                      onClick={openChainModal}
                      variant="outline"
                      className="h-10 border-[#0052FF]/20 hover:bg-[#0052FF]/5"
                    >
                      {chain.hasIcon && (
                        <img
                          alt={chain.name ?? 'Chain icon'}
                          src={chain.iconUrl}
                          className="w-4 h-4 mr-2"
                        />
                      )}
                      {chain.name}
                    </Button>

                    <Button
                      onClick={openAccountModal}
                      variant="default"
                      className="bg-[#0052FF] hover:bg-[#0040CC] text-white font-bold h-10"
                    >
                      {account.displayName}
                    </Button>
                  </div>
                )
              })()}
            </div>
          )
        }}
      </ConnectButton.Custom>

      {/* Solana Wallet Connection */}
      <div className="solana-wallet-button">
        <WalletMultiButton className="!bg-[#14F195] hover:!bg-[#10D481] !text-black !font-bold !h-10 !rounded-lg !px-6 !py-0 !text-sm !transition-all" />
      </div>
    </div>
  )
}
