// Sample card from Airbnb
import TimelineRow from "components/dataDisplay/TimelineRow"
import {
    Box,
    Button,
    Checkbox,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Icon,
    Input,
    InputGroup,
    InputRightElement,
    Text,
    useColorModeValue,
} from "@chakra-ui/react";
import Card from 'components/card/Card';
import { CheckIcon, DownloadIcon, AddIcon, ChatIcon } from '@chakra-ui/icons'
import { useState } from "react";
import ActivityMenu from "./activityMenu";
import { LuHotel, LuPlus } from "react-icons/lu";
import { MdBreakfastDining, MdTravelExplore } from "react-icons/md";
import { IoMdHappy } from "react-icons/io";


const timelineDataActionHotel =
{
    logo: LuHotel,
    title: "Konaklama",
    color: "brand.300",
    key: "Hotel",
    inputActivity: "Konaklama bilgisi girin",
    inputActivityPlaceHolder: "Konaklama bilgisi girin"

}
const timelineDataActionEating =
{
    logo: MdBreakfastDining,
    title: "Yeme İçme",
    color: "brand.300",
    key: "Eating",
    inputActivity: "Yeme İçme bilgisi girin",
    inputActivityPlaceHolder: "Yeme İçme bilgisi girin"

}
const timelineDataActionEnjoy =
{
    logo: IoMdHappy,
    title: "Eğlence",
    color: "brand.300",
    key: "Enjoyment",
    inputActivity: "Eğlence yer bilgisi girin",
    inputActivityPlaceHolder: "Eğlence yer bilgisi girin"

}
const timelineDataActionDiscovery =
{
    logo: MdTravelExplore,
    title: "Discovery",
    color: "brand.300",
    key: "Discovery",
    inputActivity: "Gezilecek yer bilgisi girin",
    inputActivityPlaceHolder: "Gezilecek yer bilgisi girin"
}
interface ITimeline {
    logo: any;
    title: string;
    color: string;
    key: string;
    inputActivity: string;
    inputActivityPlaceHolder?: string;
}

export default function TimelineAction() {
    const textColor = useColorModeValue("gray.700", "white.300")
    const bgIconColor = useColorModeValue("white.300", "gray.700")
    const bg = useColorModeValue("gray.50", "gray.700")
    const [timelineDataInit, setTimeLineDataInit] = useState([
        {
            logo: LuPlus,
            title: "Planlamaya başla",
            color: "brand.300",
            key: "Start",
            inputActivity: "",
            inputActivityPlaceHolder: ""

        },
    ]);
    const [timelineData, setTimeLineData] = useState([
    ])
    const handleClickTimeLine = (param: any) => {
        // timelineDataInit öğelerini timelineData dizisinden kaldır
        const filteredTimelineData = timelineData.filter(item => !timelineDataInit.includes(item));

        switch (param) {
            case 'Hotel':

                // Yeni diziyi oluştur
                const updatedTimeline1: ITimeline[] = [
                    ...filteredTimelineData,
                    timelineDataActionHotel,
                    ...timelineDataInit
                ];
                setTimeLineData(updatedTimeline1);
                break;
            case 'Eating':

                // Yeni diziyi oluştur
                const updatedTimeline2: ITimeline[] = [
                    ...filteredTimelineData,
                    timelineDataActionEating,
                    ...timelineDataInit
                ];

                setTimeLineData(updatedTimeline2);
                break;
            case 'Discovery':
                const updatedTimeline3: ITimeline[] = [
                    ...filteredTimelineData,
                    timelineDataActionDiscovery,
                    ...timelineDataInit
                ];
                setTimeLineData(updatedTimeline3);
                break;
            case 'Enjoyment':
                const updatedTimeline4: ITimeline[] = [
                    ...filteredTimelineData,
                    timelineDataActionEnjoy,
                    ...timelineDataInit
                ];
                setTimeLineData(updatedTimeline4);

                break;

            default:
                break;
        }



    }
    const handleInputChange = (value: string,index:any) => {
        setTimeLineData(
            timelineData.map((item, i) => {
                if (i === index) {
                    return {
                        ...item,
                        inputActivity: value
                    };
                }
                return item;
            })
        );
    };
    return (
        <Card p="1rem" >

            {timelineData.length === 0 ? timelineDataInit.map((row, index) => (
                <TimelineRow key={index}
                    logo={row.logo}
                    title={row.title}
                    date=""
                    color={row.color}
                    index={index}
                    arrLength={timelineData.length}
                    clickTimeLine={(param: any) => handleClickTimeLine(param)}
                    timeLineIcon={row.logo}
                    inputActivity={row.inputActivity}
                    inputActivityPlaceHolder={row.inputActivityPlaceHolder}
                    handleInputChange={(value: string,index:any) => handleInputChange(value,index)}
                     />))
                :
                timelineData.map((row, index, arr) => {
                    return (
                        <>
                            <TimelineRow
                                key={index}
                                logo={row.logo}
                                title={row.title}
                                date=""
                                color={row.color}
                                index={index}
                                arrLength={timelineData.length}
                                clickTimeLine={(param: any) => handleClickTimeLine(param)}
                                timeLineIcon={row.logo}
                                inputActivity={row.inputActivity}
                                inputActivityPlaceHolder={row.inputActivityPlaceHolder}

                                handleInputChange={(value: string,index:any) => handleInputChange(value,index)}
                            />
                        </>
                    )
                })}
        </Card>
    )
}
