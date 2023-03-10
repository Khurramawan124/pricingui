"use client";
import React from "react";
import { Box, Heading, Text,Button,Flex,HStack,Icon,StackProps, Stack, } from "@chakra-ui/react";
import CheckIcon from "@/icons/Icons";
export const  ListItem = (props: StackProps)=>{
    const {children, ...rest} = props;
    return(
      <HStack as= 'li' spacing = '20px' {...rest}  alignItems="start">
        <Icon as ={CheckIcon} w={['12px','12px','22px']} h={['9px','9px','22px']}/>
        <Text textAlign={["left","left","center"]}>{children}</Text>
      </HStack>
    );
};

function Pricing(){
return(
    <Box mx='6'>
<Box maxW = "994px " margin = "auto" mt="-256px" borderRadius='12px' overflow='hidden'>
    <Flex direction={['column','column','row']}>
        <Box bg = '#F0EAFB' p ='60px' >
            <Text fontWeight='800' fontSize='24px'>Premium Pro</Text>
            <Heading as = "h3" fontSize={["48px","48px","60px"]} mt='16px' >$329</Heading>
            <Text color="#171923" fontSize='18px' fontWeight='500' mt='8px'>billed just once</Text>
            <Button colorScheme = 'purple' size = 'lg' w = '282px' mt= '24px'>Get Started</Button>
        </Box>
        <Box p = '60px' fontSize='18px' bg='white' boxShadow="0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04);">
            <Text align="left">
            Access these features when you get this pricing package for your business
            </Text>
            <Stack as = 'ul' spacing='20px' pt = '24px '>
                <ListItem> International calling and messaging API</ListItem>
                <ListItem> Additional phone numbers</ListItem>
                <ListItem> Automated messages via Zapier</ListItem>
                <ListItem> 24/7 support and consulting</ListItem>

            </Stack>

        </Box>
    </Flex>

</Box> 
</Box>

)

}
export default Pricing;