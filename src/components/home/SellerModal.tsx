import { Box, Flex, Text, Divider, Modal, ModalOverlay, ModalContent, ModalBody, useMediaQuery } from "@chakra-ui/react"
import React, { useEffect } from "react"
import Button from "../common/Button"
import HeaderNavMenu from "../common/HeaderNavMenu"
import Image from "next/image"
import { CARDS_DATA } from "./data"
import img4 from '/public/assets/images/seller/Vector.png'
import logo from 'public/assets/images/seller/image 25.png'
import star from 'public/assets/images/seller/star.png'
import safe from 'public/assets/images/seller/gas-safe.png'
import cloud from 'public/assets/images/seller/cloud.png'
import trust from 'public/assets/images/seller/trust.png'
import tick from 'public/assets/images/seller/tick.png'
import yell from 'public/assets/images/seller/yell.png'
import google from 'public/assets/images/seller/google.png'
import boiler from 'public/assets/images/seller/boiler.png'
import axios from "axios"
import { ThreeDots } from "react-loader-spinner"

export default function SellerModal({ isOpen, onClose }) {
  const [breakpoint] = useMediaQuery("(max-width: 767px)");

  return (
    <Modal isOpen={isOpen} onClose={onClose} size={'xl'} closeOnOverlayClick={true}>
      <ModalOverlay />
      <ModalContent bgColor={'#F4F4F4'} border={'1px solid #EDEDED'} borderRadius={'20px'}>
        <ModalBody p={6}>
          {breakpoint ? <Box borderRadius={'30px'} width={'20%'} h={'5px'} bgColor={'#D9D9D9'} mx={'auto'} mb={3} mt={-2}></Box> : null}
          <Box w={'100%'} bgColor={'#FFFFFF'} border={'1px solid rgba(255, 255, 255, 0.25)'} borderRadius={'12px'} p={3}>
            <Box display={'flex'} flexDirection={'row'} justifyContent={'space-between'}>
              <Box>
                <Image src={logo} alt="logo" />
              </Box>
              <Box>
                <Box display={'flex'} flexDirection={'row'} gap={2}>
                  <Image src={safe} alt="logo" />
                  <Box display={'flex'} flexDirection={'column'}>
                    <Text fontFamily={'Inter'} fontStyle={'normal'} fontWeight={400} fontSize={'14px'} lineHeight={'140%'} color={'#111518'}>Certified</Text>
                    <Text fontFamily={'Inter'} fontStyle={'normal'} fontWeight={400} fontSize={'14px'} lineHeight={'140%'} color={'#111518'} opacity={0.6}>28192</Text>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box display={'flex'} flexDirection={'row'} justifyContent={'space-between'} mt={3}>
              <Box>
                <Text fontFamily={'Inter'} fontStyle={'normal'} fontWeight={400} fontSize={'19px'} lineHeight={'120%'} color={'#005A8C'}>Boiler Installer UK</Text>
                <Text fontFamily={'Inter'} fontStyle={'normal'} fontWeight={400} fontSize={'14px'} lineHeight={'140%'} color={'#111518'} opacity={0.6}>2 miles away</Text>
              </Box>
              <Box>
                <Image src={cloud} alt="logo" />
              </Box>
            </Box>
            <Text width={'30%'} fontFamily={'Inter'} fontStyle={'normal'} fontWeight={400} fontSize={'14px'} lineHeight={'140%'} color={'#111518'} mt={2} pb={2}>24B Baker Street Marylebone London W1U 3BZ</Text>
            {/* {onClickModalBtn.callBtn && <Button title="Call +44 998 9012" color="#3FB71E" minHeight={'48px'} width={'100%'} icon={img4} bgColor="#E8F3E5" />} */}
            <Button title="Request Quote" color="#005A8C" minHeight={'48px'} width={'100%'} bgColor="#E5EEF3" />
            {/* {requestQuote === false ? null : <Button title="Quote has been requested" color="#111518" minHeight={'48px'} width={'100%'} bgColor="#F4F4F4" onClick={requestQuoteBtn} />} */}
          </Box>
          <Box w={'100%'} bgColor={'#FFFFFF'} border={'1px solid rgba(255, 255, 255, 0.25)'} borderRadius={'12px'} p={3} mt={3}>
            <Text fontFamily={'Inter'} fontStyle={'normal'} fontWeight={500} fontSize={'14px'} lineHeight={'24px'} color={'#005A8C'} my={2}>Message</Text>
            <Text fontFamily={'Inter'} fontStyle={'normal'} fontWeight={400} fontSize={'14px'} lineHeight={'140%'} color={'#111518'} my={2}>We extend a warm welcome to our trusted boiler company, committed to providing you with reliable heating solutions that keep you warm and comfortable throughout the year.</Text>
          </Box >
          <Box display={'flex'} flexDirection={'row'} gap={1} pt={3}>
            <Image src={yell} alt="logo" />
            <Text fontFamily={'Inter'} fontStyle={'normal'} fontWeight={500} fontSize={'16px'} lineHeight={'150%'} color={'#111518'}>24 Reviews</Text>
            <Image src={google} alt="logo" />
            <Text fontFamily={'Inter'} fontStyle={'normal'} fontWeight={500} fontSize={'16px'} lineHeight={'150%'} color={'#111518'}>24 Reviews</Text>
            <Image src={tick} alt="logo" />
            <Text fontFamily={'Inter'} fontStyle={'normal'} fontWeight={500} fontSize={'16px'} lineHeight={'150%'} color={'#111518'}>24 Reviews</Text>
            <Image src={trust} alt="logo" />
            <Text fontFamily={'Inter'} fontStyle={'normal'} fontWeight={500} fontSize={'16px'} lineHeight={'150%'} color={'#111518'}>24 Reviews</Text>
          </Box>
          <Box mt={6}>
            <Text fontFamily={'Inter'} fontStyle={'normal'} fontWeight={400} fontSize={'14px'} lineHeight={'140%'} color={'#111518'}>Overall Rating</Text>
            <Box display={'flex'} flexDirection={'row'} alignItems={'center'}>
              <Text fontFamily={'Inter'} fontStyle={'normal'} fontWeight={500} fontSize={'16px'} lineHeight={'140%'} color={'#111518'}>4.8</Text>
              <Box><Image src={star} alt="logo" /></Box>
              <Box><Image src={star} alt="logo" /></Box>
              <Box><Image src={star} alt="logo" /></Box>
              <Box><Image src={star} alt="logo" /></Box>
              <Box><Image src={star} alt="logo" /></Box>
              <Text fontFamily={'Inter'} fontStyle={'normal'} fontWeight={400} fontSize={'12px'} lineHeight={'140%'} color={'#111518'} opacity={0.6}>29 Reviews</Text>
            </Box>
            <Box display={'flex'} flexDirection={'row'} alignItems={'center'} mt={6} gap={2}>
              <Image src={boiler} alt="logo" />
              <Text fontFamily={'Inter'} fontStyle={'normal'} fontWeight={400} fontSize={'14px'} lineHeight={'140%'} color={'#111518'}>BetterBoiler Reviews</Text>
            </Box>
            <Box w={'100%'} bgColor={'#FFFFFF'} border={'1px solid rgba(255, 255, 255, 0.25)'} borderRadius={'12px'} p={3} mt={3}>
              <Text fontFamily={'Inter'} fontStyle={'normal'} fontWeight={500} fontSize={'14px'} lineHeight={'120%'} color={'#1F57C3'} my={2}>EC3N 4AB • Installation</Text>
              <Box display={'flex'} flexDirection={'row'} gap={1}>
                <Box><Image src={star} alt="logo" /></Box>
                <Box><Image src={star} alt="logo" /></Box>
                <Box><Image src={star} alt="logo" /></Box>
                <Box><Image src={star} alt="logo" /></Box>
                <Box><Image src={star} alt="logo" /></Box>
                <Text fontFamily={'Inter'} fontStyle={'normal'} fontWeight={200} fontSize={'12px'} lineHeight={'140%'} color={'#111518'} opacity={0.5}>5.00  April 24th, 2023</Text>
              </Box>
              <Text fontFamily={'Inter'} fontStyle={'normal'} fontWeight={400} fontSize={'14px'} lineHeight={'140%'} color={'#111518'} my={2}>Gary is a true professional! He swiftly installed 4 radiators, made pipework alterations, and left my house spotless. Highly recommend!</Text>
            </Box >
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}