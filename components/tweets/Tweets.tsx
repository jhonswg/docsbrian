import { FC } from "react";
import {
  Box,
  SimpleGrid,
  VStack,
  HStack,
  Container,
  keyframes,
  Image,
  Tooltip,
} from "@chakra-ui/react";
import { Section } from "@/components/section";
import Tweet from "./Tweet";
import { FiSettings } from "react-icons/fi";
import mapsImage from "./Image/maps.png";
import grafanaImage from "./Image/grafana.png";

// 🔹 Animasi sinyal (berkedip naik-turun)
const signalPulse = keyframes`
  0%, 100% { transform: scaleY(0.4); opacity: 0.6; }
  50% { transform: scaleY(1); opacity: 1; }
`;

// 🔹 Animasi kunci inggris
const wrenchSpin = keyframes`
  0% { transform: rotate(0deg); }
  50% { transform: rotate(25deg); }
  100% { transform: rotate(0deg); }
`;

// 🔹 Animasi pulse titik menyala
const glowPulse = keyframes`
  0%, 100% { 
    transform: scale(0.8); 
    opacity: 0.7; 
    box-shadow: 0 0 5px currentColor, 0 0 20px currentColor; 
  }
  50% { 
    transform: scale(1.2); 
    opacity: 1; 
    box-shadow: 0 0 10px currentColor, 0 0 30px currentColor, 0 0 50px currentColor; 
  }
`;

// 🔹 Indikator sinyal
const SignalIndicator: FC = () => (
  <HStack spacing="3px" justify="center" mb={2}>
    {[0.4, 0.6, 0.8].map((delay, i) => (
      <Box
        key={i}
        w="8px"
        h={{ base: "40px", md: "70px" }}
        bg="green.400"
        borderRadius="full"
        animation={`${signalPulse} 1.2s ease-in-out ${i * 0.2}s infinite`}
      />
    ))}
  </HStack>
);

// 🔹 Animasi kunci inggris
const WrenchAnimation: FC = () => (
  <Box
    as={FiSettings}
    fontSize={{ base: "50px", md: "70px" }}
    color="green.400"
    mx="auto"
    mb={2}
    animation={`${wrenchSpin} 1.8s ease-in-out infinite`}
  />
);

// 🔹 Titik menyala
interface GlowingPointProps {
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  color: string;
  size?: string;
  label: string;
  delay?: number;
}

const GlowingPoint: FC<GlowingPointProps> = ({
  top,
  left,
  right,
  bottom,
  color,
  size = "12px",
  label,
  delay = 0,
}) => (
  <Tooltip
    label={label}
    aria-label={label}
    placement="top"
    bg="transparent"
    color="white"
    hasArrow
    fontSize="sm"
    fontWeight="medium"
    px={3}
    py={2}
    borderRadius="md"
    boxShadow="md"
  >
    <Box
      position="absolute"
      top={top}
      left={left}
      right={right}
      bottom={bottom}
      w={size}
      h={size}
      bg={color}
      borderRadius="full"
      animation={`${glowPulse} 2s ease-in-out ${delay}s infinite`}
      zIndex={2}
      cursor="pointer"
      _hover={{
        transform: "scale(1.5)",
        transition: "transform 0.2s ease",
      }}
    />
  </Tooltip>
);

const tweets = [
  {
    value: "99.9%",
    title: "Uptime",
    description:
      "Our systems are monitored 24/7 to ensure that any deviation from the norm is instantly recognized.",
  },
  {
    value: "5+",
    title: "Networks Supported",
    description:
      "We have effectively served more than 5 networks, including Ethereum, Solana, Cosmos, Polkadot, and others.",
  },
  {
    value: "24/7",
    title: "Monitoring & Alerts",
    description:
      "Automated systems and AI-powered bots ensure real-time detection and instant alerts for any network anomaly.",
  },
  {
    value: "",
    title: "Infrastructure Geolocation",
    description: "The right servers. The right places.",
  },
];

const Tweets: FC = () => {
  return (
    <Box position="relative" py={{ base: 12, md: 24 }} px={{ base: 4, md: 16 }}>
      {/* Efek blur background */}
      <Box
        boxSize="72"
        position="absolute"
        bottom="10%"
        left="15%"
        bg="pink.500"
        filter="blur(170px)"
        opacity={0.5}
      />
      <Box
        boxSize="72"
        position="absolute"
        bottom="0"
        right="0"
        bg="brand.500"
        borderRadius="full"
        filter="blur(140px)"
        opacity={0.5}
      />

      <Section
        title="Operational Excellence"
        text="Empowering blockchain networks with performance, uptime, and trust."
        mb={2}
      />

      <Container maxW="100%" px="0" position="relative" zIndex={1}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} alignItems="stretch">
  {/* Kolom kiri */}
  <VStack spacing={8} align="stretch" ml={{ base: 0, md: "-70px" }}>
    <HStack
      spacing={6}
      align="stretch"
      w={{ base: "100%", md: "90%" }}
      alignItems="stretch"
    >
      <Box
        w={{ base: "100%", md: "45%" }}
        h={{ base: "auto", md: "100%" }}
        transition="transform 0.3s ease"
        _hover={{ transform: "translateY(-10px)" }}
      >
        <Tweet {...tweets[0]} h="100%">
          <Box mb={2} ml="40%">
            <SignalIndicator />
          </Box>
        </Tweet>
      </Box>

      <Box
        w={{ base: "100%", md: "55%" }}
        h={{ base: "auto", md: "100%" }}
        transition="transform 0.3s ease"
        _hover={{ transform: "translateY(-10px)" }}
      >
        <Tweet {...tweets[1]} h="100%">
          <WrenchAnimation />
        </Tweet>
      </Box>
    </HStack>

    <Box
      position="relative"
      w={{ base: "100%", md: "90%" }}
      h={{ base: "auto", md: "100%" }}
      transition="transform 0.3s ease"
      _hover={{ transform: "translateY(-10px)" }}
      mt={{ base: 0, md: "-10px" }}
      overflow="hidden"
    >
      <Tweet
        {...tweets[2]}
        h="100%"
        position="relative"
        overflow="hidden"
      >
        <Box
          position="absolute"
          top="50%"
          right="0"
          transform="translateY(-50%)"
          w="55%"
          h="100%"
          opacity={0.15}
          zIndex={0}
          pointerEvents="none"
        >
          <Image
            src={
              typeof grafanaImage === "string"
                ? grafanaImage
                : grafanaImage.src
            }
            alt="Grafana Logo"
            w="100%"
            h="100%"
            objectFit="cover"
          />
        </Box>

        <Box position="relative" zIndex={1}></Box>
      </Tweet>
    </Box>
  </VStack>

  {/* Kolom kanan (map) */}
  <VStack spacing={8} align="stretch" h="100%">
    <Box
      transition="transform 0.3s ease"
      _hover={{ transform: "translateY(-10px)" }}
      h={{ base: "auto", md: "100%" }}
    >
      <Tweet
        {...tweets[3]}
        w={{ base: "100%", md: "125%" }}
        h="100%"
        ml={{ base: 0, md: "-75px" }}
        childrenPosition="bottom"
      >
        <Box position="relative" w="100%" h="auto" mt={2}>
          <Image
            src={
              typeof mapsImage === "string" ? mapsImage : mapsImage.src
            }
            alt="Infrastructure Map"
            w="100%"
            h="auto"
            objectFit="contain"
          />
          <GlowingPoint top="49%" left="29%" color="green.400" size="10px" label="Virginia, US" delay={0} />
          <GlowingPoint top="35%" right="45%" color="green.400" size="10px" label="Helsinki, Finlandia" delay={0.5} />
          <GlowingPoint top="43%" right="48%" color="green.400" size="10px" label="Nurnberg, Germany" delay={1} />
          <GlowingPoint top="69%" right="26%" color="green.400" size="10px" label="Singapore" delay={1.5} />
        </Box>
      </Tweet>
    </Box>
  </VStack>
</SimpleGrid>

      </Container>
    </Box>
  );
};

export default Tweets;
