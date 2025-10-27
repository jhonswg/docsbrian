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
import EmpeiriaLayout from "@/components/sidebar/empeiria/EmpeiriaLayout";

export default function EmpeiriaPage() {
  const cardBg = useColorModeValue("whiteAlpha.50", "whiteAlpha.100");
  const border = useColorModeValue("whiteAlpha.300", "whiteAlpha.200");

  return (
    <>
      <Head>
        <title>Empeiria - Introduction</title>
      </Head>

      <EmpeiriaLayout>
        <VStack align="stretch" spacing={8}>
          <Box>
            {/* Logo Empeiria - Centered */}
            <Box display="flex" justifyContent="center" mb={8}>
              <Image
                src="https://pbs.twimg.com/profile_images/1887069794798632960/IvxbLJcg_400x400.jpg"
                alt="Empeiria Logo"
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
                  Empeiria is the first End-to-End Verifiable Data
                  Infrastructure (EVDI). It enables seamless web3 adoption
                  through one-click deployment, empowering organizations with
                  the data of the future.
                </Text>
              </Box>
              <Heading fontSize="2xl" mt={4} mb={-3}>
                Hardware Requirements
              </Heading>
              <Text fontSize="md" color="gray.400">
                Below, you will find the recommended hardware configurations
                that can be used to create a new Empe Testnet validator machine.
                Please note that the higher the effort you put into creating a
                stable and robust machine and lower the chances of getting
                slashed due to downtime.
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
                      6
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
                      240 GB
                    </Text>
                  </Text>
                </Box>
              </VStack>
            </VStack>
          </Box>
        </VStack>

        <Box as={Link} href="/services" textDecoration="none">
          <Button 
            mt={8}
            variant="ghost" 
            colorScheme="orange" 
            size="sm"
          >
            ← Back to Network
          </Button>
        </Box>
      </EmpeiriaLayout>
    </>
  );
}