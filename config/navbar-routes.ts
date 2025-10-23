import { Route } from "@/types";

export const navbarRoutes: Route[] = [
  {
    title: "Services",
    path: "/Services", // tidak perlu ke halaman langsung
    children: [
      { title: "Testnet", path: "/service/network" },
      { title: "Mainnet", path: "/service/tools" },
    ],
  },
  {
    title: "Explorer",
    path: "/blog",
  },
];
