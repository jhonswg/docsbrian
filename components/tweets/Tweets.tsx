import { FC } from "react";
import {
  Box,
  SimpleGrid,
  VStack,
  HStack,
  Container,
  keyframes,
  Image,
} from "@chakra-ui/react";
import { Section } from "@/components/section";
import Tweet from "./Tweet";
import { FiSettings } from "react-icons/fi";

// 🔹 Animasi sinyal (berkedip naik-turun)
const signalPulse = keyframes`
  0%, 100% { transform: scaleY(0.4); opacity: 0.6; }
  50% { transform: scaleY(1); opacity: 1; }
`;

// 🔹 Animasi kunci inggris (FiSettings) berputar bolak-balik
const wrenchSpin = keyframes`
  0% { transform: rotate(0deg); }
  50% { transform: rotate(25deg); }
  100% { transform: rotate(0deg); }
`;

// 🔹 Komponen indikator sinyal
const SignalIndicator: FC = () => {
  return (
    <HStack spacing="3px" justify="center" mb={2}>
      {[0.4, 0.6, 0.8].map((delay, i) => (
        <Box
          key={i}
          w="10px"
          h="70px"
          bg="green.400"
          borderRadius="full"
          animation={`${signalPulse} 1.2s ease-in-out ${i * 0.2}s infinite`}
        />
      ))}
    </HStack>
  );
};

// 🔹 Komponen animasi kunci inggris untuk Network Support
const WrenchAnimation: FC = () => {
  return (
    <Box
      as={FiSettings}
      fontSize="70px"
      color="green.400"
      mx="auto"
      mb={2}
      animation={`${wrenchSpin} 1.8s ease-in-out infinite`}
    />
  );
};

const tweets = [
  {
    value: "99.9%",
    title: "Uptime",
    description:
      "Our systems are monitored 24/7 to ensure that any deviation from the norm is instantly recognized.",
  },
  {
    value: "50+",
    title: "Networks Supported",
    description:
      "We have effectively served more than 50 networks, including Ethereum, Solana, Cosmos, Polkadot, Avalanche, and others.",
  },
  {
    value: "2021",
    title: "Founded",
    description:
      "Since 2021, we have consistently delivered secure, reliable, and efficient validator operations.",
  },
  {
    value: "12k",
    title: "Community Members Involved",
    description:
      "Our community thrives with over 12,000+ active members engaged in collaborative discussions, fostering innovation and growth.",
  },
];

const Tweets: FC = () => {
  return (
    <Box position="relative" py={{ base: 16, md: 24 }} px={{ base: 6, md: 16 }}>
      <Box
        position="absolute"
        bottom="1%"
        left="30%"
        w="80"
        h="80"
        bg="pink.600"
        filter="blur(160px)"
        opacity={0.25}
      />

      <Section
        title="Loved by Communities"
        text="Empowering blockchain networks with performance, uptime, and trust."
      />

      <Container maxW="7xl" position="relative" zIndex={1}>
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          spacing={8}
          alignItems="stretch"
        >
          {/* Kolom kiri (1, 2, 3) */}
          <VStack
            spacing={8}
            align="stretch"
            ml={{ base: 0, md: "-70px" }}
          >
            <HStack spacing={6} align="stretch" w="90%">
              {/* 🔹 Uptime + indikator sinyal */}
              <Box w="45%">
                <Tweet {...tweets[0]} h="100%">
                  <Box mb={2} ml="40%">
                    <SignalIndicator />
                  </Box>
                </Tweet>
              </Box>

              {/* 🔧 Networks Supported + animasi wrench */}
              <Tweet {...tweets[1]} w="55%" h="100%">
                <WrenchAnimation />
              </Tweet>
            </HStack>

            {/* Founded */}
            <Tweet
              {...tweets[2]}
              w="90%"
              h="100%"
              mt={{ base: 6, md: 12 }}
            />
          </VStack>

          {/* Kolom kanan */}
          <VStack spacing={8} align="stretch">
            <Tweet
              {...tweets[3]}
              w={{ base: "100%", md: "125%" }}
              h="100%"
              ml={{ base: 0, md: "-75px" }}
            />
          </VStack>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Tweets;
