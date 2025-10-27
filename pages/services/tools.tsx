import { Box, Heading, Text, SimpleGrid, Card, CardBody } from "@chakra-ui/react";

const mainnets = [
  { name: "Ethereum Mainnet", desc: "Secure and high-availability RPC endpoints for Ethereum." },
  { name: "BNB Chain Mainnet", desc: "Mainnet RPC and validator management for BNB Chain." },
  { name: "Cosmos Hub", desc: "Access Cosmos RPC and REST API for production systems." },
  { name: "Polygon Mainnet", desc: "High-throughput RPC nodes with 99.9% uptime." },
];

export default function ToolsPage() {
  return (
    <Box py={20} px={{ base: 6, md: 20 }}>
      <Heading mb={10} textAlign="center">
        Mainnet Services
      </Heading>
      <Text textAlign="center" mb={12} color="gray.500">
        Enterprise-grade infrastructure for production-ready blockchain networks.
      </Text>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
        {mainnets.map((net) => (
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
