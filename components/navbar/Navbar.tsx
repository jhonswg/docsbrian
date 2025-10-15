import { FC, useState } from "react";
import {
  Box,
  BoxProps,
  Center,
  Container,
  Divider,
  Flex,
  Icon,
  Stack,
  useDisclosure,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { Logo } from "@/components/logo";
import { Link } from "@/components/link";
import { LinkBox } from "@/components/link-box";
import { ThemeMenu } from "@/components/theme-toggle";
import { MobileMenu } from "@/components/mobile-menu";
import { MobileDrawer, MobileDrawerButton } from "@/components/mobile-drawer";
import { RiGithubFill } from "react-icons/ri";
import { Route } from "@/types";
import { siteConfig } from "@/config";

interface NavbarProps extends BoxProps {
  routes: Route[];
}

const Navbar: FC<NavbarProps> = ({ routes, ...props }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [openMenu, setOpenMenu] = useState<string | null>(null);

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
          <Flex
            flexDir="row"
            justifyContent="space-between"
            alignItems="center"
            py="3"
          >
            {/* LEFT SIDE (Logo + Drawer Button) */}
            <Flex flex="1" alignItems="center">
              <MobileDrawerButton aria-label="Open drawer" onClick={onOpen} />
              <LinkBox href="/">
                <Logo />
              </LinkBox>
            </Flex>

            {/* CENTER NAV LINKS */}
            <Box
              display={{ base: "none", lg: "flex" }}
              flex="1"
              justifyContent="end"
              alignItems="center"
            >
              <Flex as="nav">
                <Stack as="ul" listStyleType="none" direction="row" spacing="5">
                  {routes.map((route) => (
                    <Box as="li" key={route.title} position="relative">
                      {route.children ? (
                        <Menu isOpen={openMenu === route.title}>
                          <MenuButton
                            fontSize="sm"
                            fontWeight="semibold"
                            cursor="pointer"
                            color="gray.400"
                            _hover={{ color: "brand.500" }}
                            onMouseEnter={() => setOpenMenu(route.title)}
                            onMouseLeave={() => setOpenMenu(null)}
                            onClick={() => {
                              if (route.path) {
                                window.location.href = route.path;
                              }
                            }}
                          >
                            {route.title}
                            <Icon
                              as={require("@chakra-ui/icons").ChevronUpIcon}
                              boxSize="3"
                              ml="1"
                              mr="-1"
                              transform="rotate(180deg)"
                              transition="transform 0.2s ease"
                            />
                          </MenuButton>

                          <MenuList
                            onMouseEnter={() => setOpenMenu(route.title)}
                            onMouseLeave={() => setOpenMenu(null)}
                            position="absolute"
                            left="0"
                            w="100vw"
                            bg="transparent"
                            borderColor="gray.700"
                            py="2"
                            px="1"
                            mt="2"
                          >
                            {route.children.map((child) => (
                              <MenuItem
                                key={child.path}
                                as={Link}
                                href={child.path}
                                bg="transparent"
                                fontSize="sm"
                                fontWeight="medium"
                                color="gray.300"
                                _hover={{
                                  bg: "brand.500",
                                  color: "white",
                                }}
                                _focus={{ bg: "brand.500", color: "white" }}
                                transition="background-color 0.2s ease"
                              >
                                {child.title}
                              </MenuItem>
                            ))}
                          </MenuList>
                        </Menu>
                      ) : (
                        <Link
                          fontSize="sm"
                          fontWeight="semibold"
                          href={route.path}
                          color="gray.400"
                          _hover={{ color: "brand.500" }}
                        >
                          {route.title}
                        </Link>
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

            {/* MOBILE MENU */}
            <Box
              display={{ base: "flex", lg: "none" }}
              flex="1"
              justifyContent="end"
            >
              <MobileMenu routes={routes} />
            </Box>
          </Flex>
        </Container>
      </Box>

      {/* MOBILE DRAWER */}
      <MobileDrawer isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default Navbar;
