import Head from "next/head";
import { Inter } from "next/font/google";
import LandingPage from "./Components/LandingPage";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div style={{fontFamily:'Inter'}} >
      <Head>
        <title>Better Boiler</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <LandingPage/>
    </div>
  );
}
