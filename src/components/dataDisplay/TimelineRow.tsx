import { Avatar, Box, Button, Center, Flex, FormLabel, IconButton, Input, Select, Text, useColorModeValue } from '@chakra-ui/react';
import Usa from 'assets/img/dashboards/usa.png';
import { LuBadgePlus, LuFilePlus, LuPhone, LuPlus, LuPlusCircle } from "react-icons/lu"
import {CheckIcon, DownloadIcon, AddIcon, ChatIcon } from '@chakra-ui/icons'
import { Icon } from "@chakra-ui/react"
import ActivityMenu from 'views/action/addAction/activityMenu';
import { useState } from 'react';


export default function TimelineRow(props: { logo: any, title: any, date: any, color: string, index: number, arrLength: number,clickTimeLine:any,timeLineIcon:any,inputActivity:any,handleInputChange: (value: string,index:any) => void;inputActivityPlaceHolder:string }) {
	const { logo, title, date, color, index, arrLength,clickTimeLine ,timeLineIcon,inputActivity,handleInputChange,inputActivityPlaceHolder} = props;
	const textColor = useColorModeValue('gray.700', 'white.300');
	const bgIconColor = useColorModeValue('white.300', 'gray.700');

	return (
		<Flex alignItems='center' minH='78px' justifyContent='start' mb='1px'>
			<Flex direction='column' h='100%' justify="center">
				{ 
				 <IconButton  variant="outline" rounded="full" aria-label="Search database">
					<ActivityMenu clickTimeLine={clickTimeLine} timeLineIcon={timeLineIcon} inputActivity={inputActivity}></ActivityMenu>
			    </IconButton>
				
				}
		{/* 		<Flex me='-16px' mt='1px' >
					<FormLabel htmlFor='balance'>
						<Avatar size="sm" src={Usa} />
					</FormLabel>
					<Select id='balance' variant='mini' mt='1px' me='0px' defaultValue='usd'>
						<option value='usd'>USD</option>
						<option value='eur'>EUR</option>
						<option value='gba'>GBA</option>
					</Select>
				</Flex> */}
				<Box w='2px' bg='gray.300' alignSelf="center" h={index === arrLength - 1 ? '36px' : '36px'} />
			</Flex>
			<Flex direction='column' alignItems="center" mb="10px" h='100%'>
				<Text fontSize='sm' color={textColor} fontWeight='bold'>
					{title}
				</Text>

				{inputActivityPlaceHolder&&
				<Input  onChange={(e) => handleInputChange(e.target.value, index)} variant="outline" placeholder={inputActivityPlaceHolder} ></Input>
				}
				<Text fontSize='sm' color='gray.400' fontWeight='normal'>
					
				</Text>
			</Flex>
		</Flex>
	);
}
