import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    newTab: false,
    path: "/",
  },
  {
    id: 2,
    title: "Products",
    newTab: false,
    submenu: [
      {
        id: 2.1,
        title: "Modern POS",
        newTab: false,
        path: "/products/pos-rms",
      },
      {
        id: 2.2,
        title: "Online Ordering System",
        newTab: false,
        path: "/products/online-ordering",
      },
      {
        id: 2.3,
        title: "Employee Tracking System",
        newTab: false,
        path: "/products/fleet-management",
      },
      {
        id: 2.4,
        title: "Loyalty & Engagement",
        newTab: false,
        path: "/products/loyalty",
      },
      {
        id: 2.5,
        title: "Advanced Data & Analytics",
        newTab: false,
        path: "/products/analytics",
      },
    ],
  },
  {
    id: 3,
    title: "Pricing",
    newTab: false,
    path: "/pricing",
  },
  {
    id: 4,
    title: "Company",
    newTab: false,
    submenu: [
      {
        id: 5.1,
        title: "About Us",
        newTab: false,
        path: "/about",
      },
      {
        id: 5.2,
        title: "Contact",
        newTab: false,
        path: "/contact",
      },
    ],
  },
];

export default menuData;
