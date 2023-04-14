import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Text,
  Stack,
  Image,
} from "@chakra-ui/react";

function ModalChakra({ data}) {


 
  console.log(data);
  return (
   
      
      
          
          <ModalBody>
            {/* <Lorem count={2} /> */}
            <Stack
              w={"300px"}
              h={"250px"}
              boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"}
              m="auto"
            >
              <Image src={data.image} w={"100%"} h={"70%"} />
              <Text align={"center"} color={"black"}>
                {data.name}
              </Text>
              <Text align={"center"} color={"black"}>
                ${data.price}
              </Text>
            </Stack>
          </ModalBody>

         
      
  
  );
}

export default ModalChakra;
