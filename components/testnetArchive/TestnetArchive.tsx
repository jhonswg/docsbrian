import { FC, useState } from "react";
import {
  Box,
  VStack,
  Heading,
  Text,
  Image,
  keyframes,
  useColorModeValue,
  Button,
  SimpleGrid,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

// 🔹 Animasi scroll - PENTING: harus -50% karena kita duplikasi 2x
const scrollLeft = keyframes`
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
`;

const scrollRight = keyframes`
  from { transform: translateX(-50%); }
  to { transform: translateX(0); }
`;

// 🔹 Animasi melayang lembut
const floatAnim = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
`;

// 🔹 Daftar logo testnet
const networks = [
  {
    name: "SelfChain",
    logo: "https://pbs.twimg.com/profile_images/1879603544120008704/z2WKYx3z_400x400.jpg",
  },
  {
    name: "Initia",
    logo: "https://pbs.twimg.com/profile_images/1919389207367491584/GFxs1SP5_400x400.png",
  },
  {
    name: "Shardeum",
    logo: "https://pbs.twimg.com/profile_images/1808852486402211840/4B19YQz__400x400.jpg",
  },
  {
    name: "CrossFi",
    logo: "https://pbs.twimg.com/profile_images/1719733805483790336/9rtdiMS-_400x400.jpg",
  },
  {
    name: "Empeiria",
    logo: "https://pbs.twimg.com/profile_images/1887069794798632960/IvxbLJcg_400x400.jpg",
  },
  {
    name: "Symphony",
    logo: "https://pbs.twimg.com/profile_images/1896255605909725184/rC9pD5EQ_400x400.jpg",
  },
  {
    name: "Pipe",
    logo: "https://pbs.twimg.com/profile_images/1832081937290481665/h3nVMshF_400x400.jpg",
  },
  {
    name: "Nulink",
    logo: "https://pbs.twimg.com/profile_images/1881213452376817664/0GG59J1S_400x400.jpg",
  },
  {
    name: "Tangle",
    logo: "https://pbs.twimg.com/profile_images/1746972470840836096/Xzg3jx6V_400x400.png",
  },
  {
    name: "Avail",
    logo: "https://pbs.twimg.com/profile_images/1916802973201756160/B64QI4r0_400x400.jpg",
  },
];

// 🔹 Komponen utama
const TestnetArchive: FC = () => {
  const textColor = useColorModeValue("gray.600", "gray.300");
  const [hovered, setHovered] = useState<string | null>(null);

  // 🔹 Gradient eksplisit untuk match body bg (dari inspect, hindari var chakra-body-bg)
  const horizontalFadeLeft = useColorModeValue(
    "linear(to right, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.5) 50%, transparent 95%)",
    "linear(to right, rgba(17,24,39,0.95) 0%, rgba(17,24,39,0.7) 50%, transparent 95%)"
  );
  const horizontalFadeRight = useColorModeValue(
    "linear(to left, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.5) 50%, transparent 95%)",
    "linear(to left, rgba(17,24,39,0.95) 0%, rgba(17,24,39,0.7) 50%, transparent 95%)"
  );
  const verticalFadeTop = useColorModeValue(
    "linear(to bottom, rgba(255,255,255,0.8) 0%, transparent 80%)",
    "linear(to bottom, rgba(17,24,39,0.8) 0%, transparent 80%)"
  );
  const verticalFadeBottom = useColorModeValue(
    "linear(to top, rgba(255,255,255,0.8) 0%, transparent 80%)",
    "linear(to top, rgba(17,24,39,0.8) 0%, transparent 80%)"
  );

  // Bagi logo menjadi 2 baris
  const perRow = 5;
  const row1 = networks.slice(0, perRow);
  const row2 = networks.slice(perRow);

  return (
    <Box
      position="relative"
      py={{ base: 16, md: 10 }}
      px={{ base: 4, md: 4 }}
      pb="-30px" // 🔹 Kurangi padding horizontal
    >
      {/* Header Section */}
      <VStack spacing={4} mb={2} textAlign="center">
        <Heading
          fontSize={{ base: "4xl", md: "5xl" }}
          bgGradient="linear(to-r, brand.400, orange.400)"
          bgClip="text"
          fontWeight="bold"
          opacity={1}
        >
          TESTNET ARCHIVE
        </Heading>
      </VStack>

      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        spacing={{ base: 10, md: 12 }} // 🔹 Kurangi jarak antar kolom
        alignItems="center"
        zIndex={1}
        maxW="10xl" // 🔹 Sebelumnya 7xl, sekarang lebih sempit
        mx="auto"
      >
        {/* 🧩 Bagian kiri */}
        <VStack align="start" spacing={6}>
          <Heading
            as="h2"
            fontSize={{ base: "2xl", md: "4xl" }}
            fontWeight="bold"
            lineHeight="shorter"
          >
            Supported{" "}
            <Text
              as="span"
              bgGradient="linear(to-r, pink.400, orange.400)"
              bgClip="text"
            >
              blockchains.
            </Text>
          </Heading>

          <Text fontSize={{ base: "md", md: "md" }} color={textColor} maxW="lg">
            We have participated in over Engaging in 15+ testnets across
            Ethereum, Solana, Cosmos, and beyond, we specialize in validating
            next-generation protocols and strengthening Web3 infrastructure.
          </Text>

          <Button
            bg={useColorModeValue(
              "rgba(255,255,255,0.08)",
              "rgba(255,255,255,0.05)"
            )}
            border="1px solid rgba(255,255,255,0.1)"
            color="pink.500"
            borderRadius="2xl"
            size="md"
            rightIcon={<ExternalLinkIcon />}
            mt={4}
            _hover={{ transform: "scale(1.05)", transition: "0.2s" }}
          >
            Explore Networks
          </Button>
        </VStack>

        {/* 🪐 Bagian kanan - animasi logo berjalan */}
        <Box
          overflow="hidden"
          h="450px"
          position="relative"
          borderRadius="2xl"
          bg="transparent"
        >
          {/* 🔹 Fade horizontal (left-right) - super opaque & gradual dari inspect */}
          <Box
            position="absolute"
            left={0}
            top={0}
            bottom={0}
            width="300px" // 🔹 Super lebar untuk cover full scroll + gap
            pointerEvents="none"
            zIndex={1}
            bg={horizontalFadeLeft}
            borderRadius="2xl 0 0 2xl"
            opacity={1}
            // sx={{ "-webkit-backdrop-filter": "blur(20px)" }} // 🔹 Uncomment jika mau blur, tapi test dulu
          />
          <Box
            position="absolute"
            right={0}
            top={0}
            bottom={0}
            width="300px"
            pointerEvents="none"
            zIndex={1}
            bg={horizontalFadeRight}
            borderRadius="0 2xl 2xl 0"
            opacity={1}
            // sx={{ "-webkit-backdrop-filter": "blur(20px)" }}
          />

          {/* 🌈 Fade vertical (atas-bawah) - subtle untuk depth */}
          <Box
            position="absolute"
            top={0}
            left={0}
            right={0}
            height="80px"
            pointerEvents="none"
            zIndex={1}
            bg={verticalFadeTop}
            borderRadius="2xl 2xl 0 0"
            opacity={0.8}
            // sx={{ "-webkit-backdrop-filter": "blur(12px)" }}
          />
          <Box
            position="absolute"
            bottom={0}
            left={0}
            right={0}
            height="80px"
            pointerEvents="none"
            zIndex={1}
            bg={verticalFadeBottom}
            borderRadius="0 0 2xl 2xl"
            opacity={0.8}
            // sx={{ "-webkit-backdrop-filter": "blur(12px)" }}
          />

          {/* 🌀 Container baris */}
          <VStack
            justify="center"
            spacing={12}
            h="full"
            w="full"
            position="relative"
            zIndex={2}
          >
            {/* BARIS 1 - Kanan ke Kiri */}
            <Box
              display="flex"
              alignItems="center"
              gap={6}
              position="relative"
              w="full"
              _hover={{
                "& > div": {
                  animationPlayState: "paused",
                },
              }}
            >
              <Box
                display="flex"
                gap={6}
                sx={{
                  animation: `${scrollLeft} 50s linear infinite`,
                }}
              >
                {/* Duplikasi banyak untuk seamless loop */}
                {Array(20)
                  .fill(row1)
                  .flat()
                  .map((network, i) => (
                    <Box
                      key={`row1-${network.name}-${i}`}
                      flexShrink={0}
                      animation={`${floatAnim} ${
                        3 + (i % 3)
                      }s ease-in-out infinite`}
                      onMouseEnter={() => setHovered(network.name)}
                      onMouseLeave={() => setHovered(null)}
                    >
                      <Image
                        src={network.logo}
                        alt={network.name}
                        boxSize={{ base: "60px", md: "85px" }}
                        borderRadius="full"
                        objectFit="cover"
                        sx={{
                          filter: hovered && hovered !== network.name ? "blur(4px)" : "none",
                          transition: "filter 0.2s ease",
                        }}
                        _hover={{
                          transform: "scale(1.1)",
                          transition: "0.25s",
                          // boxShadow: "0 0 25px rgba(255,182,193,0.6)",
                        }}
                      />
                    </Box>
                  ))}
              </Box>
            </Box>

            {/* BARIS 2 - Kiri ke Kanan */}
            <Box
              display="flex"
              alignItems="center"
              gap={6}
              position="relative"
              w="full"
              _hover={{
                "& > div": {
                  animationPlayState: "paused",
                },
              }}
            >
              <Box
                display="flex"
                gap={6}
                sx={{
                  animation: `${scrollRight} 50s linear infinite`,
                }}
              >
                {/* Duplikasi banyak untuk seamless loop */}
                {Array(20)
                  .fill(row2)
                  .flat()
                  .map((network, i) => (
                    <Box
                      key={`row2-${network.name}-${i}`}
                      flexShrink={0}
                      animation={`${floatAnim} ${
                        3 + (i % 3)
                      }s ease-in-out infinite`}
                      onMouseEnter={() => setHovered(network.name)}
                      onMouseLeave={() => setHovered(null)}
                    >
                      <Image
                        src={network.logo}
                        alt={network.name}
                        boxSize={{ base: "60px", md: "85px" }}
                        borderRadius="full"
                        objectFit="cover"
                        sx={{
                          filter: hovered && hovered !== network.name ? "blur(4px)" : "none",
                          transition: "filter 0.2s ease",
                        }}
                        _hover={{
                          transform: "scale(1.1)",
                          transition: "0.25s",
                          // boxShadow: "0 0 5px rgba(255,182,193,0.6)",
                        }}
                      />
                    </Box>
                  ))}
              </Box>
            </Box>
          </VStack>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default TestnetArchive;