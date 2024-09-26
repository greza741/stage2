import { Box } from "@chakra-ui/react";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import 'overlayscrollbars/overlayscrollbars.css';
import LeftBar from "../component/left-bar";
import { MiddleBarSearch } from "../component/middle-bar-search";
import { RightBar } from "../component/right-bar";
import "./css/scrollbar.css";


export function AppLayoutSearch() {
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
                <MiddleBarSearch />
                </OverlayScrollbarsComponent>
            </Box>
            <Box flex={"3"} >
                <RightBar />
            </Box>
        </Box>
    )
}