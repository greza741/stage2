import { Link as RRLink } from "react-router-dom";
import { Link as CLink, ComponentWithAs, LinkProps } from "@chakra-ui/react";

export function ChakraLink(props: ComponentWithAs<"a", LinkProps>) {
    return <CLink as={RRLink} {...props}></CLink>;
}