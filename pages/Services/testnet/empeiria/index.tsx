import Head from "next/head";
import {
  Box,
  Flex,
  VStack,
  HStack,
  Heading,
  Text,
  Button,
  Link as ChakraLink,
  IconButton,
  Code,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { Navbar } from "@/components/navbar";
import { navbarRoutes } from "@/config/navbar-routes";
import { EmpeiriaSidebar } from "@/components/sidebar/empeiria/empeiria-sidebar";
import { FiCopy } from "react-icons/fi";
import NextLink from "next/link";

export default function EmpeiriaPage() {
  const border = useColorModeValue("whiteAlpha.300", "whiteAlpha.200");
  const sidebarBg = useColorModeValue("white", "gray.800");
  const cardBg = useColorModeValue("whiteAlpha.50", "whiteAlpha.100");
  const toast = useToast();

  const copy = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({ title: "Copied", status: "success", duration: 1500, isClosable: true });
  };

  return (
    <>
      <Head>
        <title>Empeiria - Testnet Info</title>
      </Head>
      <Navbar routes={navbarRoutes} />

      <Box position="relative" minH="100vh" pt="100px" pb="16">
        {/* Gradient Background */}
        <Box position="absolute" top="0" left="0" boxSize="72" bg="purple.500" filter="blur(400px)" borderRadius="full" />
        <Box position="absolute" bottom="0" right="0" boxSize="72" bg="pink.500" filter="blur(400px)" borderRadius="full" />

        <Flex position="relative" zIndex={1} gap={6} px={{ base: 4, md: 8 }} maxW="1600px" mx="auto" align="start">
          <Box display={{ base: "none", lg: "block" }} w="320px" flexShrink={0}>
            <EmpeiriaSidebar />
          </Box>

          {/* Main Content */}
          <Box flex="1" minW="0" bg={sidebarBg} borderRadius="2xl" p={{ base: 6, md: 8 }} border="1px solid" borderColor={border}>
            <Flex
              bg={cardBg}
              border="1px solid"
              borderColor={border}
              borderRadius="lg"
              p={4}
              mb={8}
              gap={6}
              flexWrap="wrap"
              align="center"
              justify="space-between"
            >
              <HStack spacing={2}>
                <Text fontSize="sm" opacity={0.7}>
                  Chain ID:
                </Text>
                <Text fontSize="sm" fontWeight="medium">
                  empe-testnet-2
                </Text>
              </HStack>
              <HStack spacing={2}>
                <Text fontSize="sm" opacity={0.7}>
                  Block Height:
                </Text>
                <Text fontSize="sm" fontWeight="medium">
                  7,306,716
                </Text>
              </HStack>
              <HStack spacing={2}>
                <Text fontSize="sm" opacity={0.7}>
                  RPC Status:
                </Text>
                <Box w={2} h={2} bg="green.400" borderRadius="full" />
              </HStack>
              <Button
                as={ChakraLink}
                href="https://explorer.empeiria.io"
                isExternal
                size="sm"
                colorScheme="pink"
                variant="outline"
              >
                Explorer
              </Button>
            </Flex>

            <VStack align="stretch" spacing={8}>
              {[
                {
                  title: "RPC, API, gRPC",
                  items: [
                    { label: "RPC", value: "https://empeiria-testnet-rpc.itrocket.net" },
                    { label: "API", value: "https://empeiria-testnet-api.itrocket.net" },
                    { label: "gRPC", value: "empeiria-testnet-grpc.itrocket.net:443" },
                  ],
                },
                {
                  title: "Peers & Seeds",
                  items: [
                    { label: "Peers", value: "03aa072f917ed1b79a14ea2cc660bc3bac787e82@empeiria-testnet-peer.itrocket.net:28656" },
                    { label: "Seeds", value: "20ca5fc4882e6f975add2d106da8afc4a5a6c6d@empeiria-testnet-seed.itrocket.net:28656" },
                  ],
                },
              ].map((section) => (
                <Box key={section.title}>
                  <Heading fontSize="2xl" mb={4}>
                    {section.title}
                  </Heading>
                  <VStack align="stretch" spacing={3}>
                    {section.items.map((item) => (
                      <Box key={item.label}>
                        <Text fontSize="sm" mb={2}>
                          {item.label}:
                        </Text>
                        <Flex
                          bg={cardBg}
                          border="1px solid"
                          borderColor={border}
                          borderRadius="md"
                          p={3}
                          align="center"
                          justify="space-between"
                           overflowX="auto"
                    whiteSpace="pre"
                        >
                          <Code fontSize="sm" bg="transparent"  overflowX="auto"
                    whiteSpace="pre">
                            {item.value}
                          </Code>
                          <IconButton
                            aria-label={`Copy ${item.label}`}
                            icon={<FiCopy />}
                            size="sm"
                            variant="ghost"
                            onClick={() => copy(item.value)}
                          />
                        </Flex>
                      </Box>
                    ))}
                  </VStack>
                </Box>
              ))}
            </VStack>

            <NextLink href="/services" passHref>
              <Button mt={8} variant="ghost" colorScheme="orange" size="sm">
                ← Back to Network
              </Button>
            </NextLink>
          </Box>
        </Flex>
      </Box>
    </>
  );
}
