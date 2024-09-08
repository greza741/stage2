import { RegisterForm } from "@/features/auth/component/register-form";
import { Box } from "@chakra-ui/react";

export default function RegisterRoute() {
    return (
        <Box
            backgroundColor={"brand.background"}
            backgroundSize={"cover"}
            minHeight={"100vh"}
        >
            <Box
                display="flex"
                justifyContent="center"
                color={"white"}
            >
                <RegisterForm />
            </Box>
        </Box>
    )
}