import type { AppProps } from 'next/app'
import { AuthProvider } from 'contexts/AuthContext'

import { globalStyles } from 'styles/global'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )
}
