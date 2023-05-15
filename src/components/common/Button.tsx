import { Box, Text } from "@chakra-ui/react"
import Image from "next/image"

export default function Button({ bgColor = '', width = '', height = '', title = '', color = '', icon = '' }) {
  return (
    <Box bgColor={bgColor} borderRadius={'30px'} w={width} h={height} display={'flex'} flexDirection={'row'} justifyContent={'center'} alignItems={'center'} gap={6} px={3} cursor={'pointer'}>
      {icon === '' ? null : <Image src={icon} alt="icon" />}
      <Text fontFamily={'Inter'} fontStyle={'normal'} fontWeight={600} fontSize={'16px'} lineHeight={'24px'} color={color}>{title}</Text>
    </Box>
  )
}