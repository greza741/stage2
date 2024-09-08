import { Box, Button, Card, CardBody, CardFooter, Flex, Heading, Stack, Text } from "@chakra-ui/react";


export function RightBar() {
    return (
        <>
            <Flex backgroundColor={"brand.background"}
                color={"white"}
                minHeight={"100vh"}
                display={"flex"}
                flexDirection={"column"}>
                <Box padding={"20px 20px"}>
                    <Card
                        direction={{ base: 'column', sm: 'row' }}
                        overflow='hidden'
                        variant='outline'
                    >
                        <Stack>
                            <CardBody>
                                <Heading >The perfect latte</Heading>

                                <Text py='2'>
                                    Caffè latte is a coffee beverage of Italian origin made with espresso
                                    and steamed milk.
                                </Text>
                            </CardBody>

                            <CardFooter>
                                <Button variant='solid' colorScheme='blue'>
                                    Buy Latte
                                </Button>
                            </CardFooter>
                        </Stack>
                    </Card>
                </Box>
                <Box padding={"20px 20px"}>
                    <Card
                        direction={{ base: 'column', sm: 'row' }}
                        overflow='hidden'
                        variant='outline'
                    >
                        <Stack>
                            <CardBody>
                                <Heading >The perfect latte</Heading>

                                <Text py='2'>
                                    Caffè latte is a coffee beverage of Italian origin made with espresso
                                    and steamed milk.
                                </Text>
                            </CardBody>

                            <CardFooter>
                                <Button variant='solid' colorScheme='blue'>
                                    Buy Latte
                                </Button>
                            </CardFooter>
                        </Stack>
                    </Card>
                </Box>


            </Flex>
        </>
    )
}