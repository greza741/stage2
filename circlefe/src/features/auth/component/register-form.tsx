import { Box, Button, Link as ChakraLink, Input, Spinner, Text } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, Link as ReactRouterLink } from "react-router-dom";
import { RegisterFormInputs, registerSchema } from "../schemas/register";



export function RegisterForm() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<RegisterFormInputs>({
        resolver: zodResolver(registerSchema)
    })

    const test = new Promise((resolve) => {
        setTimeout(() => {
            resolve("OK");
        }, 1000);
    });

    async function onSubmit(data: RegisterFormInputs) {
        const response = await test;
        console.log(response);
        console.log(data);
    }


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
                    <Input {...register("fullname")} name="fullname" type="text" placeholder="FullName" />
                    {errors.fullname && (
                        <p style={{ color: "red", margin: 0 }}> {errors.fullname.message}</p>
                    )}
                    <Input {...register("email")} name="email" type="email" placeholder="Email" />
                    {errors.email && (
                        <p style={{ color: "red", margin: 0 }}> {errors.email.message}</p>
                    )}
                    <Input {...register("password")} name="password" type="password" placeholder="Password" />
                    {errors.password && (
                        <p style={{ color: "red", margin: 0 }}> {errors.password.message}</p>
                    )}
                    <Button
                        type="submit"
                        backgroundColor="brand.green"
                        padding="20px"
                        color="white"
                        borderRadius="5px"
                        isDisabled={isSubmitting}
                    >
                        {isSubmitting ? <Spinner color="black" /> : "Create"}</Button>
                    <Text>Already Have a Account ?
                        <ChakraLink as={ReactRouterLink} to={"/login"} color={"brand.green"}>
                            Login
                        </ChakraLink>
                    </Text>
                </Box>
            </Form>
        </Box >
    )
}