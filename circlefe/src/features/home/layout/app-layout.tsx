import { Box } from "@chakra-ui/react";
import LeftBar from "../component/left-bar";
import { MiddleBar } from "../component/middle-bar";
import { RightBar } from "../component/right-bar";

export default function AppLayout() {
    return (
        <Box display={"flex"} flexDirection={"row"} >
            <Box flex={"1"}>
                <LeftBar />
            </Box>
            <Box flex={"1"}>
                <MiddleBar />
            </Box>
            <Box flex={"1"}>
                <RightBar />
            </Box>
        </Box>
    )
}