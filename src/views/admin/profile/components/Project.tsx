// Chakra imports
import { Avatar, Box, Flex, HStack, Icon, Image, Link, Stack, Text, useColorModeValue } from '@chakra-ui/react';
// Custom components
import Card from 'components/card/Card';
// Assets
import { MdEdit } from 'react-icons/md';
import { start } from 'repl';
import UserCard from './UserCard';
import Content from './Content';

export default function Project(props: {
	title: string;
	ranking: number | string;
	link: string;
	image: string;
	userName:string;
	[x: string]: any;
}) {
	const { title, ranking, link, image,userName, ...rest } = props;
	// Chakra Color Mode
	const textColorPrimary = useColorModeValue('secondaryGray.900', 'white');
	const textColorSecondary = 'gray.400';
	const brandColor = useColorModeValue('brand.500', 'white');
	const bg = useColorModeValue('white', 'navy.700');
	return (
		<Card bg={bg} {...rest} p='14px'>
			<div  >
			    <UserCard userName={userName} title={title} ranking={ranking} link={link} image={image} />
				<Content title={title} ranking={ranking} link={link} image={image} />
				</div>
		</Card>
	);
}
