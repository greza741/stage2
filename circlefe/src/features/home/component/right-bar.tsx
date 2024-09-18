import { Avatar, Box, Button, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";


export function RightBar() {
    return (
            <Box 
            py={3} 
            height={"100%"} 
            backgroundColor={"brand.background"}
            display={`flex`} 
            flexDirection={`row`}>
              <Box width={`100%`}>
                    <Box
                    margin={"2px 20px"}
                    bg={('brand.background2')}
                    boxShadow={'2xl'}
                    borderRadius={`20px`}
                    overflow={'hidden'}
                    color={`white`}
                    padding={`2px 20px`}>
                    <Box padding={`10px 0px`}>
                        <Text>My Profile</Text>
                    </Box>
                <Image
                paddingBottom={`10px`}
                  h={'120px'}
                  w={'full'}
                  src={
                    'https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
                  }
                  objectFit="cover"
                  alt="#"
                />
                <Flex justify={'center'} mt={-12} justifyContent={`start`}>
                  <Avatar
                    size={'xl'}
                    src={
                      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
                    }
                    css={{
                      border: '2px solid white',
                    }}
                  />
                </Flex>
                <Box display={`flex`} justifyContent={`end`} mt={`-12`}>
                   <Button
                    border={`1px solid white`}
                    backgroundColor={`brand.background2`}
                    color={'white'}
                    borderRadius={`20px`}
                    _hover={{
                      transform: 'translateY(-4px)',
                      boxShadow: 'lg',
                    }}>
                    Edit Profile
                  </Button>
                  </Box>
                <Box p={`20px 0px`}>
                  <Stack spacing={0} align={'start'} >
                    <Heading fontSize={'2xl'} fontWeight={1000} fontFamily={'body'}>
                      Jarwo Kwat
                    </Heading>
                    <Text fontSize={`small`}>@jarwo123</Text>
                    <Text>Heal the world!</Text>
                  </Stack>
        
                  <Stack direction={'row'} justify={'start'} spacing={2 }>
                    <Stack direction={`row`}>
                      <Text fontWeight={1000}>23k </Text>
                      <Text fontWeight={1}>Followers</Text>
                    </Stack>
                    <Stack direction={`row`}>
                      <Text fontWeight={1000}>23k </Text>
                      <Text fontWeight={1}>Following</Text>
                    </Stack>
                  </Stack>
        
                 
                </Box>
              </Box>
            </Box>
            </Box>
          )
        }