import { Box } from "@chakra-ui/react";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import 'overlayscrollbars/overlayscrollbars.css';
import LeftBar from "../component/left-bar";
import { RightBar } from "../component/right-bar";
import "./css/scrollbar.css";
import { MiddleBarFollow } from "../component/middle-bar-follow";


export function AppLayoutFollow() {
    return (
        <Box display={"flex"} flexDirection={"row"} >
            <Box flex={"2"}>
                <LeftBar />
            </Box>
            <Box flex={"5"} overflowY={"auto"} height={"100vh"}>
                <OverlayScrollbarsComponent 
                element="div"
                options={{ scrollbars: { autoHide: 'scroll' } }}
                events={{ scroll: () => { /* ... */ } }}
                style={{height:`100%`}}
                className="os-theme-dark"
                defer >
                <MiddleBarFollow />
                </OverlayScrollbarsComponent>
            </Box>
            <Box flex={"3"} >
                <RightBar />
            </Box>
        </Box>
    )
}