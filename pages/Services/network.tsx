import { Box, Heading, Text, SimpleGrid, Card, CardBody } from "@chakra-ui/react";

const networks = [
  { name: "Ethereum Sepolia", desc: "Sepolia RPC, faucet & explorer integration." },
  { name: "BNB Chain Testnet", desc: "BNB RPC and validator support for test deployments." },
  { name: "Cosmos Testnet", desc: "Cosmos Hub test network and gRPC endpoints." },
  { name: "Polygon Mumbai", desc: "Full RPC & faucet tools for Polygon Testnet." },
];

export default function NetworkPage() {
  return (
    <Box py={20} px={{ base: 6, md: 20 }}>
      <Heading mb={10} textAlign="center">
        Testnet Networks
      </Heading>
      <Text textAlign="center" mb={12} color="gray.500">
        Choose from our reliable testnet RPC services for development and testing.
      </Text>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
        {networks.map((net) => (
          <Card key={net.name} _hover={{ transform: "translateY(-4px)", boxShadow: "lg" }} transition="0.2s">
            <CardBody>
              <Heading fontSize="lg" mb={2}>
                {net.name}
              </Heading>
              <Text color="gray.500">{net.desc}</Text>
            </CardBody>
          </Card>
        ))}
      </SimpleGrid>
    </Box>
  );
}
