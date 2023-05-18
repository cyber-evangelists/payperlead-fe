import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider >
      <CSSReset />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}


