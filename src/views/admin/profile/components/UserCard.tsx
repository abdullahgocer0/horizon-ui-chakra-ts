// Chakra imports
import { Avatar, Box, Flex, HStack, Icon, Image, Link, Stack, Text, useColorModeValue } from '@chakra-ui/react';
// Custom components
import Card from 'components/card/Card';
// Assets
import { MdEdit } from 'react-icons/md';
import { start } from 'repl';

export default function UserCard(props: {
	title: string;
	ranking: number | string;
	link: string;
	image: string;
	[x: string]: any;
}) {
	const { userName,title, ranking, link, image, ...rest } = props;
	// Chakra Color Mode
	const textColorPrimary = useColorModeValue('secondaryGray.900', 'white');
	const textColorSecondary = 'gray.400';
	const brandColor = useColorModeValue('brand.500', 'white');
	const bg = useColorModeValue('white', 'navy.700');
	return (
		<Card bg={bg} {...rest} p='14px'>
				<Flex align='start' direction={{ base: 'row', md: 'row' }}>
				<Avatar
						h={{ base: '48px', xl: '36px', '2xl': '48px' }}
						w={{ base: '48px', xl: '36px', '2xl': '48px' }}
						src={image}
					
					/>
				<Box mt={{ base: '10px', md: '0' }} ml='10px' >
			
					<Text color={textColorPrimary} fontWeight='500' fontSize='md' mb='4px'>
						{userName}
					</Text>
					<Text fontWeight='500' color={textColorSecondary} fontSize='sm' me='4px'>
						Gün #{ranking} •{' '}
						<Link fontWeight='500' color={brandColor} href={link} fontSize='sm'>
							{title}
						</Link>
					</Text>
				</Box>			
			</Flex>
		</Card>
	);
}
