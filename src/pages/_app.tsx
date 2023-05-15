import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import '../styles/fonts.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <CSSReset />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
