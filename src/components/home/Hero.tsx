import { Box, Text, Divider } from "@chakra-ui/react"
import Button from "../common/Button"
import Image from "next/image"
import { CARDS_DATA } from "./data"
import img4 from '/public/assets/images/seller/Vector.png'
import logo from 'public/assets/images/seller/image 25.png'
import star from 'public/assets/images/seller/star.png'

export default function Hero() {
  return (
    <Box w={'80%'}>

      <Box bgColor={'#001930'} width={'100%'} pt={5} borderTopLeftRadius={'30px'} pb={8}>
        <Box bgColor={'#4AB2E1'} width={'60%'} py={2} borderRadius={'6px'} mx={'auto'} >
          <Text fontFamily={'Inter'} fontStyle={'normal'} fontWeight={500} fontSize={'15px'} lineHeight={'150%'} textAlign={'center'} color={'white'}>✨ Thank your submission has been received, we will contact you soon ✨</Text>
        </Box>
        <Text fontFamily={'Inter'} fontStyle={'normal'} fontWeight={600} fontSize={'32px'} lineHeight={'150%'} textAlign={'center'} color={'#EDF4FF'} mt={50}>New Boiler Quote</Text>
        <Text fontFamily={'Inter'} fontStyle={'normal'} fontWeight={600} fontSize={'16px'} lineHeight={'150%'} textAlign={'center'} color={'#4AB2E1'} my={6}>What Happens Next?</Text>
        <Text fontFamily={'Inter'} fontStyle={'normal'} fontWeight={600} fontSize={'16px'} lineHeight={'150%'} textAlign={'center'} color={'#EDF4FF'} w={'75%'} mx={'auto'}>Someone from our team will give you a quick call from 0800 786765 to explain how the process works. Engineers interested in providing you with a free no-obligation quote will appear below.</Text>
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
              <Box><Button title="Call +44 998 9012" width={'222px'} height={'48px'} color={'#3FB71E'} icon={img4} bgColor={'#E5EEF3'} /></Box>
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
      </Box>

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

      <Box px={4} mt={3}>
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
            <Box><Button title="Request Quote" width={'192px'} height={'48px'} color={'#005A8C'} bgColor={'#FFFFFF'} /></Box>
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
            <Box><Button title="Request Quote" width={'192px'} height={'48px'} color={'#005A8C'} bgColor={'#FFFFFF'} /></Box>
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
            <Box><Button title="Request Quote" width={'192px'} height={'48px'} color={'#005A8C'} bgColor={'#FFFFFF'} /></Box>
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
            <Box><Button title="Request Quote" width={'192px'} height={'48px'} color={'#005A8C'} bgColor={'#FFFFFF'} /></Box>
            <Box><Button title="View Profile" width={'132px'} height={'48px'} color={'#005A8C'} bgColor={'#E5EEF3'} /></Box>
          </Box>
        </Box >

      </Box>
    </Box >
  )
}