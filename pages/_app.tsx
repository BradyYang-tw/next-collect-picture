import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import UI from "@/components/UI/UI";

export default function App({ Component, pageProps }: AppProps) {
  return <UI><Component {...pageProps} /></UI>
}
