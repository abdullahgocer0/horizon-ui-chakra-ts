/*!
  _   _  ___  ____  ___ ________  _   _   _   _ ___   
 | | | |/ _ \|  _ \|_ _|__  / _ \| \ | | | | | |_ _| 
 | |_| | | | | |_) || |  / / | | |  \| | | | | || | 
 |  _  | |_| |  _ < | | / /| |_| | |\  | | |_| || |
 |_| |_|\___/|_| \_\___/____\___/|_| \_|  \___/|___|
                                                                                                                                                                                                                                                                                                                                       
=========================================================
* Horizon UI - v1.1.0
=========================================================

* Product Page: https://www.horizon-ui.com/
* Copyright 2022 Horizon UI (https://www.horizon-ui.com/)

* Designed and Coded by Simmmple

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// Chakra imports
import { Avatar, Box, Flex, FormLabel, Icon, Select, SimpleGrid, useColorModeValue } from '@chakra-ui/react';
// Assets
import Usa from 'assets/img/dashboards/usa.png';
import Project1 from 'assets/img/profile/Project1.png';

// Custom components
import MiniCalendar from 'components/calendar/MiniCalendar';
import MiniStatistics from 'components/card/MiniStatistics';
import IconBox from 'components/icons/IconBox';
import { MdAddTask, MdAttachMoney, MdBarChart, MdFileCopy } from 'react-icons/md';
import CheckTable from 'views/admin/rtl/components/CheckTable';
import ComplexTable from 'views/admin/default/components/ComplexTable';
import DailyTraffic from 'views/admin/default/components/DailyTraffic';
import PieCard from 'views/admin/default/components/PieCard';
import Tasks from 'views/admin/default/components/Tasks';
import TotalSpent from 'views/admin/default/components/TotalSpent';
import WeeklyRevenue from 'views/admin/default/components/WeeklyRevenue';
import tableDataCheck from 'views/admin/default/variables/tableDataCheck';
import tableDataComplex from 'views/admin/default/variables/tableDataComplex';
import Project from '../profile/components/Project';
import Projects from '../profile/components/Projects';

export default function UserReports() {
	const cardShadow = useColorModeValue('0px 18px 40px rgba(112, 144, 176, 0.12)', 'unset');

	// Chakra Color Mode
	const brandColor = useColorModeValue('brand.500', 'white');
	const boxBg = useColorModeValue('secondaryGray.300', 'whiteAlpha.100');
	return (
		<Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
			<SimpleGrid columns={{ base: 1, md: 2, lg: 3, '2xl': 6 }} gap='20px' mb='20px'>
			<Projects />
			</SimpleGrid>
		</Box>
	);
}
