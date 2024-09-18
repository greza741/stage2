import { Box } from "@chakra-ui/react";
import LeftBar from "../component/left-bar";
import { MiddleBar } from "../component/middle-bar";
import { RightBar } from "../component/right-bar";
import 'overlayscrollbars/overlayscrollbars.css';
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import "./css/scrollbar.css"


export default function AppLayout() {
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
                <MiddleBar />
                </OverlayScrollbarsComponent>
            </Box>
            <Box flex={"3"} >
                <RightBar />
            </Box>
        </Box>
    )
}