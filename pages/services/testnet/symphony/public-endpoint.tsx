import Head from "next/head";
import Link from "next/link";
import {
  Box,
  VStack,
  Heading,
  Text,
  Button,
  useColorModeValue,
  Divider,
} from "@chakra-ui/react";
import SymphonyLayout from "@/components/sidebar/symphony/SymphonyLayout";
import { CodeBlock } from "@/components/CodeBlock";

export default function SymphonyPublicEndpointPage() {
  const headingColor = useColorModeValue("gray.800", "white");

  return (
    <>
      <Head>
        <title>Symphony - Public Endpoint</title>
      </Head>

      <SymphonyLayout>
        <VStack align="stretch" spacing={8}>
          <Heading fontSize="3xl" textAlign="center" color={headingColor}>
            Public Endpoint
          </Heading>

          {/* RPC, API & gRPC Section */}
          <Box id="rpc-api-grpc" pt={4}>
            <Heading fontSize="2xl" mb={4} color={headingColor}>
              📡 RPC, API & gRPC
            </Heading>
            
            <VStack align="stretch" spacing={6}>
              <Box>
                <Heading fontSize="lg" mb={3} color="orange.400">
                  RPC Endpoint
                </Heading>
                <CodeBlock code={`https://symphony-testnet-rpc.itrocket.net:443`} />
              </Box>

              <Box>
                <Heading fontSize="lg" mb={3} color="orange.400">
                  API Endpoint
                </Heading>
                <CodeBlock code={`https://symphony-testnet-api.itrocket.net:443`} />
              </Box>

              <Box>
                <Heading fontSize="lg" mb={3} color="orange.400">
                  gRPC Endpoint
                </Heading>
                <CodeBlock code={`symphony-testnet-grpc.itrocket.net:28090`} />
              </Box>
            </VStack>
          </Box>

          <Divider />

          {/* Peers & Seeds Section */}
          <Box id="peers-seeds" pt={4}>
            <Heading fontSize="2xl" mb={4} color={headingColor}>
              🌐 Peers & Seeds
            </Heading>
            
            <VStack align="stretch" spacing={6}>
              <Box>
                <Heading fontSize="lg" mb={3} color="orange.400">
                  Seeds
                </Heading>
                <CodeBlock 
                  code={`seed1@symphony-testnet-seed.itrocket.net:28656`} 
                />
              </Box>

              <Box>
                <Heading fontSize="lg" mb={3} color="orange.400">
                  Peers
                </Heading>
                <CodeBlock 
                  code={`peer1@symphony-testnet-peer.itrocket.net:28656`} 
                />
              </Box>

              <Box>
                <Heading fontSize="lg" mb={3} color="orange.400">
                  Live Peers
                </Heading>
                <CodeBlock 
                  code={`PEERS=$(curl -s --max-time 3 --retry 2 --retry-connrefused "https://symphony-testnet-rpc.itrocket.net/net_info?" | jq -r '.result.peers[] | "\\(.node_info.id)@\\(.remote_ip):\\(.node_info.listen_addr | split(":")[2])"' | paste -sd, -)
echo $PEERS
sed -i "s/^persistent_peers *=.*/persistent_peers = \\"$PEERS\\"/" $HOME/.symphony/config/config.toml`} 
                />
              </Box>

              <Box>
                <Heading fontSize="lg" mb={3} color="orange.400">
                  Addrbook (Update every hour)
                </Heading>
                <CodeBlock 
                  code={`wget -O addrbook.json https://testnet-files.symphony.io/addrbook.json --inet4-only
mv addrbook.json ~/.symphony/config`} 
                />
              </Box>
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
      </SymphonyLayout>
    </>
  );
}