import {
  Box,
  Button,
  Flex,
  Image,
  Stack,
  Text
} from "@chakra-ui/react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export function RightBarProfile() {
  return (
    <Box
      py={2}
      height={"100%"}
      backgroundColor={"brand.background"}
      display={`flex`}
      flexDirection={`column`}
    >
      <Box width={`100%`} height={`10%`}>
        
        <Box
          margin={"10px 20px"}
          bg={"brand.background2"}
          boxShadow={"2xl"}
          borderRadius={`20px`}
          overflow={"hidden"}
          color={`white`}
          padding={`2px 20px`}
        >
          <Box>
            <Text>Sugested for you </Text>
          </Box>
          {/* baris nama suggestion */}
          <Box
            paddingTop={`10px`}
            display={`flex`}
            alignItems="center" // Menjaga elemen sejajar secara vertikal
            justifyContent="space-between" // Menyebar elemen agar di ujung kanan dan kiri
          >
            <Flex alignItems={`center`}>
              <Box
                borderRadius="full"
                overflow="hidden"
                width="40px" // sesuaikan dengan ukuran yang diinginkan
                height="40px" // sesuaikan dengan ukuran yang diinginkan
              >
                <Image
                  src="https://imgs.search.brave.com/5E75yP4O3InyRwdd-PQ-JvIfXKcFhKMDFtulaDdB5Q8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/bW9zLmNtcy5mdXR1/cmVjZG4ubmV0L3do/TEdEV3RzWFB4RXJ2/Tm53NnFVNDYtMzIw/LTgwLmpwZw" // ganti dengan URL foto profilmu
                  alt="Profile Picture"
                  objectFit="cover"
                  width="100%"
                  height="100%"
                />
              </Box>
              <Stack spacing={0} paddingLeft={`10px`}>
                <Text fontWeight={`700`}>Nick Johnston</Text>
                <Text fontWeight={`1`}>@nicktarkam</Text>
              </Stack>
            </Flex>
            <Box>
              <Button
                borderRadius={`20px`}
                bg={`brand.background2`}
                border={`1px solid gray`}
                color={`gray`}
              >
                Following
              </Button>
            </Box>
          </Box>
          {/* baris nama suggestion */}
          <Box
            paddingTop={`10px`}
            display={`flex`}
            alignItems="center" // Menjaga elemen sejajar secara vertikal
            justifyContent="space-between" // Menyebar elemen agar di ujung kanan dan kiri
          >
            <Flex alignItems={`center`}>
              <Box
                borderRadius="full"
                overflow="hidden"
                width="40px" // sesuaikan dengan ukuran yang diinginkan
                height="40px" // sesuaikan dengan ukuran yang diinginkan
              >
                <Image
                  src="https://imgs.search.brave.com/hC9jebLSLj3Ud_RlQpCbpubf8wAq5CaTMTCK-m3gzZ8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c3Bpcml0LW9mLW1l/dGFsLmNvbS9sZXMl/MjBnb3VwZXMvQS9B/bmR5JTIwSmFtZXMv/QW5keSUyMEphbWVz/L0FuZHklMjBKYW1l/cy5qcGc" // ganti dengan URL foto profilmu
                  alt="Profile Picture"
                  objectFit="cover"
                  width="100%"
                  height="100%"
                />
              </Box>
              <Stack spacing={0} paddingLeft={`10px`}>
                <Text fontWeight={`700`}>Andy James</Text>
                <Text fontWeight={`1`}>@andybengkel</Text>
              </Stack>
            </Flex>
            <Box>
              <Button
                borderRadius={`20px`}
                bg={`brand.background2`}
                border={`1px solid white`}
                color={`white`}
              >
                Follow
              </Button>
            </Box>
          </Box>
          {/* baris nama suggestion */}
          <Box
            paddingTop={`10px`}
            display={`flex`}
            alignItems="center" // Menjaga elemen sejajar secara vertikal
            justifyContent="space-between" // Menyebar elemen agar di ujung kanan dan kiri
          >
            <Flex alignItems={`center`}>
              <Box
                alignItems={`center`}
                borderRadius="full"
                overflow="hidden"
                width="40px" // sesuaikan dengan ukuran yang diinginkan
                height="40px" // sesuaikan dengan ukuran yang diinginkan
              >
                <Image
                  src="https://imgs.search.brave.com/FrZWonF233NO91y3TAe8i1lVt43QUxKWoYW0Gajwzac/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2E5LzQ4/LzczL2E5NDg3MzU4/NGZhN2EzMmY4MDkw/MTMyMjYwM2Q1NDc5/LmpwZw" // ganti dengan URL foto profilmu
                  alt="Profile Picture"
                  objectFit="cover"
                  width="100%"
                  height="100%"
                />
              </Box>
              <Stack spacing={0} paddingLeft={`10px`}>
                <Text fontWeight={`700`}>Tim Henson</Text>
                <Text fontWeight={`1`}>@timpeyek</Text>
              </Stack>
            </Flex>
            <Box>
              <Button
                borderRadius={`20px`}
                bg={`brand.background2`}
                border={`1px solid white`}
                color={`white`}
              >
                Follow
              </Button>
            </Box>
          </Box>
        </Box>
        <Box
          margin={"2px 20px"}
          bg={"brand.background2"}
          boxShadow={"2xl"}
          borderRadius={`20px`}
          overflow={"hidden"}
          color={`white`}
          padding={`2px 20px`}
        >
          <Box display={`flex`} flexDirection={`row`} alignItems={`center`}>
            Developed by Suffering •
            <Box display={`flex`} flexDirection={`row`}>
              <Box paddingLeft={`5px`}>
                <FaGithub />
              </Box>
              <Box paddingLeft={`5px`}>
                <FaLinkedin />
              </Box>
              <Box paddingLeft={`5px`}>
                <FaFacebook />
              </Box>
              <Box paddingLeft={`5px`}>
                <FaInstagram />
              </Box>
            </Box>
          </Box>
          <Text fontSize={`10px`} fontWeight={`100`}>
            Powered by Dumways Indonesia • #1 Coding Bootcamp
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
