// ./src/context/index.tsx
'use client'

import { wagmiAdapter, projectId, networks } from '@/config'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createAppKit } from '@reown/appkit/react'
import React, { type ReactNode } from 'react'
import { cookieToInitialState, WagmiProvider, type Config } from 'wagmi'

// Set up queryClient
const queryClient = new QueryClient()

// Set up metadata - MUST match your GitHub Pages URL exactly
const metadata = {
  name: 'One of One NFTs',
  description: 'Unique one-of-one NFT minting platform',
  url: 'https://asingaley.github.io/one-of-ones-nfts',
  icons: ['https://avatars.githubusercontent.com/u/179229932']
}

// Create the modal
export const modal = createAppKit({
  adapters: [wagmiAdapter],
  projectId,
  networks,
  metadata,
  themeMode: 'light',
  features: {
    analytics: false // Disable analytics to avoid 403 errors
  },
  themeVariables: {
    '--w3m-accent': '#000000',
  },
  allowUnsupportedChain: true
})

function ContextProvider({ children, cookies }: { children: ReactNode; cookies: string | null }) {
  const initialState = cookies ? cookieToInitialState(wagmiAdapter.wagmiConfig as Config, cookies) : undefined

  return (
    <WagmiProvider config={wagmiAdapter.wagmiConfig as Config} initialState={initialState}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  )
}

export default ContextProvider