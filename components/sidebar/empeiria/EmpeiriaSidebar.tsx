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

export const EmpeiriaSidebar = () => {
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
            src="https://pbs.twimg.com/profile_images/1887069794798632960/IvxbLJcg_400x400.jpg"
            alt="Empeiria"
            boxSize="50px"
            borderRadius="full"
          />
          <Box>
            <Heading fontSize="xl">Empeiria</Heading>
            <Text fontSize="sm" color="green.400">
              testnet
            </Text>
          </Box>
        </Flex>

        {/* Accordion Menu */}
        <Accordion allowMultiple defaultIndex={[1]}>
          <AccordionItem border="none" mb={2}>
            <AccordionButton
              borderRadius="lg"
              _hover={{ bg: cardBg }}
              px={3}
              py={3}
              bg={
                isActive("/services/testnet/empeiria/")
                  ? cardBg
                  : "transparent"
              }
              onClick={() =>
                router.push("/services/testnet/empeiria/")
              }
            >
              <Flex align="center" flex="1" textAlign="left" gap={3}>
                <Text fontSize="xl">🏠</Text>
                <Text fontSize="sm" fontWeight="medium">
                  Introduction
                </Text>
              </Flex>
              <AccordionIcon />
            </AccordionButton>
          </AccordionItem>

          <AccordionItem border="none" mb={2}>
            <AccordionButton
              borderRadius="lg"
              _hover={{ bg: cardBg }}
              px={3}
              py={3}
              bg={
                isActive("/services/testnet/empeiria/public-endpoint")
                  ? cardBg
                  : "transparent"
              }
              onClick={() =>
                router.push("/services/testnet/empeiria/public-endpoint")
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
          </AccordionItem>

          <AccordionItem border="none" mb={2}>
            <AccordionButton
              borderRadius="lg"
              _hover={{ bg: cardBg }}
              px={3}
              py={3}
              bg={
                isActive("/services/testnet/empeiria/installation")
                  ? cardBg
                  : "transparent"
              }
              onClick={() =>
                router.push("/services/testnet/empeiria/installation")
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
          </AccordionItem>

          <AccordionItem border="none" mb={2}>
            <AccordionButton
              borderRadius="lg"
              _hover={{ bg: cardBg }}
              px={3}
              py={3}
              bg={
                isActive("/services/testnet/empeiria/upgrade")
                  ? cardBg
                  : "transparent"
              }
              onClick={() => router.push("/services/testnet/empeiria/upgrade")}
            >
              <Flex align="center" flex="1" textAlign="left" gap={3}>
                <Text fontSize="xl">🔄</Text>
                <Text fontSize="sm" fontWeight="medium">
                  Upgrade
                </Text>
              </Flex>
              <AccordionIcon />
            </AccordionButton>
          </AccordionItem>

          <AccordionItem border="none" mb={2}>
            <AccordionButton
              borderRadius="lg"
              _hover={{ bg: cardBg }}
              px={3}
              py={3}
              bg={
                isActive("/services/testnet/empeiria/cheat-sheet")
                  ? cardBg
                  : "transparent"
              }
              onClick={() =>
                router.push("/services/testnet/empeiria/cheat-sheet")
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
