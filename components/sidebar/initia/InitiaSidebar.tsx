import {
    Box,
    Button,
    Text,
    Flex,
    Heading,
    Image,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Divider,
    VStack,
    useColorModeValue,
  } from "@chakra-ui/react";
  import { useRouter } from "next/router";
  import Link from "next/link";
  
  export const InitiaSidebar = () => {
    const router = useRouter();
    const border = useColorModeValue("whiteAlpha.300", "whiteAlpha.200");
    const sidebarBg = useColorModeValue("white", "gray.800");
    const cardBg = useColorModeValue(
      "rgba(255,255,255,0.05)",
      "rgba(255,255,255,0.08)"
    );
  
    const isActive = (path: string) => router.pathname === path;
  
    const scrollToSection = (sectionId: string) => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };
  
    return (
      <Box display={{ base: "none", lg: "block" }} w="320px" flexShrink={0}>
        <Box
          bg={sidebarBg}
          borderRadius="2xl"
          p={6}
          border="1px solid"
          borderColor={border}
          position="sticky"
          top="100px"
        >
          {/* Logo & Title */}
          <Flex align="center" mb={6} gap={3}>
            <Image
              src="https://pbs.twimg.com/profile_images/1919389207367491584/GFxs1SP5_400x400.png"
              alt="Initia"
              boxSize="50px"
              borderRadius="full"
            />
            <Box>
              <Heading fontSize="xl">Initia</Heading>
              <Text fontSize="sm" color="green.400">
                mainnet
              </Text>
            </Box>
          </Flex>
  
          {/* Accordion Menu */}
          <Accordion allowMultiple defaultIndex={[]}>
            {/* Introduction */}
            <AccordionItem border="none" mb={2}>
              <Box as={Link} href="/services/mainnet/initia/" textDecoration="none">
                <AccordionButton
                  borderRadius="lg"
                  _hover={{ bg: cardBg }}
                  px={3}
                  py={3}
                  bg={
                    isActive("/services/mainnet/initia/")
                      ? cardBg
                      : "transparent"
                  }
                >
                  <Flex align="center" flex="1" textAlign="left" gap={3}>
                    <Text fontSize="xl">🏠</Text>
                    <Text fontSize="sm" fontWeight="medium">
                      Introduction
                    </Text>
                  </Flex>
                </AccordionButton>
              </Box>
            </AccordionItem>
  
            {/* Public Endpoint with Submenu */}
            <AccordionItem border="none" mb={2}>
              <AccordionButton
                borderRadius="lg"
                _hover={{ bg: cardBg }}
                px={3}
                py={3}
                bg={
                  isActive("/services/mainnet/initia/public-endpoint")
                    ? cardBg
                    : "transparent"
                }
              >
                <Flex align="center" flex="1" textAlign="left" gap={3}>
                  <Text fontSize="xl">⚙️</Text>
                  <Text fontSize="sm" fontWeight="medium">
                    Public Endpoint
                  </Text>
                </Flex>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={2} pt={2} px={0}>
                <VStack align="stretch" spacing={1} pl={4}>
                  <Box
                    as={Link}
                    href="/services/mainnet/initia/public-endpoint#rpc-api-grpc"
                    textDecoration="none"
                    onClick={(e) => {
                      if (isActive("/services/mainnet/initia/public-endpoint")) {
                        e.preventDefault();
                        scrollToSection("rpc-api-grpc");
                      }
                    }}
                  >
                    <Box
                      px={3}
                      py={2}
                      borderRadius="md"
                      _hover={{ bg: cardBg }}
                      cursor="pointer"
                    >
                      <Text fontSize="xs" fontWeight="medium" color="gray.600">
                        📡 RPC, API & gRPC
                      </Text>
                    </Box>
                  </Box>
                  <Box
                    as={Link}
                    href="/services/mainnet/initia/public-endpoint#peers-seeds"
                    textDecoration="none"
                    onClick={(e) => {
                      if (isActive("/services/mainnet/initia/public-endpoint")) {
                        e.preventDefault();
                        scrollToSection("peers-seeds");
                      }
                    }}
                  >
                    <Box
                      px={3}
                      py={2}
                      borderRadius="md"
                      _hover={{ bg: cardBg }}
                      cursor="pointer"
                    >
                      <Text fontSize="xs" fontWeight="medium" color="gray.600">
                        🌐 Peers & Seeds
                      </Text>
                    </Box>
                  </Box>
                </VStack>
              </AccordionPanel>
            </AccordionItem>
  
            {/* Installation with Submenu */}
            <AccordionItem border="none" mb={2}>
              <AccordionButton
                borderRadius="lg"
                _hover={{ bg: cardBg }}
                px={3}
                py={3}
              >
                <Flex align="center" flex="1" textAlign="left" gap={3}>
                  <Text fontSize="xl">📌</Text>
                  <Text fontSize="sm" fontWeight="medium">
                    Installation
                  </Text>
                </Flex>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={2} pt={2} px={0}>
                <VStack align="stretch" spacing={1} pl={4}>
                  <Box as={Link} href="/services/mainnet/initia/installation" textDecoration="none">
                    <Box
                      px={3}
                      py={2}
                      borderRadius="md"
                      _hover={{ bg: cardBg }}
                      cursor="pointer"
                      bg={
                        isActive("/services/mainnet/initia/installation")
                          ? cardBg
                          : "transparent"
                      }
                    >
                      <Text fontSize="xs" fontWeight="medium" color="gray.600">
                        🔧 Install Node
                      </Text>
                    </Box>
                  </Box>
                  <Box as={Link} href="/services/mainnet/initia/token-management" textDecoration="none">
                    <Box
                      px={3}
                      py={2}
                      borderRadius="md"
                      _hover={{ bg: cardBg }}
                      cursor="pointer"
                      bg={
                        isActive("/services/mainnet/initia/token-management")
                          ? cardBg
                          : "transparent"
                      }
                    >
                      <Text fontSize="xs" fontWeight="medium" color="gray.600">
                        💰 Token Management
                      </Text>
                    </Box>
                  </Box>
                  <Box as={Link} href="/services/mainnet/initia/validator-management" textDecoration="none">
                    <Box
                      px={3}
                      py={2}
                      borderRadius="md"
                      _hover={{ bg: cardBg }}
                      cursor="pointer"
                      bg={
                        isActive("/services/mainnet/initia/validator-management")
                          ? cardBg
                          : "transparent"
                      }
                    >
                      <Text fontSize="xs" fontWeight="medium" color="gray.600">
                        👨‍💼 Validator Management
                      </Text>
                    </Box>
                  </Box>
                </VStack>
              </AccordionPanel>
            </AccordionItem>
  
            {/* Upgrade */}
            <AccordionItem border="none" mb={2}>
              <Box as={Link} href="/services/mainnet/initia/upgrade" textDecoration="none">
                <AccordionButton
                  borderRadius="lg"
                  _hover={{ bg: cardBg }}
                  px={3}
                  py={3}
                  bg={
                    isActive("/services/mainnet/initia/upgrade")
                      ? cardBg
                      : "transparent"
                  }
                >
                  <Flex align="center" flex="1" textAlign="left" gap={3}>
                    <Text fontSize="xl">🔄</Text>
                    <Text fontSize="sm" fontWeight="medium">
                      Upgrade
                    </Text>
                  </Flex>
                </AccordionButton>
              </Box>
            </AccordionItem>
  
            {/* Cheat Sheet */}
            <AccordionItem border="none" mb={2}>
              <Box as={Link} href="/services/mainnet/initia/cheat-sheet" textDecoration="none">
                <AccordionButton
                  borderRadius="lg"
                  _hover={{ bg: cardBg }}
                  px={3}
                  py={3}
                  bg={
                    isActive("/services/mainnet/initia/cheat-sheet")
                      ? cardBg
                      : "transparent"
                  }
                >
                  <Flex align="center" flex="1" textAlign="left" gap={3}>
                    <Text fontSize="xl">📝</Text>
                    <Text fontSize="sm" fontWeight="medium">
                      Cheat Sheet
                    </Text>
                  </Flex>
                </AccordionButton>
              </Box>
            </AccordionItem>
          </Accordion>
  
          <Divider my={4} />
  
          <VStack align="stretch" spacing={2}>
            <Button
              variant="ghost"
              justifyContent="flex-start"
              leftIcon={<Text fontSize="xl">🌐</Text>}
              fontSize="sm"
              fontWeight="medium"
            >
              Decentralization Analytics
            </Button>
            <Button
              variant="ghost"
              justifyContent="flex-start"
              leftIcon={<Text fontSize="xl">🙏</Text>}
              fontSize="sm"
              fontWeight="medium"
            >
              Consensus
            </Button>
            <Button
              variant="ghost"
              justifyContent="flex-start"
              leftIcon={<Text fontSize="xl">🛰️</Text>}
              fontSize="sm"
              fontWeight="medium"
            >
              Public RPC Scanner
            </Button>
            <Button
              variant="ghost"
              justifyContent="flex-start"
              leftIcon={<Text fontSize="xl">🤖</Text>}
              fontSize="sm"
              fontWeight="medium"
            >
              Proposal Bot
            </Button>
          </VStack>
        </Box>
      </Box>
    );
  };