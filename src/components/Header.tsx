"use client";
import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

function Header(){
return(
    <Box as ='section' pb = '112px'>
<Box   bg="#6B46C1" pt={['60px', '60px', '90px']} pb='198px'  px = "32px" margin="auto" textAlign={['left','left','center']}>
    <Heading  fontWeight='800' fontSize={['30px','30px','48px']} color="#F7FAFC">Simple pricing for your business</Heading>
    <Text fontWeight='500' fontSize={['18px','18px','24px']} color="#F7FAFC" pt='4'>Plans that are carefully crafted to suit your business.</Text>
</Box>
</Box>

)

}
export default Header;