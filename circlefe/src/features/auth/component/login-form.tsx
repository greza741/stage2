import { useLoginForm } from "@/features/hooks/use-login"
import { Box, Button, Input, Text, Link as ChakraLink } from "@chakra-ui/react"
import { Link as ReactRouterLink } from "react-router-dom"



export function LoginForm() {
    const { handleChange, handleSumbit } = useLoginForm()



    return (
        <Box >
            <Text fontSize={`300%`} color={`brand.green`}>Circle</Text>
            <Text fontSize={`200%`}>Login Account Circle</Text>
            <Box
                display="flex"
                flexDirection="column"
                gap="10px"
                width="300px"
            >
                <Input onChange={handleChange} name="email" type="email" placeholder="Email" />
                <Input onChange={handleChange} name="password" type="password" placeholder="Password" />
                <Button
                    onClick={handleSumbit}
                    backgroundColor="brand.green"
                    padding="20px"
                    color="white"
                    borderRadius="5px"
                >Login</Button>
                <Text>Don't have an account yet?
                    <ChakraLink as={ReactRouterLink} to={"/register"} color={"brand.green"}>
                        Create an account
                    </ChakraLink>
                </Text>
            </Box>
        </Box >
    )
}