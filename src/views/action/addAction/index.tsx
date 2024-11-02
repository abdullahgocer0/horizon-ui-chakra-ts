

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
// Chakra imports
import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Tabs, TabList, Tab, TabPanels, TabPanel, Container } from '@chakra-ui/react';

// Custom components
import { HSeparator } from "components/separator/Separator";
import DefaultAuth from "layouts/auth/Default";
// Assets
import illustration from "assets/img/auth/auth.png";
import { FcGoogle } from "react-icons/fc";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { RiEyeCloseLine } from "react-icons/ri";
import TimelineRow from "components/dataDisplay/TimelineRow";
import TimelineAction from "./timeline";
import { CloseIcon, MinusIcon } from "@chakra-ui/icons";

function AddAction() {
  // Chakra color mode
  const textColor = useColorModeValue("navy.700", "white");
  const textColorSecondary = "gray.400";
  const textColorDetails = useColorModeValue("navy.700", "secondaryGray.600");
  const textColorBrand = useColorModeValue("brand.500", "white");
  const brandStars = useColorModeValue("brand.500", "brand.400");
  const googleBg = useColorModeValue("secondaryGray.300", "whiteAlpha.200");
  const googleText = useColorModeValue("navy.700", "white");
  const googleHover = useColorModeValue(
    { bg: "gray.200" },
    { bg: "whiteAlpha.300" }
  );
  const googleActive = useColorModeValue(
    { bg: "secondaryGray.300" },
    { bg: "whiteAlpha.200" }
  );
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const [days, setDays] = useState<number[]>([1, 2, 3]);
  const handleAddDay = () => {
    setDays([...days, days.length + 1]);
  };
  const handleRemoveDay = (dayToRemove: number) => {
    setDays(days.filter(day => day !== dayToRemove));
  };
  return (
    <DefaultAuth illustrationBackground={illustration} image={illustration}>
      
      <Flex
        maxW={{ base: "100%", md: "max-content" }}
        w='100%'
        mx={{ base: "auto", lg: "0px" }}
        me='auto'
        h='100%'
        alignItems='start'
        justifyContent='center'
        mb={{ base: "30px", md: "60px" }}
        px={{ base: "25px", md: "0px" }}
        mt={{ base: "40px", md: "14vh" }}
        flexDirection='column'>
          <Flex  alignItems='start'
        justifyContent='center'>
        <Heading
          as='h1'
          size='xl'
          mb='10px'
          color={textColor}
          textAlign='center'>
          Add Action
        </Heading>
        <Button
                onClick={() => handleRemoveDay(days.length)}
                colorScheme="red"
                borderRadius="md"
                p={2}
                m={1}
              >
                -
              </Button>
              <Button
                onClick={handleAddDay}
                colorScheme="teal"
                borderRadius="md"
                p={2}
                m={1}
              >
                +
              </Button>
              </Flex>
        <Container>
          <Tabs variant="unstyled">
            <TabList display="flex" flexWrap="wrap" justifyContent="space-around">
              {days.map((day) => (
                <Flex key={day} alignItems="center">
                  <Tab
                    key={day}
                    _selected={{ color: 'white', bg: 'blue.500' }}
                    _hover={{ bg: 'blue.300' }}
                    borderRadius="md"
                    p={3}
                    m={1}
                  >
                    Day {day}
                  </Tab>

                </Flex>

              ))}
            </TabList>

            <TabPanels>
              {days.map((day) => (
                <TabPanel key={day}>
                  <Box p={3}>
                    <TimelineAction />
                  </Box>
                </TabPanel>
              ))}
            </TabPanels>
          </Tabs>
        </Container>
      </Flex>
    </DefaultAuth>
  );
}

export default AddAction;
