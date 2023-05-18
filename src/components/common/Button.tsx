import { Box, Text } from "@chakra-ui/react"
import Image from "next/image"

export default function Button({ bgColor = '', width = '', minHeight = '', title = '', color = '', icon = '', onClick = '' }) {
  return (
    <Box bgColor={bgColor} borderRadius={'30px'} w={width} minH={minHeight} display={'flex'} flexDirection={'row'} justifyContent={icon === '' ? 'center' : 'space-between'} alignItems={'center'} gap={6} px={3} cursor={'pointer'} onClick={onClick === '' ? null : onClick}>
      {icon === '' ? null : <Image src={icon} alt="icon" />}
      <Text fontFamily={'Inter'} fontStyle={'normal'} fontWeight={600} fontSize={'16px'} lineHeight={'24px'} color={color}>{title}</Text>
    </Box>
  )
}