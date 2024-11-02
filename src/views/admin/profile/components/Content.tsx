// Chakra imports
import { Avatar, Box, Button, Flex, HStack, Icon, Image, Link, Stack, Text, useColorModeValue } from '@chakra-ui/react';
// Custom components
import Card from 'components/card/Card';
// Assets
import { MdEdit, MdFavorite, MdFavoriteBorder } from 'react-icons/md';
import { start } from 'repl';
import { IoHeart, IoHeartOutline } from 'react-icons/io5';
import { useState } from 'react';

export default function Content(props: {
	title: string;
	ranking: number | string;
	link: string;
	image: string;
	[x: string]: any;
}) {
	const [ like, setLike ] = useState(false);

	const { title, ranking, link, image, ...rest } = props;
	// Chakra Color Mode
	const textColorPrimary = useColorModeValue('secondaryGray.900', 'white');
	const textColorSecondary = 'gray.400';
	const brandColor = useColorModeValue('brand.500', 'white');
	const bg = useColorModeValue('white', 'navy.700');
	

	return (
		<>
		<Box position="absolute" top="25px" right="25px">
		<Button
						position='absolute'
						bg='white'
						_hover={{ bg: 'whiteAlpha.900' }}
						_active={{ bg: 'white' }}
						_focus={{ bg: 'white' }}
						p='0px !important'
						top='14px'
						right='10px'
						borderRadius='50%'
						minW='36px'
						h='36px'
						onClick={() => {
							setLike(!like);
						}}>
						<Icon
							transition='0.2s linear'
							w='30px'
							h='30px'
							as={like ? IoHeart : IoHeartOutline}
							color='brand.500'
						/>
					</Button>
		</Box>
		<Image h='100%' w='100%' src={image} borderRadius='8px' me='20px' style={{alignSelf: "start"}} />
	
		</>
	);
}
