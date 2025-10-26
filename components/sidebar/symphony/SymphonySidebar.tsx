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
  AccordionIcon,
  Divider,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import Link from "next/link";

export const HarmonySidebar = () => {
  const router = useRouter();
  const border = useColorModeValue("whiteAlpha.300", "whiteAlpha.200");
  const sidebarBg = useColorModeValue("white", "gray.800");
  const cardBg = useColorModeValue(
    "rgba(255,255,255,0.05)",
    "rgba(255,255,255,0.08)"
  );

  const isActive = (path: string) => router.pathname === path;

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
            src="https://pbs.twimg.com/profile_images/1896255605909725184/rC9pD5EQ_400x400.jpg"
            alt="Symphony"
            boxSize="50px"
            borderRadius="full"
          />
          <Box>
            <Heading fontSize="xl">Symphony</Heading>
            <Text fontSize="sm" color="green.400">
              testnet
            </Text>
          </Box>
        </Flex>

        {/* Accordion Menu */}
        <Accordion allowMultiple defaultIndex={[1]}>
          <AccordionItem border="none" mb={2}>
            <Box as={Link} href="/services/testnet/symphony" textDecoration="none">
              <AccordionButton
                borderRadius="lg"
                _hover={{ bg: cardBg }}
                px={3}
                py={3}
                bg={
                  isActive("/services/testnet/symphony")
                    ? cardBg
                    : "transparent"
                }
              >
                <Flex align="center" flex="1" textAlign="left" gap={3}>
                  <Text fontSize="xl">⚙️</Text>
                  <Text fontSize="sm" fontWeight="medium">
                    API & Sync
                  </Text>
                </Flex>
                <AccordionIcon />
              </AccordionButton>
            </Box>
          </AccordionItem>

          <AccordionItem border="none" mb={2}>
            <Box as={Link} href="/services/testnet/symphony/installation" textDecoration="none">
              <AccordionButton
                borderRadius="lg"
                _hover={{ bg: cardBg }}
                px={3}
                py={3}
                bg={
                  isActive("/services/testnet/symphony/installation")
                    ? cardBg
                    : "transparent"
                }
              >
                <Flex align="center" flex="1" textAlign="left" gap={3}>
                  <Text fontSize="xl">📌</Text>
                  <Text fontSize="sm" fontWeight="medium">
                    Installation
                  </Text>
                </Flex>
                <AccordionIcon />
              </AccordionButton>
            </Box>
          </AccordionItem>

          <AccordionItem border="none" mb={2}>
            <Box as={Link} href="/services/testnet/symphony/upgrade" textDecoration="none">
              <AccordionButton
                borderRadius="lg"
                _hover={{ bg: cardBg }}
                px={3}
                py={3}
                bg={
                  isActive("/services/testnet/symphony/upgrade")
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
                <AccordionIcon />
              </AccordionButton>
            </Box>
          </AccordionItem>

          <AccordionItem border="none" mb={2}>
            <Box as={Link} href="/services/testnet/symphony/cheat-sheet" textDecoration="none">
              <AccordionButton
                borderRadius="lg"
                _hover={{ bg: cardBg }}
                px={3}
                py={3}
                bg={
                  isActive("/services/testnet/symphony/cheat-sheet")
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
                <AccordionIcon />
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