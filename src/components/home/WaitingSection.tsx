import { Box, Flex, Text, Divider, Modal, ModalOverlay, ModalContent, ModalBody, useMediaQuery, CircularProgress, Center } from "@chakra-ui/react"
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

export function WaitingSection({ sellers, isGeolocation, onSellerClicked }) {
  const [breakpoint] = useMediaQuery("(max-width: 767px)");

  return (
    <Box bgColor={'#FFFFFF'} width={'100%'} pt={8} borderTopRadius={breakpoint ? '30px' : ''}>
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

      <Box pl={8} pr={{ base: 8, sm: 8, md: 10 }} mt={3}>
        {
          sellers && sellers.map((s) => (
            <Box display={breakpoint ? null : 'flex'} flexDirection={breakpoint ? null : 'row'} justifyContent={breakpoint ? null : 'space-between'} p={3} bgColor={'#FAFAFA'} borderRadius={'12px'} mb={3} key={s.id}>

              {breakpoint ?
                <><Box display={'flex'} flexDirection={'row'} justifyContent={'space-between'}>
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
                      <Text fontFamily={'Inter'} fontStyle={'normal'} fontWeight={400} fontSize={'19px'} lineHeight={'120%'} color={'#005A8C'}>{s.name}</Text>
                      <Text fontFamily={'Inter'} fontStyle={'normal'} fontWeight={400} fontSize={'14px'} lineHeight={'140%'} color={'#111518'} opacity={0.6}>2 miles away</Text>
                    </Box>
                    <Box>
                      <Image src={cloud} alt="logo" />
                    </Box>
                  </Box>
                  <Box display={'flex'} flexDirection={'row'} mt={8}>
                    <Text fontFamily={'Inter'} fontStyle={'normal'} fontWeight={500} fontSize={'16px'} lineHeight={'140%'} color={'#111518'} mr={1}>4.8</Text>
                    <Box><Image src={star} alt="logo" /></Box>
                    <Box><Image src={star} alt="logo" /></Box>
                    <Box><Image src={star} alt="logo" /></Box>
                    <Box><Image src={star} alt="logo" /></Box>
                    <Box><Image src={star} alt="logo" /></Box>
                  </Box></> :
                <><Box display={'flex'} flexDirection={'row'} alignItems={'center'} gap={5}>
                  <Box><Image src={logo} alt="logo" /></Box>
                  <Box><Text fontFamily={'Inter'} fontStyle={'normal'} fontWeight={400} fontSize={'16px'} lineHeight={'120%'} color={'#005A8C'}>{s.name}</Text></Box>
                  <Box display={'flex'} flexDirection={'row'}>
                    <Text fontFamily={'Inter'} fontStyle={'normal'} fontWeight={500} fontSize={'14px'} lineHeight={'140%'} color={'#111518'}>4.8</Text>
                    <Box><Image src={star} alt="logo" /></Box>
                    <Box><Image src={star} alt="logo" /></Box>
                    <Box><Image src={star} alt="logo" /></Box>
                    <Box><Image src={star} alt="logo" /></Box>
                    <Box><Image src={star} alt="logo" /></Box>
                    <Text fontFamily={'Inter'} fontStyle={'normal'} fontWeight={400} fontSize={'14px'} lineHeight={'140%'} color={'#111518'} opacity={0.6}>29 Reviews</Text>
                  </Box>
                </Box>
                  <Box display={'flex'} flexDirection={'row'} gap={4}>
                    <Box><Button title="Request Quote" width={'110%'} minHeight={'48px'} color={'#005A8C'} bgColor={'#FFFFFF'} /></Box>
                    <Box><Button title="View Profile" width={'110%'} minHeight={'48px'} color={'#005A8C'} bgColor={'#E5EEF3'} onClick={onSellerClicked} /></Box>
                  </Box></>}
              {breakpoint ? <Box display={'flex'} flexDirection={'column'} mt={4} gap={2} pb={3}>
                <Button title="Request Quote" width={'100%'} minHeight={'48px'} color={'#005A8C'} bgColor={'#FFFFFF'} />
                <Button title="View Profile" width={'100%'} minHeight={'48px'} color={'#005A8C'} bgColor={'#E5EEF3'} onClick={onSellerClicked} />
              </Box> : null}
            </Box >
          ))
        }

        {!sellers && isGeolocation !== false && (
          <Center p="5">
            <CircularProgress isIndeterminate={true} />
          </Center>
        )}

        {
          isGeolocation === false && (
            <Box p="5">
              <Text textAlign="center">This browser does not support location</Text>
            </Box>
          )
        }

        <Box px={8} pb={10}>
          <Text fontFamily={'Inter'} fontStyle={'normal'} fontWeight={400} fontSize={'14px'} lineHeight={'150%'} color={'#2B3950'} opacity={0.5}>4Better Boiler is operated by Pay Per Lead Ltd. Registered in England & Wales number 14088039. E&OEGas Safe Register is a registered trade mark of HSE and is used under license.</Text>
        </Box>

      </Box>
    </Box>
  )
}
