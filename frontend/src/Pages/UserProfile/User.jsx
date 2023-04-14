import React from 'react'
import { Box ,Stack,Text,Button,Textarea,VStack,HStack,SimpleGrid,Flex, Image} from "@chakra-ui/react"

function User() {

let log =  JSON.parse(localStorage.getItem("login")) || [];
let plansData = JSON.parse(localStorage.getItem("plans")) || []
console.log(plansData)

let newArray = plansData.filter((el)=>{
  return el.email===log.email
})
console.log(newArray)
  return (
    <Stack  backgroundColor={"purple.900"} w={"100vw"} h={"100vh"} >
<Flex gap={6} backgroundColor={"yellow.400"} pb={"20px"} flexDirection={"column"} s={"10px"} w="300px" h={"auto"} border="1px solid black" borderRadius={"10px"}
 margin={"auto"} alignItems={"center"} justifyContent={"center"} marginTop={"150px"}>
    <Image w={"100%"} h={"60%"} src={"https://res.cloudinary.com/merobusts/image/upload/v1518264117/head-659651_640.png"}  alt="poc"/>

<Text color={"black"}>{log.name}</Text>
<Text color={"black"}>{log.email}</Text>
{newArray.length>0 && <Text color={"black"} fontSize={"20px"} fontWeight={600}>SCHEDULED</Text>}

{
newArray.length>0 && newArray?.map((el,i)=>{
  return <Box key={i}  border={"1px solid grey"} w={"100%"} h={"auto"} borderRadius={"5px"} textAlign={"left"} backgroundColor={"blue.900"}>
<Text>Category:-{el.cat}</Text>
<Text>Trainer:-{el.trainer}</Text>
{/* <Text>{el.category}</Text> */}
  </Box>
})
}
</Flex>

    </Stack>
  )
}

export default User