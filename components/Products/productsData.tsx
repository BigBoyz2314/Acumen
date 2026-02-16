"use client";

export type ProductCard = {
  title: string;
  description: string;
  href: string;
  icon: string; // inline SVG
};

export const productsData: ProductCard[] = [
  {
    title: "Modern POS",
    description:
      "A cloud-based POS built for speed, control, and multi-branch operations.",
    href: "/products/pos-rms",
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 6.5C4 5.11929 5.11929 4 6.5 4H17.5C18.8807 4 20 5.11929 20 6.5V17.5C20 18.8807 18.8807 20 17.5 20H6.5C5.11929 20 4 18.8807 4 17.5V6.5Z" stroke="currentColor" stroke-width="1.5"/><path d="M7 9H17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M7 12H14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M7 15H11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`,
  },
  {
    title: "Online Ordering System",
    description:
      "Website ordering (and optional apps) for seamless pickup/delivery, with real-time menu and order sync.",
    href: "/products/online-ordering",
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 7.5C4 6.11929 5.11929 5 6.5 5H17.5C18.8807 5 20 6.11929 20 7.5V16.5C20 17.8807 18.8807 19 17.5 19H6.5C5.11929 19 4 17.8807 4 16.5V7.5Z" stroke="currentColor" stroke-width="1.5"/><path d="M8 22H16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M9 8.5H15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M9 12H13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`,
  },
  {
    title: "Employee Tracking System",
    description:
      "Track field employees in real time as they visit customers for order taking, sales, and meetings, with location-aware tasks.",
    href: "/products/fleet-management",
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 7.5C3 6.11929 4.11929 5 5.5 5H13V17H5.5C4.11929 17 3 15.8807 3 14.5V7.5Z" stroke="currentColor" stroke-width="1.5"/><path d="M13 9H17.2C17.7627 9 18.2868 9.2812 18.6 9.75L20.4 12.45C20.7284 12.9426 20.9036 13.5216 20.9036 14.1125V15.5C20.9036 16.3284 20.232 17 19.4036 17H13V9Z" stroke="currentColor" stroke-width="1.5"/><path d="M7 19.5C8.10457 19.5 9 18.6046 9 17.5C9 16.3954 8.10457 15.5 7 15.5C5.89543 15.5 5 16.3954 5 17.5C5 18.6046 5.89543 19.5 7 19.5Z" stroke="currentColor" stroke-width="1.5"/><path d="M17 19.5C18.1046 19.5 19 18.6046 19 17.5C19 16.3954 18.1046 15.5 17 15.5C15.8954 15.5 15 16.3954 15 17.5C15 18.6046 15.8954 19.5 17 19.5Z" stroke="currentColor" stroke-width="1.5"/></svg>`,
  },
  {
    title: "Loyalty & Engagement",
    description:
      "Rewards, offers, and customer engagement tools to drive retention and repeat orders across channels.",
    href: "/products/loyalty",
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 21s-7-4.35-9.2-8.6C1.4 9.5 2.9 6.8 5.7 6.1c1.8-.4 3.5.3 4.6 1.5 1.1-1.2 2.8-1.9 4.6-1.5 2.8.7 4.3 3.4 2.9 6.3C19 16.65 12 21 12 21Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>`,
  },
  {
    title: "Advanced Data & Analytics",
    description:
      "Dashboards and reporting to understand sales, peak hours, top items, and customer behavior—across stores.",
    href: "/products/analytics",
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 19V5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M4 19H20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M8 15V11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M12 15V8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M16 15V10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`,
  },
];

