import Head from "next/head";
import {
  Box,
  VStack,
  Heading,
  Text,
  Flex,
  Code,
  IconButton,
  useToast,
  useColorModeValue,
  Button,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { FiCopy } from "react-icons/fi";
import EmpeiriaLayout from "@/components/sidebar/empeiria/empeiria-layout";

export default function EmpeiriaPage() {
  const border = useColorModeValue("whiteAlpha.300", "whiteAlpha.200");
  const cardBg = useColorModeValue("whiteAlpha.50", "whiteAlpha.100");
  const toast = useToast();

  const copy = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({ title: "Copied", status: "success", duration: 1500, isClosable: true });
  };

  return (
    <>
      <Head>
        <title>Empeiria Testnet</title>
      </Head>

      <EmpeiriaLayout>
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
                      <Code fontSize="sm" bg="transparent">
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

        <Button mt={8} as={ChakraLink} href="/services" variant="ghost" colorScheme="orange" size="sm">
          ← Back to Network
        </Button>
      </EmpeiriaLayout>
    </>
  );
}
