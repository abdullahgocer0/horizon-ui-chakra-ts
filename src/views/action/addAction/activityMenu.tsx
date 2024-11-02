import React from 'react';

// Chakra imports
import {
    Icon,
    Flex,
    Text,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    useDisclosure,
    useColorModeValue
} from '@chakra-ui/react';
// Assets
import {
    MdOutlineMoreHoriz,
    MdOutlinePerson,
    MdOutlineCardTravel,
    MdOutlineLightbulb,
    MdOutlineSettings
} from 'react-icons/md';
import { LuHotel, LuPlus, LuPlusCircle } from 'react-icons/lu';
import { FcPlus } from 'react-icons/fc';
import { FaHotel } from 'react-icons/fa';

export default function ActivityMenu(props: { [x: string]: any ,clickTimeLine: (arg0: string) => void, timeLineIcon: any ,inputActivity:string}) {
    const { clickTimeLine,timeLineIcon,inputActivity, ...rest } = props;

    const textColor = useColorModeValue('secondaryGray.500', 'white');
    const textHover = useColorModeValue(
        { color: 'secondaryGray.900', bg: 'unset' },
        { color: 'secondaryGray.500', bg: 'unset' }
    );
    const iconColor = useColorModeValue('brand.500', 'white');
    const bgList = useColorModeValue('white', 'whiteAlpha.100');
    const bgShadow = useColorModeValue('14px 17px 40px 4px rgba(112, 144, 176, 0.08)', 'unset');
    const bgButton = useColorModeValue('secondaryGray.300', 'whiteAlpha.100');
    const bgHover = useColorModeValue({ bg: 'secondaryGray.400' }, { bg: 'whiteAlpha.50' });
    const bgFocus = useColorModeValue({ bg: 'secondaryGray.300' }, { bg: 'whiteAlpha.100' });

    // Ellipsis modals
    const { isOpen: isOpen1, onOpen: onOpen1, onClose: onClose1 } = useDisclosure();

    return (
        <Menu isOpen={isOpen1} onClose={onClose1}>
            <MenuButton
                alignItems='center'
                justifyContent='center'
                bg={bgButton}
                _hover={bgHover}
                _focus={bgFocus}
                _active={bgFocus}
                w='37px'
                h='37px'
                lineHeight='100%'
                onClick={  onOpen1}
                borderRadius='10px'
                {...rest}>
                <Icon as={timeLineIcon} color={iconColor} w='24px' h='24px' />
            </MenuButton>
            <MenuList
                w='150px'
                minW='unset'
                maxW='150px !important'
                border='transparent'
                backdropFilter='blur(63px)'
                bg={bgList}
                boxShadow={bgShadow}
                borderRadius='20px'
                p='15px'>
                <MenuItem
                    onClick={() => {
                        console.log('Hotel');
                        // Perform action for Konaklama
                        clickTimeLine('Hotel');
                    }}
                    transition='0.2s linear'
                    color={textColor}
                    _hover={textHover}
                    p='0px'
                    borderRadius='8px'
                    _active={{
                        bg: 'transparent'
                    }}
                    _focus={{
                        bg: 'transparent'
                    }}
                    mb='10px'>
                    <Flex align='center'>
                        <Icon as={LuHotel} h='16px' w='16px' me='8px' />
                        <Text fontSize='sm' fontWeight='400'>
                            Konaklama
                        </Text>
                    </Flex>
                </MenuItem>
                <MenuItem
                    onClick={() => {
                        console.log('Clicked2');
                        // Perform action for Yeme İçme
                        clickTimeLine('Eating');
                    }}
                    transition='0.2s linear'
                    p='0px'
                    borderRadius='8px'
                    color={textColor}
                    _hover={textHover}
                    _active={{
                        bg: 'transparent'
                    }}
                    _focus={{
                        bg: 'transparent'
                    }}
                    mb='10px'>
                    <Flex align='center'>
                        <Icon as={MdOutlineCardTravel} h='16px' w='16px' me='8px' />
                        <Text fontSize='sm' fontWeight='400'>
                            Yeme İçme
                        </Text>
                    </Flex>
                </MenuItem>
                <MenuItem
                    onClick={() => {
                        console.log('Clicked3');
                        // Perform action for Eğlence
                        clickTimeLine('Enjoyment');
                    }}
                    transition='0.2s linear'
                    p='0px'
                    borderRadius='8px'
                    color={textColor}
                    _hover={textHover}
                    _active={{
                        bg: 'transparent'
                    }}
                    _focus={{
                        bg: 'transparent'
                    }}
                    mb='10px'>
                    <Flex align='center'>
                        <Icon as={MdOutlineLightbulb} h='16px' w='16px' me='8px' />
                        <Text fontSize='sm' fontWeight='400'>
                            Eğlence
                        </Text>
                    </Flex>
                </MenuItem>
                <MenuItem
                    onClick={() => {
                        console.log('Clicked');
                        // Perform action for Gezi
                        clickTimeLine('Discovery');
                    }}
                    transition='0.2s linear'
                    color={textColor}
                    _hover={textHover}
                    p='0px'
                    borderRadius='8px'
                    _active={{
                        bg: 'transparent'
                    }}
                    _focus={{
                        bg: 'transparent'
                    }}>
                    <Flex align='center'>
                        <Icon as={MdOutlineSettings} h='16px' w='16px' me='8px' />
                        <Text fontSize='sm' fontWeight='400'>
                            Gezi
                        </Text>
                    </Flex>
                </MenuItem>
            </MenuList>
        </Menu>
    );
                }
