import { Box } from "@chakra-ui/react";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import "overlayscrollbars/overlayscrollbars.css";
import LeftBar from "../component/left-bar";
import { MiddleBarProfile } from "../component/middle-bar-profile";
import { RightBarProfile } from "../component/right-bar-profile";
import "./css/scrollbar.css";

export function AppLayoutProfile() {
  return (
    <Box display={"flex"} flexDirection={"row"}>
      <Box flex={"2"}>
        <LeftBar />
      </Box>
      <Box flex={"5"} overflowY={"auto"} height={"100vh"}>
      <OverlayScrollbarsComponent
          element="div"
          options={{ scrollbars: { autoHide: "scroll" } }}
          events={{
            scroll: () => {
              /* ... */
            },
          }}
          style={{ height: `100%` }}
          className="os-theme-dark"
          defer
        >
          <MiddleBarProfile />
        </OverlayScrollbarsComponent>

      </Box>
      <Box flex={"3"}>
        <RightBarProfile />
      </Box>
    </Box>
  );
}
