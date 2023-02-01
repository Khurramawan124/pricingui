"use client";
import React, { ElementType } from "react";
import { MonthlysubIcon } from "@/icons/Icons";
import { HassleFreeIcon } from "@/icons/Icons";
import { MoneyBackIcon } from "@/icons/Icons";
import { Box, HStack, Icon, StackProps, Text,Stack } from "@chakra-ui/react";
interface FeatureProps extends StackProps{
icon: ElementType;

}

function Features(props: FeatureProps){
    const { icon, children, ...rest} = props;
    return(
    
    <HStack {...rest} spacing = '24px'>
    <Icon as ={icon} boxSize = {['32px','32px','48px']}/>
    <Text align='left' fontSize='18px' fontWeight='700'>
        {children}
    </Text>
   
    </HStack>

);

}

export function Feature(){
return(
    <Box maxW = '1024px' m='auto' pt='60px' pb='32px'>
<Stack direction={['column','column','row']} px='48px' spacing={['24px','24px','20px']}>
<Features icon={MoneyBackIcon}> 30 days money back Garantee</Features>
<Features icon={HassleFreeIcon}> No setup fees
100% hassle-free</Features>
<Features icon={MonthlysubIcon}> No monthly subscription
Pay once and for all</Features>

</Stack>
</Box>

)


}

export default Feature;