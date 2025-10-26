import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { theme } from "@/config";
import { Navbar } from "@/components/navbar";
import { navbarRoutes } from "@/config/navbar-routes";
import "@/styles/globals.css";

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  
  // Cek apakah halaman membutuhkan navbar
  const showNavbar = router.pathname.startsWith("/services/testnet/");

  return (
    <ChakraProvider theme={theme}>
      {/* Navbar persistent untuk halaman empeiria & symphony */}
      {showNavbar && <Navbar routes={navbarRoutes} />}
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default App;