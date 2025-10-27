import Head from "next/head";
import Link from "next/link";
import {
  Box,
  VStack,
  Heading,
  Text,
  Button,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";
import SymphonyLayout from "@/components/sidebar/symphony/SymphonyLayout";

export default function SymphonyPage() {
  const cardBg = useColorModeValue("whiteAlpha.50", "whiteAlpha.100");
  const border = useColorModeValue("whiteAlpha.300", "whiteAlpha.200");

  return (
    <>
      <Head>
        <title>Symphony - Introduction</title>
      </Head>

      <SymphonyLayout>
        <VStack align="stretch" spacing={8}>
          <Box>
            {/* Logo Empeiria - Centered */}
            <Box display="flex" justifyContent="center" mb={8}>
              <Image
                src="https://pbs.twimg.com/profile_images/1896255605909725184/rC9pD5EQ_400x400.jpg"
                alt="Symphony Logo"
                maxW="200px"
                h="auto"
                objectFit="contain"
                borderRadius="full"
              />
            </Box>

            <Heading fontSize="3xl" mb={6}>
              Introduction
            </Heading>

            <VStack align="stretch" spacing={6}>
              <Box>
                <Heading fontSize="2xl" mb={3}>
                  Overview
                </Heading>
                <Text fontSize="md" lineHeight="tall" color="gray.300">
                  Symphony is a chain built on Cosmos that provides a
                  crypto-native solution for real-world assets not reliant on
                  traditional banking infrastructure. It can peg to any asset,
                  allowing global access to trade across mediums such as
                  real-estate and gold, as well as easily accessed
                  infrastructure to build market systems such as ForEx.
                </Text>
              </Box>
              <Heading fontSize="2xl" mt={4} mb={-3}>
                Hardware Requirements
              </Heading>

              <VStack align="stretch" spacing={3}>
                <Box>
                  <Text>
                    <Text as="span" fontWeight="bold" color="orange.400">
                      Number of CPUs:
                    </Text>{" "}
                    <Text as="span" color="gray.300">
                      4
                    </Text>
                  </Text>
                </Box>
                <Box>
                  <Text>
                    <Text as="span" fontWeight="bold" color="orange.400">
                      RAM:
                    </Text>{" "}
                    <Text as="span" color="gray.300">
                      8 GB
                    </Text>
                  </Text>
                </Box>
                <Box>
                  <Text>
                    <Text as="span" fontWeight="bold" color="orange.400">
                      SSD:
                    </Text>{" "}
                    <Text as="span" color="gray.300">
                      100GB of storage (SSD or NVME)
                    </Text>
                  </Text>
                </Box>
              </VStack>
            </VStack>
          </Box>
        </VStack>

        <Box as={Link} href="/services" textDecoration="none">
          <Button mt={8} variant="ghost" colorScheme="orange" size="sm">
            ← Back to Network
          </Button>
        </Box>
      </SymphonyLayout>
    </>
  );
}
