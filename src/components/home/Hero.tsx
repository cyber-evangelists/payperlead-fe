import { Box, Text, Divider, Modal, ModalOverlay, ModalContent, ModalBody, useMediaQuery } from "@chakra-ui/react"
import React from "react"
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

export default function Hero() {
  const [breakpoint] = useMediaQuery("(max-width: 767px)");
  const [modal, setModal] = React.useState(false)
  const modalOpen = () => setModal(true)
  const [requestQuote, setRequestQuote] = React.useState(false);
  const modalClose = () => {
    setModal(false);
    setOnClickModalBtn({
      callBtn: false,
      requestQuoteBtn: false,
    })
    setRequestQuote(false)
  }
  const [onClickModalBtn, setOnClickModalBtn] = React.useState({
    callBtn: false,
    requestQuoteBtn: false,
  })
  const onCallBtn = () => {
    setOnClickModalBtn({
      callBtn: true,
      requestQuoteBtn: false,
    })
  }
  const onRequestQuoteBtn = () => {
    setOnClickModalBtn({
      callBtn: false,
      requestQuoteBtn: true,
    })
  }
  const requestQuoteBtn = () => {
    setRequestQuote(true)
    setOnClickModalBtn({
      callBtn: false,
      requestQuoteBtn: false,
    })
  }
  return (
    <>
      <Modal isOpen={modal} onClose={modalClose} size={'xl'}>
        <ModalOverlay />
        <ModalContent bgColor={'#F4F4F4'} border={'1px solid #EDEDED'} borderRadius={'20px'}>
          <ModalBody p={8}>
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
              {onClickModalBtn.callBtn && <Button title="Call +44 998 9012" color="#3FB71E" height={'48px'} width={'100%'} icon={img4} bgColor="#E8F3E5" />}
              {onClickModalBtn.requestQuoteBtn && <Button title="Request Quote" color="#005A8C" height={'48px'} width={'100%'} bgColor="#E5EEF3" onClick={requestQuoteBtn} />}
              {requestQuote === false ? null : <Button title="Quote has been requested" color="#111518" height={'48px'} width={'100%'} bgColor="#F4F4F4" onClick={requestQuoteBtn} />}
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
                <Image src={star} alt="logo" />
                <Image src={star} alt="logo" />
                <Image src={star} alt="logo" />
                <Image src={star} alt="logo" />
                <Image src={star} alt="logo" />
                <Text fontFamily={'Inter'} fontStyle={'normal'} fontWeight={400} fontSize={'12px'} lineHeight={'140%'} color={'#111518'} opacity={0.6}>29 Reviews</Text>
              </Box>
              <Box display={'flex'} flexDirection={'row'} alignItems={'center'} mt={6} gap={2}>
                <Image src={boiler} alt="logo" />
                <Text fontFamily={'Inter'} fontStyle={'normal'} fontWeight={400} fontSize={'14px'} lineHeight={'140%'} color={'#111518'}>BetterBoiler Reviews</Text>
              </Box>
              <Box w={'100%'} bgColor={'#FFFFFF'} border={'1px solid rgba(255, 255, 255, 0.25)'} borderRadius={'12px'} p={3} mt={3}>
                <Text fontFamily={'Inter'} fontStyle={'normal'} fontWeight={500} fontSize={'14px'} lineHeight={'120%'} color={'#1F57C3'} my={2}>EC3N 4AB • Installation</Text>
                <Box display={'flex'} flexDirection={'row'} gap={1}>
                  <Image src={star} alt="logo" />
                  <Image src={star} alt="logo" />
                  <Image src={star} alt="logo" />
                  <Image src={star} alt="logo" />
                  <Image src={star} alt="logo" />
                  <Text fontFamily={'Inter'} fontStyle={'normal'} fontWeight={200} fontSize={'12px'} lineHeight={'140%'} color={'#111518'} opacity={0.5}>5.00  April 24th, 2023</Text>
                </Box>
                <Text fontFamily={'Inter'} fontStyle={'normal'} fontWeight={400} fontSize={'14px'} lineHeight={'140%'} color={'#111518'} my={2}>Gary is a true professional! He swiftly installed 4 radiators, made pipework alterations, and left my house spotless. Highly recommend!</Text>
              </Box >
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>

      <Box w={breakpoint ? '100%' : '80%'}>

        <Box bgColor={'#001930'} pt={5} borderTopLeftRadius={{ base: '0px', sm: '0px', md: '30px' }} pb={8}>
          <HeaderNavMenu />
          <Box bgColor={'#4AB2E1'} width={{ base: '90%', sm: '80%', md: '60%' }} py={2} borderRadius={'6px'} mx={'auto'} >
            <Text fontFamily={'Inter'} fontStyle={'normal'} fontWeight={500} fontSize={'15px'} lineHeight={'150%'} textAlign={'center'} color={'white'}>✨ Thank your submission has been received, we will contact you soon ✨</Text>
          </Box>
          <Text fontFamily={'Inter'} fontStyle={'normal'} fontWeight={600} fontSize={'32px'} lineHeight={'150%'} textAlign={'center'} color={'#EDF4FF'} mt={50}>New Boiler Quote</Text>
          <Text fontFamily={'Inter'} fontStyle={'normal'} fontWeight={600} fontSize={'16px'} lineHeight={'150%'} textAlign={'center'} color={'#4AB2E1'} my={6}>What Happens Next?</Text>
          <Text fontFamily={'Inter'} fontStyle={'normal'} fontWeight={600} fontSize={'16px'} lineHeight={'150%'} textAlign={'center'} color={'#EDF4FF'} w={{ base: '90%', sm: '85%', md: '75%' }} mx={'auto'}>Someone from our team will give you a quick call from 0800 786765 to explain how the process works. Engineers interested in providing you with a free no-obligation quote will appear below.</Text>
          {breakpoint ? <Box width={'90%'} border={'1px solid rgba(255, 255, 255, 0.25)'} borderRadius={'6px'} display={'flex'} flexDirection={'row'} justifyContent={'space-between'} mx={'auto'} py={3} px={6} mt={10}>
            <Text fontFamily={'Inter'} fontStyle={'normal'} fontWeight={500} fontSize={'16px'} lineHeight={'150%'} color={'#EDF4FF'}>Recommendation </Text>
            <Text fontFamily={'Inter'} fontStyle={'normal'} fontWeight={600} fontSize={'16px'} lineHeight={'150%'} color={'#EDF4FF'} opacity={0.5}>Find Nearby</Text>
          </Box> : null}
          <Box display={'flex'} flexDirection={'row'} mt={50} justifyContent={'center'} gap={2}>
            <Box w={'13px'} h={'13px'} bgColor={'#5BC2E7'} borderRadius={'50%'}></Box>
            <Box w={'13px'} h={'13px'} bgColor={'#1F8BCB'} borderRadius={'50%'}></Box>
            <Box w={'13px'} h={'13px'} bgColor={'#5BC2E7'} borderRadius={'50%'}></Box>
            <Box w={'13px'} h={'13px'} bgColor={'#1F8BCB'} borderRadius={'50%'}></Box>
          </Box>

          <Text fontFamily={'Inter'} fontStyle={'normal'} fontWeight={600} fontSize={'32px'} lineHeight={'150%'} textAlign={'center'} color={'#EDF4FF'} mt={50}>Gas Boiler Request</Text>
          <Text fontFamily={'Inter'} fontStyle={'normal'} fontWeight={600} fontSize={'16px'} lineHeight={'150%'} textAlign={'center'} color={'#4AB2E1'} my={6}>We found 3 best engineers in your area</Text>

          {CARDS_DATA.map((items, i) => (
            <Box w={'95%'} bgColor={'#FFFFFF'} border={'1px solid rgba(255, 255, 255, 0.25)'} borderRadius={'12px'} boxShadow={'0px 4px 25px rgba(17, 21, 24, 0.1)'} mx={'auto'} p={6} key={i} my={6}>
              <Box display={'flex'} flexDirection={'row'} alignItems={'center'} gap={6} pb={2}>
                <Box><Image src={items.logo1} alt="logo" /></Box>
                <Box display={'flex'} flexDirection={'column'}>
                  <Text fontFamily={'Inter'} fontStyle={'normal'} fontWeight={400} fontSize={'16px'} lineHeight={'120%'} color={'#005A8C'}>{items.logo1Name}</Text>
                  <Text fontFamily={'Inter'} fontStyle={'normal'} fontWeight={400} fontSize={'14px'} lineHeight={'140%'} color={'#111518'} opacity={0.6}>{items.miles}</Text>
                </Box>
                <Box display={'flex'} flexDirection={'row'}>
                  <Text fontFamily={'Inter'} fontStyle={'normal'} fontWeight={500} fontSize={'16px'} lineHeight={'140%'} color={'#111518'} mr={1}>{items.rating}</Text>
                  <Image src={items.star} alt="logo" />
                  <Image src={items.star} alt="logo" />
                  <Image src={items.star} alt="logo" />
                  <Image src={items.star} alt="logo" />
                  <Image src={items.star} alt="logo" />
                </Box>
                <Box display={'flex'} flexDirection={'row'} gap={2}>
                  <Image src={items.logo2} alt="logo" />
                  <Box display={'flex'} flexDirection={'column'}>
                    <Text fontFamily={'Inter'} fontStyle={'normal'} fontWeight={400} fontSize={'14px'} lineHeight={'140%'} color={'#111518'}>{items.logo2Name}</Text>
                    <Text fontFamily={'Inter'} fontStyle={'normal'} fontWeight={400} fontSize={'14px'} lineHeight={'140%'} color={'#111518'} opacity={0.6}>{items.cNumber}</Text>
                  </Box>
                </Box>
                <Box><Image src={items.logo3} alt="logo" /></Box>
                <Box><Button title="Call +44 998 9012" width={'222px'} height={'48px'} color={'#3FB71E'} icon={img4} bgColor={'#E5EEF3'} onClick={() => { modalOpen(); onCallBtn() }} /></Box>
                <Box><Button title="View Profile" width={'152px'} height={'48px'} color={'#005A8C'} bgColor={'#E5EEF3'} /></Box>
              </Box>
              <Box bgColor={'#EEEEEE'} opacity={0.5} border={'1px solid rgba(255, 255, 255, 0.25)'} borderRadius={'12px'} mx={'auto'}>
                <Text fontFamily={'Inter'} fontStyle={'normal'} fontWeight={500} fontSize={'14px'} lineHeight={'24px'} color={'#005A8C'} my={2} px={4}>Message</Text>
                <Text fontFamily={'Inter'} fontStyle={'normal'} fontWeight={400} fontSize={'14px'} lineHeight={'140%'} color={'#111518'} my={2} px={4}>{items.message}</Text>
              </Box>
            </Box>
          ))}
        </Box>

        <Box bgColor={'#FFFFFF'} width={'100%'} pt={8}>
          <Box display={'flex'} flexDirection={'row'}>
            <Divider w={'45%'} h={'1px'} opacity={0.2} bgColor={'#12315B'} ml={5} />
            <Text fontFamily={'Inter'} fontStyle={'normal'} fontWeight={400} fontSize={'14px'} lineHeight={'120%'} textAlign={'center'} color={'#12315B'} ml={6} mt={-2}>OR</Text>
            <Divider w={'45%'} h={'1px'} opacity={0.2} bgColor={'#12315B'} ml={5} />
          </Box>

          <Text fontFamily={'Inter'} fontStyle={'normal'} fontWeight={600} fontSize={'32px'} lineHeight={'150%'} textAlign={'center'} color={'#005A8C'} mt={50}>While  You’re Waiting...</Text>
          <Text fontFamily={'Inter'} fontStyle={'normal'} fontWeight={400} fontSize={'14px'} lineHeight={'120%'} textAlign={'center'} color={'#12315B'} my={6} opacity={0.7}>Browse through our list of local Gas-Safe engineers in your area & invite them to quote</Text>
          <Box display={'flex'} flexDirection={'row'} justifyContent={'space-between'} px={10}>
            <Box>
              <Text fontFamily={'Inter'} fontStyle={'normal'} fontWeight={400} fontSize={'16px'} lineHeight={'120%'} color={'#12315B'}>5 Results</Text>
            </Box>
            <Box display={'flex'} flexDirection={'row'} gap={4}>
              <Text fontFamily={'Inter'} fontStyle={'normal'} fontWeight={400} fontSize={'16px'} lineHeight={'120%'} color={'#12315B'} opacity={0.5}>Sort By</Text>
              <Text fontStyle={'normal'} fontWeight={400} fontSize={'16px'} lineHeight={'120%'} textAlign={'center'} color={'#12315B'}>Reviews</Text>
              <Text fontFamily={'Inter'} fontStyle={'normal'} fontWeight={400} fontSize={'16px'} lineHeight={'120%'} color={'#12315B'}>Distance</Text>
            </Box>
          </Box>

          <Box px={8} mt={3}>
            <Box display={'flex'} flexDirection={'row'} justifyContent={'space-between'} p={3} bgColor={'#FAFAFA'} borderRadius={'12px'} mb={3}>
              <Box display={'flex'} flexDirection={'row'} alignItems={'center'} gap={5}>
                <Box><Image src={logo} logo="logo" /></Box>
                <Box><Text fontFamily={'Inter'} fontStyle={'normal'} fontWeight={400} fontSize={'16px'} lineHeight={'120%'} color={'#005A8C'}>Bradford Company</Text></Box>
                <Box display={'flex'} flexDirection={'row'}>
                  <Text fontFamily={'Inter'} fontStyle={'normal'} fontWeight={500} fontSize={'14px'} lineHeight={'140%'} color={'#111518'}>4.8</Text>
                  <Image src={star} alt="logo" />
                  <Image src={star} alt="logo" />
                  <Image src={star} alt="logo" />
                  <Image src={star} alt="logo" />
                  <Image src={star} alt="logo" />
                  <Text fontFamily={'Inter'} fontStyle={'normal'} fontWeight={400} fontSize={'14px'} lineHeight={'140%'} color={'#111518'} opacity={0.6}>29 Reviews</Text>
                </Box>
              </Box>
              <Box display={'flex'} flexDirection={'row'} gap={4}>
                <Box><Button title="Request Quote" width={'192px'} height={'48px'} color={'#005A8C'} bgColor={'#FFFFFF'} onClick={() => { modalOpen(); onRequestQuoteBtn() }} /></Box>
                <Box><Button title="View Profile" width={'132px'} height={'48px'} color={'#Quote005A8C'} bgColor={'#E5EEF3'} /></Box>
              </Box>
            </Box >
            <Box display={'flex'} flexDirection={'row'} justifyContent={'space-between'} p={3} bgColor={'#FAFAFA'} borderRadius={'12px'} mb={3}>
              <Box display={'flex'} flexDirection={'row'} alignItems={'center'} gap={5}>
                <Box><Image src={logo} logo="logo" /></Box>
                <Box><Text fontFamily={'Inter'} fontStyle={'normal'} fontWeight={400} fontSize={'16px'} lineHeight={'120%'} color={'#005A8C'}>Bradford Company</Text></Box>
                <Box display={'flex'} flexDirection={'row'}>
                  <Text fontFamily={'Inter'} fontStyle={'normal'} fontWeight={500} fontSize={'14px'} lineHeight={'140%'} color={'#111518'}>4.8</Text>
                  <Image src={star} alt="logo" />
                  <Image src={star} alt="logo" />
                  <Image src={star} alt="logo" />
                  <Image src={star} alt="logo" />
                  <Image src={star} alt="logo" />
                  <Text fontFamily={'Inter'} fontStyle={'normal'} fontWeight={400} fontSize={'14px'} lineHeight={'140%'} color={'#111518'} opacity={0.6}>29 Reviews</Text>
                </Box>
              </Box>
              <Box display={'flex'} flexDirection={'row'} gap={4}>
                <Box><Button title="Request Quote" width={'192px'} height={'48px'} color={'#005A8C'} bgColor={'#FFFFFF'} onClick={() => { modalOpen(); onRequestQuoteBtn() }} /></Box>
                <Box><Button title="View Profile" width={'132px'} height={'48px'} color={'#005A8C'} bgColor={'#E5EEF3'} /></Box>
              </Box>
            </Box >
            <Box display={'flex'} flexDirection={'row'} justifyContent={'space-between'} p={3} bgColor={'#FAFAFA'} borderRadius={'12px'} mb={3}>
              <Box display={'flex'} flexDirection={'row'} alignItems={'center'} gap={5}>
                <Box><Image src={logo} logo="logo" /></Box>
                <Box><Text fontFamily={'Inter'} fontStyle={'normal'} fontWeight={400} fontSize={'16px'} lineHeight={'120%'} color={'#005A8C'}>Bradford Company</Text></Box>
                <Box display={'flex'} flexDirection={'row'}>
                  <Text fontFamily={'Inter'} fontStyle={'normal'} fontWeight={500} fontSize={'14px'} lineHeight={'140%'} color={'#111518'}>4.8</Text>
                  <Image src={star} alt="logo" />
                  <Image src={star} alt="logo" />
                  <Image src={star} alt="logo" />
                  <Image src={star} alt="logo" />
                  <Image src={star} alt="logo" />
                  <Text fontFamily={'Inter'} fontStyle={'normal'} fontWeight={400} fontSize={'14px'} lineHeight={'140%'} color={'#111518'} opacity={0.6}>29 Reviews</Text>
                </Box>
              </Box>
              <Box display={'flex'} flexDirection={'row'} gap={4}>
                <Box><Button title="Request Quote" width={'192px'} height={'48px'} color={'#005A8C'} bgColor={'#FFFFFF'} onClick={() => { modalOpen(); onRequestQuoteBtn() }} /></Box>
                <Box><Button title="View Profile" width={'132px'} height={'48px'} color={'#005A8C'} bgColor={'#E5EEF3'} /></Box>
              </Box>
            </Box >
            <Box display={'flex'} flexDirection={'row'} justifyContent={'space-between'} p={3} bgColor={'#FAFAFA'} borderRadius={'12px'} mb={3}>
              <Box display={'flex'} flexDirection={'row'} alignItems={'center'} gap={5}>
                <Box><Image src={logo} logo="logo" /></Box>
                <Box><Text fontFamily={'Inter'} fontStyle={'normal'} fontWeight={400} fontSize={'16px'} lineHeight={'120%'} color={'#005A8C'}>Bradford Company</Text></Box>
                <Box display={'flex'} flexDirection={'row'}>
                  <Text fontFamily={'Inter'} fontStyle={'normal'} fontWeight={500} fontSize={'14px'} lineHeight={'140%'} color={'#111518'}>4.8</Text>
                  <Image src={star} alt="logo" />
                  <Image src={star} alt="logo" />
                  <Image src={star} alt="logo" />
                  <Image src={star} alt="logo" />
                  <Image src={star} alt="logo" />
                  <Text fontFamily={'Inter'} fontStyle={'normal'} fontWeight={400} fontSize={'14px'} lineHeight={'140%'} color={'#111518'} opacity={0.6}>29 Reviews</Text>
                </Box>
              </Box>
              <Box display={'flex'} flexDirection={'row'} gap={4}>
                <Box><Button title="Request Quote" width={'192px'} height={'48px'} color={'#005A8C'} bgColor={'#FFFFFF'} onClick={() => { modalOpen(); onRequestQuoteBtn() }} /></Box>
                <Box><Button title="View Profile" width={'132px'} height={'48px'} color={'#005A8C'} bgColor={'#E5EEF3'} /></Box>
              </Box>
            </Box >
            <Box px={8} pb={10}>
              <Text fontFamily={'Inter'} fontStyle={'normal'} fontWeight={400} fontSize={'14px'} lineHeight={'150%'} color={'#2B3950'} opacity={0.5}>4Better Boiler is operated by Pay Per Lead Ltd. Registered in England & Wales number 14088039. E&OEGas Safe Register is a registered trade mark of HSE and is used under license.</Text>
            </Box>

          </Box>
        </Box>
      </Box >
    </>
  )
}
