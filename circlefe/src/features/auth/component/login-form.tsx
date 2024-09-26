import { useLoginForm } from "@/features/hooks/use-login"
import { Box, Button, Input, Text, Link as ChakraLink } from "@chakra-ui/react"
import { Form, Link as ReactRouterLink } from "react-router-dom"



export function LoginForm() {
    const { register, onSubmit, handleSubmit, isSubmitting} = useLoginForm()

    return (
        <Box >
            <Text fontSize={`300%`} color={`brand.green`}>Circle</Text>
            <Text fontSize={`200%`}>Login Account Circle</Text>
            <Form onSubmit={handleSubmit(onSubmit)}>
            <Box
                display="flex"
                flexDirection="column"
                gap="10px"
                width="300px"
            >
                <Input {...register("email")} type="email" placeholder="Email" />
                <Input {...register("password")} type="password" placeholder="Password" />

                <Button
                    type="submit"
                    backgroundColor="brand.green"
                    padding="20px"
                    color="white"
                    borderRadius="5px"
                    isLoading={isSubmitting}
                >Login</Button>
                <Text>Don't have an account yet?
                    <ChakraLink as={ReactRouterLink} to={"/register"} color={"brand.green"}>
                        Create an account
                    </ChakraLink>
                </Text>
            </Box>
                </Form>
        </Box >
    )
}