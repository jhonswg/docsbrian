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
import EmpeiriaLayout from "@/components/sidebar/empeiria/EmpeiriaLayout";
import { CodeBlock } from "@/components/CodeBlock";

export default function EmpeiriaPublicEndpointPage() {
  const headingColor = useColorModeValue("gray.800", "white");

  return (
    <>
      <Head>
        <title>Empeiria - Public Endpoint</title>
      </Head>

      <EmpeiriaLayout>
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
                <CodeBlock code={`https://empeiria-testnet-rpc.itrocket.net:443`} />
              </Box>

              <Box>
                <Heading fontSize="lg" mb={3} color="orange.400">
                  API Endpoint
                </Heading>
                <CodeBlock code={`https://empeiria-testnet-api.itrocket.net:443`} />
              </Box>

              <Box>
                <Heading fontSize="lg" mb={3} color="orange.400">
                  gRPC Endpoint
                </Heading>
                <CodeBlock code={`empeiria-testnet-grpc.itrocket.net:28090`} />
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
                  code={`20ca5fc4882e6f975add2d106da8afc4a5a6c6d@empeiria-testnet-seed.itrocket.net:28656`} 
                />
              </Box>

              <Box>
                <Heading fontSize="lg" mb={3} color="orange.400">
                  Peers
                </Heading>
                <CodeBlock 
                  code={`03aa072f917ed1b79a14ea2cc660bc3bac787e82@empeiria-testnet-peer.itrocket.net:28656`} 
                />
              </Box>

              <Box>
                <Heading fontSize="lg" mb={3} color="orange.400">
                  Live Peers
                </Heading>
                <CodeBlock 
                  code={`PEERS=$(curl -s --max-time 3 --retry 2 --retry-connrefused "https://empeiria-testnet-rpc.itrocket.net/net_info?" | jq -r '.result.peers[] | "\\(.node_info.id)@\\(.remote_ip):\\(.node_info.listen_addr | split(":")[2])"' | paste -sd, -)
echo $PEERS
sed -i "s/^persistent_peers *=.*/persistent_peers = \\"$PEERS\\"/" $HOME/.empe/config/config.toml`} 
                />
              </Box>

              <Box>
                <Heading fontSize="lg" mb={3} color="orange.400">
                  Addrbook (Update every hour)
                </Heading>
                <CodeBlock 
                  code={`wget -O addrbook.json https://testnet-files.itrocket.net/empeiria/addrbook.json --inet4-only
mv addrbook.json ~/.empe/config`} 
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
      </EmpeiriaLayout>
    </>
  );
}