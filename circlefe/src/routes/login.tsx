import { LoginForm } from "@/features/auth/component/login-form";
import { Box } from "@chakra-ui/react";

export default function LoginRoute() {
    return (
        <Box
            backgroundColor={"brand.background"}
            backgroundSize={"cover"}
            minHeight={"100vh"}
        >
            <Box
                display={"flex"}
                justifyContent={"center"}
                color={"white"}>
                <LoginForm />
            </Box>
        </Box>
    )
}