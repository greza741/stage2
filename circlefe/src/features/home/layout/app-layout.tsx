import { Box } from "@chakra-ui/react";
import LeftBar from "../component/left-bar";
import { MiddleBar } from "../component/middle-bar";
import { RightBar } from "../component/right-bar";

export default function AppLayout() {
    return (
        <Box display={"flex"} flexDirection={"row"} >
            <Box flex={"2"}>
                <LeftBar />
            </Box>
            <Box flex={"5"}>
                <MiddleBar />
            </Box>
            <Box flex={"3"}>
                <RightBar />
            </Box>
        </Box>
    )
}