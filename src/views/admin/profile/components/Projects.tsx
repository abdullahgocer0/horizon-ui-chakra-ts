// Chakra imports
import { Text, useColorModeValue } from '@chakra-ui/react';
// Assets
import Project1 from 'assets/img/profile/Project1.png';
import Project2 from 'assets/img/profile/Project2.png';
import Project3 from 'assets/img/profile/Project3.png';
// Custom components
import Card from 'components/card/Card';
import { useState } from 'react';
import Project from 'views/admin/profile/components/Project';
import { useEffect, useRef } from 'react';
import TopicHeader from './TopicHeader';
import styled from 'styled-components';

export default function Projects(props: { [x: string]: any }) {
	const { ...rest } = props;
	// Chakra Color Mode
	const textColorPrimary = useColorModeValue('secondaryGray.900', 'white');
	const textColorSecondary = 'gray.400';
	const cardShadow = useColorModeValue('0px 18px 40px rgba(112, 144, 176, 0.12)', 'unset');
	const projects = [
		{ image: Project1, ranking: '3', link: '#', title: '3 günlük Bodrum tatili',userName:"Adela Parkson" },
		{ image: Project2, ranking: '2', link: '#', title: '2 günde Bodrum' ,userName:"Adela Parkson" },
		{ image: Project3, ranking: '1', link: '#', title: 'Günübirlik Bodrum' ,userName:"Adela Parkson" },
		{ image: Project1, ranking: '3', link: '#', title: '3 günlük Bodrum tatili' ,userName:"Adela Parkson" },
		{ image: Project2, ranking: '2', link: '#', title: '2 günde Bodrum' ,userName:"Adela Parkson" },
		{ image: Project3, ranking: '1', link: '#', title: 'Günübirlik Bodrum' ,userName:"Adela Parkson" },
		{ image: Project1, ranking: '3', link: '#', title: '3 günlük Bodrum tatili' ,userName:"Adela Parkson" },
		{ image: Project2, ranking: '2', link: '#', title: '2 günde Bodrum' ,userName:"Adela Parkson" },
		{ image: Project3, ranking: '1', link: '#', title: 'Günübirlik Bodrum' ,userName:"Adela Parkson" },
		{ image: Project1, ranking: '3', link: '#', title: '3 günlük Bodrum tatili' ,userName:"Adela Parkson" },
	
		
		// Add more projects here...
	];
	const chunkSize = 10;
	const chunkedProjects = Array.from({ length: Math.ceil(projects.length / chunkSize) }, (_, index) =>
		projects.slice(index * chunkSize, (index + 1) * chunkSize)
	);
	const [currentPage, setCurrentPage] = useState(0);

	const handleLoadMore = () => {

		setCurrentPage((prev) => prev + 1);
	};
	const CustomGrid = styled.div`
		@media screen and (min-width: 960px) {
			.css-zvfk7x {
				grid-template-columns: 1fr !important;
			}
		}
		@media screen and (min-width: 768px) {
			.css-zvfk7x {
				grid-template-columns: 1fr !important;
			}
		}
	`;
	return (
		<div>
				<TopicHeader title='Bodrum' />
			
				{chunkedProjects &&
					chunkedProjects
						.slice(0, currentPage + 1)
						.flat()
						.slice(0, (currentPage + 1) * 10)
						.map((project, index) => (
							<Project mb='10px' key={index} {...project} />
						))}
				{currentPage + 1 < chunkedProjects.length && (
					<Text
						color={textColorSecondary}
						fontSize='sm'
						mt='20px'
						mb='10px'
						textAlign='center'
						onClick={handleLoadMore}
						cursor='pointer'
					>
						Load more
					</Text>
				)}
			
			</div>
	);
}
