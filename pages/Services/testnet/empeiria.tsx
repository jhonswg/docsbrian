import Head from "next/head";
import {
  Box,
  Heading,
  Text,
  Flex,
  Image,
  Button,
  Link as ChakraLink,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
import { Navbar } from "@/components/navbar";
import { navbarRoutes } from "@/config/navbar-routes";
import { motion } from "framer-motion";
import NextLink from "next/link";

export default function EmpeiriaPage() {
  const MotionBox = motion(Box);
  const border = useColorModeValue("whiteAlpha.300", "whiteAlpha.200");
  const cardBg = useColorModeValue(
    "rgba(255,255,255,0.05)",
    "rgba(255,255,255,0.08)"
  );

  return (
    <>
      {/* 🧠 Title Tab */}
      <Head>
        <title>Empeiria - Service</title>
        <meta
          name="description"
          content="Empeiria Testnet — powered by Cosmos SDK"
        />
      </Head>

      <Navbar routes={navbarRoutes} />

      <Box
        position="relative"
        minH="100vh"
        pt="100px"
        pb="16"
        px={{ base: 6, md: 20 }}
        overflow="hidden"
      >
        {/* Background blur */}
        <Box
          boxSize="72"
          position="absolute"
          top="0"
          left="0"
          bg="purple.500"
          borderRadius="full"
          filter="blur(400px)"
        />
        <Box
          boxSize="72"
          position="absolute"
          bottom="0"
          right="0"
          bg="pink.500"
          borderRadius="full"
          filter="blur(400px)"
        />

        {/* Konten utama */}
        <Box
          position="relative"
          zIndex={1}
          border="1px solid"
          borderColor={border}
          borderRadius="2xl"
          p={{ base: 6, md: 10 }}
          bg="transparent"
        >
          <Flex align="center" mb={10} gap={4}>
            <Image
              src="https://pbs.twimg.com/profile_images/1887069794798632960/IvxbLJcg_400x400.jpg"
              alt="Empeiria"
              boxSize="80px"
              borderRadius="full"
            />
            <Box>
              <Heading
                bgGradient="linear(to-r, pink.400, orange.400)"
                bgClip="text"
                fontSize="4xl"
              >
                Empeiria Testnet
              </Heading>
              <Text fontSize="sm" opacity={0.7}>
                Powered by Cosmos SDK — Managed by your validator infrastructure
              </Text>
            </Box>
          </Flex>

          <Text fontSize="md" mb={10} maxW="3xl">
            Empeiria is an innovative blockchain network designed to deliver
            next-generation scalability and interoperability. The testnet
            enables developers and validators to experiment with the network’s
            latest upgrades and validator incentives before mainnet deployment.
          </Text>

          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} mb={10}>
            <MotionBox
              border="1px solid"
              borderColor={border}
              borderRadius="xl"
              p={6}
              bg={cardBg}
              whileHover={{ scale: 1.02 }}
              transition="0.2s ease"
            >
              <Heading fontSize="md" mb={2}>
                Network Name
              </Heading>
              <Text fontSize="sm">Empeiria Testnet</Text>
            </MotionBox>

            <MotionBox
              border="1px solid"
              borderColor={border}
              borderRadius="xl"
              p={6}
              bg={cardBg}
              whileHover={{ scale: 1.02 }}
              transition="0.2s ease"
            >
              <Heading fontSize="md" mb={2}>
                Chain ID
              </Heading>
              <Text fontSize="sm">empeiria-testnet-1</Text>
            </MotionBox>

            <MotionBox
              border="1px solid"
              borderColor={border}
              borderRadius="xl"
              p={6}
              bg={cardBg}
              whileHover={{ scale: 1.02 }}
              transition="0.2s ease"
            >
              <Heading fontSize="md" mb={2}>
                Denom
              </Heading>
              <Text fontSize="sm">uemp</Text>
            </MotionBox>
          </SimpleGrid>

          <Flex gap={4} flexWrap="wrap">
            <Button
              as={ChakraLink}
              href="https://explorer.empeiria.io"
              isExternal
              colorScheme="pink"
              variant="solid"
            >
              Explorer
            </Button>
            <Button
              as={ChakraLink}
              href="https://github.com/empeiria-network"
              isExternal
              colorScheme="gray"
              variant="outline"
            >
              GitHub
            </Button>

            <NextLink href="/services" passHref>
              <Button as="a" colorScheme="orange" variant="ghost">
                ← Back to Network
              </Button>
            </NextLink>
          </Flex>
        </Box>
      </Box>
    </>
  );
}
