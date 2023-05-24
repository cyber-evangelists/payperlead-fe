import Head from "next/head";

import RequestSection from "@/components/home/RequestSection";
import MainLayout from "@/components/layouts/MainLayout";
import { WaitingSection } from "@/components/home/WaitingSection";
import { useEffect, useState } from "react";
import * as repository from "@/services/repository";
import SellerModal from "@/components/home/SellerModal";

export default function Home() {
  const [data, setData] = useState();
  const [isGeolocation, setGeolocation] = useState<boolean>();
  const [showModal, setShowModal] = useState<boolean>();

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        setData(await repository.getSellers({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        }));
      }, () => setGeolocation(false));
    } else {
      setGeolocation(false);
    }
  }, []);

  return (
    <>
      <Head>
        <title>Better Boiler</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <SellerModal isOpen={showModal} onClose={() => setShowModal(false)} />

      <MainLayout>
        <RequestSection />
        <WaitingSection
          sellers={data}
          isGeolocation={isGeolocation}
          onSellerClicked={() => setShowModal(true)}
        />
      </MainLayout>
    </>
  );
}
