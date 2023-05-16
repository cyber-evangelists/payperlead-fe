import { Box, Text } from "@chakra-ui/react"
import Image from "next/image"
import help from '/public/assets/images/help/help.png'
import msg from '/public/assets/images/help/msg.png'
import locate from '/public/assets/images/help/locate.png'

export default function HelpComponent() {
  return (
    <Box w={'80%'}>

      <Box bgColor={'#FFFFFF'} p={10} borderTopLeftRadius={'30px'} h={'100vh'}>
        <Text fontFamily={'Inter'} fontStyle={'normal'} fontWeight={600} fontSize={'32px'} lineHeight={'150%'} color={'#2B3950'}>Contact us</Text>

        <Box display={'flex'} flexDirection={'row'} gap={52} mt={12}>
          <Box display={'flex'} flexDirection={'column'}>
            <Image src={help} alt="img" />
            <Text fontFamily={'Inter'} fontStyle={'normal'} fontWeight={600} fontSize={'32px'} lineHeight={'150%'} color={'#2B3950'}>Help</Text>
            <Text fontFamily={'Inter'} fontStyle={'normal'} fontWeight={500} fontSize={'14px'} lineHeight={'150%'} color={'#EF4336'}>0808 156 3888</Text>
          </Box>
          <Box display={'flex'} flexDirection={'column'}>
            <Image src={msg} alt="img" />
            <Text fontFamily={'Inter'} fontStyle={'normal'} fontWeight={600} fontSize={'32px'} lineHeight={'150%'} color={'#2B3950'}>Aftercare</Text>
            <Text fontFamily={'Inter'} fontStyle={'normal'} fontWeight={500} fontSize={'14px'} lineHeight={'150%'} color={'#EF4336'}>Click here</Text>
          </Box>
        </Box>

        <Box display={'flex'} flexDirection={'column'} mt={12}>
          <Image src={locate} alt="img" />
          <Text fontFamily={'Inter'} fontStyle={'normal'} fontWeight={600} fontSize={'32px'} lineHeight={'150%'} color={'#2B3950'}>Our address</Text>
          <Text fontFamily={'Inter'} fontStyle={'normal'} fontWeight={500} fontSize={'14px'} lineHeight={'150%'} color={'#EF4336'}>100 Thornes Lane, Wakefield, WF2 7QX</Text>
        </Box>
      </Box>
    </Box>
  )
}
