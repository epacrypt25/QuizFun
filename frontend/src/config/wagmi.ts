import { http, createConfig } from 'wagmi'
import { baseSepolia, mainnet, sepolia } from 'wagmi/chains'

export const config = createConfig({
  chains: [baseSepolia, mainnet, sepolia],
  transports: {
    [baseSepolia.id]: http(),
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
})
