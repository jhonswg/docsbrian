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
import InitiaLayout from "@/components/sidebar/initia/InitiaLayout";

export default function InitiaPage() {
  const cardBg = useColorModeValue("whiteAlpha.50", "whiteAlpha.100");
  const border = useColorModeValue("whiteAlpha.300", "whiteAlpha.200");

  return (
    <>
      <Head>
        <title>Initia - Introduction</title>
      </Head>

      <InitiaLayout>
        <VStack align="stretch" spacing={8}>
          <Box>
            {/* Logo  banner */}
            <Box display="flex" justifyContent="center" mb={8}>
              <Image
                src="https://pbs.twimg.com/profile_banners/1604741451404873729/1758260396/1500x500"
                alt="Initia Banner"
                h="auto"
                objectFit="contain"
                borderRadius="20px"
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
                  Operating an Initia node demands significant server resources
                  and is primarily necessary for specific tasks, such as
                  developing dApps or functioning as validators.
                </Text>
              </Box>
              <Heading fontSize="2xl" mt={4} mb={-3}>
                Hardware Requirements
              </Heading>
              <Text fontSize="md" color="gray.400">
                We recommend running public testnet nodes on machines with the
                following characteristics:
              </Text>

              <VStack align="stretch" spacing={3}>
                <Box>
                  <Text>
                    <Text as="span" fontWeight="bold" color="orange.400">
                      Operating System:
                    </Text>{" "}
                    <Text as="span" color="gray.300">
                      Ubuntu 18.04 or later LTS
                    </Text>
                  </Text>
                </Box>
                <Box>
                  <Text>
                    <Text as="span" fontWeight="bold" color="orange.400">
                      Number of CPUs:
                    </Text>{" "}
                    <Text as="span" color="gray.300">
                      16
                    </Text>
                  </Text>
                </Box>
                <Box>
                  <Text>
                    <Text as="span" fontWeight="bold" color="orange.400">
                      RAM:
                    </Text>{" "}
                    <Text as="span" color="gray.300">
                      32 GB
                    </Text>
                  </Text>
                </Box>
                <Box>
                  <Text>
                    <Text as="span" fontWeight="bold" color="orange.400">
                      SSD:
                    </Text>{" "}
                    <Text as="span" color="gray.300">
                      2 TB 
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
      </InitiaLayout>
    </>
  );
}
