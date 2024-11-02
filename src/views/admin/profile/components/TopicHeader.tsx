import { Flex, Text, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

const TopicHeader = (props: {
	title: string
}) => {
    const { title} = props;
    const textColor = useColorModeValue('secondaryGray.900', 'white');

    return (
        <Flex direction='column' content='center'>
        <Text color={textColor} fontSize='2xl' ms='24px' fontWeight='700'>
        {title}
       </Text>
       </Flex>

    );
};

export default TopicHeader;