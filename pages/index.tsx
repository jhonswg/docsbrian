import {
  Box,
  Button,
  Center,
  Flex,
  HStack,
  Image as ChakraImage,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { DefaultLayout } from "@/layouts";
import { Section } from "@/components/section";
import { Hero } from "@/components/hero";
import { Teams } from "@/components/teams";
import { Features } from "@/components/features";
import { Tweets } from "@/components/tweets";

const networks = [
  // === Mainnet ===
  {
    name: "CrossFi",
    id: "crossfi-testnet-1",
    logo: "https://pbs.twimg.com/profile_images/1719733805483790336/9rtdiMS-_400x400.jpg",
    type: "mainnet",
    serviceUrl: "https://atomone.network/",
    explorerUrl: "https://www.mintscan.io/atomone",
  },
  {
    name: "Self Chain",
    id: "self-testnet",
    logo: "https://pbs.twimg.com/profile_images/1879603544120008704/z2WKYx3z_400x400.jpg",
    type: "mainnet",
  },
  {
    name: "Initia",
    id: "initia-mainnet",
    logo: "https://pbs.twimg.com/profile_images/1919389207367491584/GFxs1SP5_400x400.png",
    type: "mainnet",
  },

  // === Testnet ===
  {
    name: "Empeiria",
    id: "empe-testnet",
    logo: "https://pbs.twimg.com/profile_images/1887069794798632960/IvxbLJcg_400x400.jpg",
    type: "testnet",
  },
  {
    name: "Symphony Labs",
    id: "sympn-testnet",
    logo: "https://pbs.twimg.com/profile_images/1896255605909725184/rC9pD5EQ_400x400.jpg",
    type: "testnet",
  },
  {
    name: "Warden",
    id: "warden-testnet",
    logo: "https://pbs.twimg.com/profile_images/1904848026742484992/nO3RP237_400x400.jpg",
    type: "testnet",
  },
];

const Home = () => {
  const [selected, setSelected] = useState<"Mainnet" | "Testnet">("Mainnet");

  // ✅ Hooks Chakra harus di top-level
  const cardBg = useColorModeValue("gray.900", "gray.900");
  const borderColor = useColorModeValue("gray.800", "gray.700");
  const toggleBg = useColorModeValue("gray.100", "gray.700");
  const activeBg = useColorModeValue("whiteAlpha.300", "whiteAlpha.200");
  const inactiveColor = useColorModeValue("gray.400", "gray.400");
  const hoverBg = useColorModeValue("gray.600", "gray.600");
  const hoverColor = useColorModeValue("white", "white");

  // ✅ Filter data berdasarkan pilihan
  const filteredNetworks = networks.filter((net) =>
    selected === "Mainnet" ? net.type === "mainnet" : net.type === "testnet"
  );

  return (
    <DefaultLayout>
      <Hero />
      <Teams mt="10" />
      <Features mt="6" />

      {/* Section Judul */}
      <Section
        mt="8"
        title="Portofolio Project"
        subtitle="Make things happen"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil sed consequatur."
      />

      {/* Toggle Buttons */}
      <Stack textAlign="center" spacing="4" mt="-10" mb="6">
        <Center>
          <HStack bg={toggleBg} p="1" borderRadius="full" spacing="1">
            {["Mainnet", "Testnet"].map((item) => {
              const isActive = selected === item;
              return (
                <Button
                  key={item}
                  size="sm"
                  borderRadius="full"
                  px="5"
                  fontWeight="medium"
                  bg={isActive ? activeBg : "transparent"}
                  color={isActive ? "white" : inactiveColor}
                  _hover={{ bg: hoverBg, color: hoverColor }}
                  onClick={() => setSelected(item as "Mainnet" | "Testnet")}
                >
                  {item}
                  <Text ml="1" fontSize="sm" opacity="0.6">
                    {item === "Mainnet"
                      ? networks.filter((n) => n.type === "mainnet").length
                      : networks.filter((n) => n.type === "testnet").length}
                  </Text>
                </Button>
              );
            })}
          </HStack>
        </Center>
      </Stack>

      {/* Grid Network Cards */}
      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
        spacing="6"
        px={{ base: "4", md: "8" }}
        pb="16"
      >
        {filteredNetworks.map((net) => (
          <Box
            key={net.id}
            bg={cardBg}
            borderRadius="2xl"
            p="5"
            position="relative"
            overflow="hidden"
            border="1px solid"
            borderColor={borderColor}
            _hover={{
              borderColor: "purple.400",
              transform: "translateY(-4px)",
              transition: "all 0.2s ease-in-out",
            }}
          >
            <HStack spacing="2" zIndex="2" position="relative">
              <Text fontWeight="bold" fontSize="lg" color="white">
                {net.name}
              </Text>
              <ChakraImage
                src={net.logo}
                alt={net.name}
                position="absolute"
                bottom="-20"
                right="-16"
                boxSize="120px"
                opacity="0.9"
                borderRadius="full"
              />
            </HStack>

            <Text fontSize="sm" color="gray.500" mb="4">
              {net.id}
            </Text>

            <HStack spacing="3">
              <Button
                as="a"
                href={net.serviceUrl}
                target="_blank"
                rel="noopener noreferrer"
                size="sm"
                bg="purple.600"
                color="white"
                borderRadius="md"
                _hover={{ bg: "purple.500" }}
              >
                Services
              </Button>
              <Button
                as="a"
                href={net.explorerUrl}
                target="_blank"
                rel="noopener noreferrer"
                size="sm"
                bg="black"
                color="white"
                borderRadius="md"
                _hover={{ bg: "gray.800" }}
                rightIcon={<ExternalLinkIcon />}
              >
                Explorer
              </Button>
            </HStack>
          </Box>
        ))}
      </SimpleGrid>

      <Tweets mt="12" />
    </DefaultLayout>
  );
};

export default Home;
