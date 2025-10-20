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

// 🔹 Animasi sinyal (berkedip naik-turun) - sudah ada
const signalPulse = keyframes`
  0%, 100% { transform: scaleY(0.4); opacity: 0.6; }
  50% { transform: scaleY(1); opacity: 1; }
`;

// 🔹 Animasi kunci inggris - sudah ada
const wrenchSpin = keyframes`
  0% { transform: rotate(0deg); }
  50% { transform: rotate(25deg); }
  100% { transform: rotate(0deg); }
`;

// 🔹 Animasi baru: Pulse untuk titik menyala (scale + opacity)
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

// 🔹 Komponen indikator sinyal - sudah ada
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

// 🔹 Komponen animasi kunci inggris - sudah ada
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

// 🔹 Interface untuk GlowingPoint (hapus duplikasi, tambah delay)
interface GlowingPointProps {
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  color: string; // e.g., 'blue.400', 'red.400', 'green.400'
  size?: string; // default '12px'
  label: string; // Label wilayah untuk tooltip
  delay?: number; // Delay animasi dalam detik, default 0
}

// 🔹 Komponen: Titik menyala (glowing point) dengan tooltip dan delay animasi
const GlowingPoint: FC<GlowingPointProps> = ({
  top,
  left,
  right,
  bottom,
  color,
  size = "12px",
  label,
  delay = 0,
}) => {
  return (
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
        // Hapus pointerEvents="none" agar bisa di-hover
      />
    </Tooltip>
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
    <Box position="relative" py={{ base: 16, md: 24 }} px={{ base: 6, md: 16 }}>
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

      <Container maxW="7xl" position="relative" zIndex={1}>
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          spacing={8}
          alignItems="stretch"
        >
          {/* Kolom kiri (1, 2, 3) - tidak berubah */}
          <VStack spacing={8} align="stretch" ml={{ base: 0, md: "-70px" }}>
            <HStack spacing={6} align="stretch" w="90%" alignItems="stretch">
              <Box
                w="45%"
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
                w="55%"
                transition="transform 0.3s ease"
                _hover={{ transform: "translateY(-10px)" }}
              >
                <Tweet {...tweets[1]} w="100%" h="100%">
                  <WrenchAnimation />
                </Tweet>
              </Box>
            </HStack>

            <Box
              position="relative"
              transition="transform 0.3s ease"
              _hover={{ transform: "translateY(-10px)" }}
              mt={{ base: 0, md: "-10px" }}
              overflow="hidden"
            >
              <Tweet
                {...tweets[2]}
                w="90%"
                h="100%"
                position="relative"
                overflow="hidden"
              >
                {/* Background logo grafana di kanan */}
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

                {/* Isi utama card tetap di atas gambar */}
                <Box position="relative" zIndex={1}>
                  {/* Kamu bisa tambahkan teks, icon, atau button di sini */}
                </Box>
              </Tweet>
            </Box>
          </VStack>

          {/* Kolom kanan - Infrastructure Geolocation + gambar maps dengan titik menyala */}
          <VStack spacing={8} align="stretch" h="100%">
            <Box
              transition="transform 0.3s ease"
              _hover={{ transform: "translateY(-10px)" }}
              h="100%"
            >
              <Tweet
                {...tweets[3]}
                w={{ base: "100%", md: "125%" }}
                h="100%"
                ml={{ base: 0, md: "-75px" }}
                childrenPosition="bottom"
              >
                {/* Wrapper relative untuk overlay titik */}
                <Box position="relative" w="100%" h="auto" mt={2}>
                  <Image
                    src={
                      typeof mapsImage === "string" ? mapsImage : mapsImage.src
                    }
                    alt="Infrastructure Map"
                    w="100%"
                    h="auto"
                    color="green.700"
                    objectFit="contain"
                  />

                  {/* Titik menyala - sesuaikan posisi berdasarkan gambar, dengan label wilayah dan delay berbeda */}
                  <GlowingPoint
                    top="49%" // Eropa Utara (hijau)
                    left="29%"
                    color="green.400"
                    size="10px"
                    label="Virginia, US"
                    delay={0} // Delay 0s
                  />
                  <GlowingPoint
                    top="35%" // Eropa Tengah (hijau)
                    right="45%"
                    color="green.400"
                    size="10px"
                    label="Helsinki, Finlandia"
                    delay={0.5} // Delay 0.5s
                  />
                  <GlowingPoint
                    top="43%" // Eropa Tengah (hijau)
                    right="48%"
                    color="green.400"
                    size="10px"
                    label="Nurnberg, Germany"
                    delay={1} // Delay 1s
                  />
                  <GlowingPoint
                    top="69%" // Singapore (hijau)
                    right="26%"
                    color="green.400"
                    size="10px"
                    label="Singapore"
                    delay={1.5} // Delay 1.5s
                  />
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
