import { FC, useState, useRef } from "react";
import {
  Box,
  BoxProps,
  Center,
  Container,
  Divider,
  Flex,
  Icon,
  Stack,
} from "@chakra-ui/react";
import { Logo } from "@/components/logo";
import { Link } from "@/components/link";
import { LinkBox } from "@/components/link-box";
import { ThemeMenu } from "@/components/theme-toggle";
import { MobileMenu } from "@/components/mobile-menu";
import { MobileDrawerButton } from "@/components/mobile-drawer";
import { RiGithubFill, RiArrowDownSLine } from "react-icons/ri";
import { Route } from "@/types";
import { siteConfig } from "@/config";
import { useRouter } from "next/router";

interface NavbarProps extends BoxProps {
  routes: Route[];
}

const Navbar: FC<NavbarProps> = ({ routes, ...props }) => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const router = useRouter();

  const handleMouseEnter = (title: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenMenu(title);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpenMenu(null), 200);
  };

  const handleClick = (route: Route) => {
    if (route.path) {
      router.push(route.path);
      setOpenMenu(null);
    }
  };

  return (
    <>
      <Box
        position="fixed"
        top="0"
        left="0"
        w="100%"
        zIndex="1000"
        bg="transparent"
        backdropFilter="blur(10px)"
        borderBottom="1px solid"
        borderColor="whiteAlpha.100"
        {...props}
      >
        <Container maxW="8xl" mx="auto" px="4">
          <Flex justifyContent="space-between" alignItems="center" py="3">
            {/* LEFT SIDE */}
            <Flex flex="1" alignItems="center">
              <MobileDrawerButton aria-label="Open drawer" />
              <LinkBox href="/">
                <Logo />
              </LinkBox>
            </Flex>

            {/* CENTER LINKS */}
            <Box
              display={{ base: "none", lg: "flex" }}
              flex="1"
              justifyContent="end"
              alignItems="center"
            >
              <Flex as="nav">
                <Stack as="ul" listStyleType="none" direction="row" spacing="6">
                  {routes.map((route) => (
                    <Box
                      as="li"
                      key={route.title}
                      position="relative"
                      onMouseEnter={() => handleMouseEnter(route.title)}
                      onMouseLeave={handleMouseLeave}
                    >
                      {/* Main Link */}
                      <Flex
                        align="center"
                        fontSize="sm"
                        fontWeight="semibold"
                        color="gray.400"
                        cursor="pointer"
                        _hover={{ color: "brand.500" }}
                        onClick={() => handleClick(route)} 
                      >
                        {route.title}
                        {route.children && (
                          <Icon
                            as={RiArrowDownSLine}
                            boxSize="4"
                            ml="1"
                            transition="transform 0.2s"
                            transform={
                              openMenu === route.title
                                ? "rotate(180deg)"
                                : "rotate(0deg)"
                            }
                          />
                        )}
                      </Flex>

                      {/* Dropdown */}
                      {route.children && openMenu === route.title && (
                        <Box
                          position="absolute"
                          top="180%" 
                          left="0"
                          w="90vw" 
                          bg="gray.900"
                          border="1px solid"
                          borderColor="gray.700"
                          borderRadius="md"
                          boxShadow="lg"
                          p="2"
                          minW="180px"
                          zIndex={999}
                          onMouseEnter={() => handleMouseEnter(route.title)}
                          onMouseLeave={handleMouseLeave}
                          transition="opacity 0.15s ease-in-out"
                        >
                          {route.children.map((child) => (
                            <Box
                              as={Link}
                              key={child.path}
                              href={child.path}
                              display="block"
                              px="3"
                              py="2"
                              fontSize="sm"
                              color="gray.300"
                              borderRadius="md"
                              _hover={{ bg: "brand.500", color: "white" }}
                            >
                              {child.title}
                            </Box>
                          ))}
                        </Box>
                      )}
                    </Box>
                  ))}
                </Stack>
              </Flex>

              {/* Divider & Right Icons */}
              <Center height="6" pl="4">
                <Divider orientation="vertical" />
              </Center>
              <Flex pl="4" alignItems="center">
                <ThemeMenu />
                {siteConfig.repo && (
                  <LinkBox
                    display="flex"
                    ml="4"
                    color="gray.400"
                    href={siteConfig.repo.url}
                    isExternal
                    _hover={{ color: "gray.500" }}
                  >
                    <Icon boxSize="6" as={RiGithubFill} />
                  </LinkBox>
                )}
              </Flex>
            </Box>

            {/* MOBILE */}
            <Box display={{ base: "flex", lg: "none" }} flex="1" justifyContent="end">
              <MobileMenu routes={routes} />
            </Box>
          </Flex>
        </Container>
      </Box>
    </>
  );
};

export default Navbar;
