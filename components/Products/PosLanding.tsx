"use client";

import Link from "next/link";
import {
  FiTrendingUp,
  FiDollarSign,
  FiCheckCircle,
  FiClock,
  FiTarget,
  FiZap,
  FiLayers,
  FiCloud,
  FiRefreshCw,
  FiBarChart,
  FiUsers,
  FiGrid,
  FiFileText,
  FiList,
  FiPackage,
  FiPrinter,
} from "react-icons/fi";
import ProductMonitorFrame from "./ProductMonitorFrame";

function FeatureBlock({
  title,
  body,
  cards,
}: {
  title: string;
  body: string;
  cards: { title: string; body: string; icon: React.ReactNode }[];
}) {
  return (
    <section className="py-8">
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        <div className="rounded-3xl border border-stroke bg-white p-7 shadow-solid-8 dark:border-strokedark dark:bg-blacksection dark:shadow-solid-6 md:p-10">
          <h2 className="mb-4 text-2xl font-bold text-[#0F3FD0] dark:text-[#60A5FA] md:text-3xl">
            {title}
          </h2>
          <p className="mb-10 max-w-3xl text-waterloo dark:text-manatee">{body}</p>
          <div className="grid gap-6 sm:grid-cols-2">
            {cards.map((card) => (
              <div
                key={card.title}
                className="rounded-2xl border border-stroke bg-white p-6 shadow-solid-5 dark:border-strokedark dark:bg-blacksection dark:shadow-solid-6"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  {card.icon}
                </div>
                <h3 className="mb-2 text-lg font-semibold text-black dark:text-white">
                  {card.title}
                </h3>
                <p className="text-waterloo dark:text-manatee">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function DifferenceBlock({
  items,
}: {
  items: { title: string; body: string; icon: React.ReactNode }[];
}) {
  return (
    <section className="py-8">
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        <h2 className="mb-10 text-center text-2xl font-bold text-[#0F3FD0] dark:text-[#60A5FA] md:text-3xl">
          Tired of outdated POS systems? Discover the Acumen POS difference
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-stroke bg-white p-6 text-center shadow-solid-5 dark:border-strokedark dark:bg-blacksection dark:shadow-solid-6"
            >
              <div className="mb-3 flex justify-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  {item.icon}
                </div>
              </div>
              <h3 className="mb-2 font-semibold text-black dark:text-white">
                {item.title}
              </h3>
              <p className="text-sm text-waterloo dark:text-manatee">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AutomationGrid({
  items,
}: {
  items: { title: string; body: string; icon: React.ReactNode }[];
}) {
  return (
    <section className="py-8">
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        <h2 className="mb-10 text-center text-2xl font-bold text-[#0F3FD0] dark:text-[#60A5FA] md:text-3xl">
          Automate your operations under one platform
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-stroke bg-white p-6 shadow-solid-5 dark:border-strokedark dark:bg-blacksection dark:shadow-solid-6"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                {item.icon}
              </div>
              <h3 className="mb-2 font-semibold text-black dark:text-white">
                {item.title}
              </h3>
              <p className="text-sm text-waterloo dark:text-manatee">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function PosLanding() {
  return (
    <>
      {/* Hero - match home hero design */}
      <section className="overflow-hidden pb-12 pt-30">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="rounded-3xl bg-white px-6 py-10 shadow-solid-8 dark:bg-gradient-to-br dark:from-blacksection dark:via-[#111827] dark:to-blackho md:px-10 lg:flex lg:flex-row lg:items-center">
            <div className="w-3/4 text-center lg:w-1/2 lg:text-left">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/5 px-3 py-1 text-xs font-medium text-[#1D4ED8] dark:text-[#60A5FA]">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#22C55E]/60" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#22C55E]" />
                </span>
                <span>Modern cloud POS platform</span>
              </div>
              <h1 className="mb-5 pr-5 text-5xl font-bold leading-tight text-[#0F3FD0] dark:text-[#60A5FA] md:text-5xl xl:text-hero">
                The all-in-one cloud POS: manage everything, everywhere
              </h1>
              <p className="mb-8 w-3/4 mx-auto text-waterloo dark:text-manatee lg:mx-0 lg:w-full">
                Ditch the complexity, embrace simplicity. Our cloud POS makes managing your
                business easy. Multi-channel orders, staff tools, and advanced analytics—all
                in one place, accessible from anywhere.
              </p>

              <div className="flex flex-row items-center mt-4 gap-4 align-center justify-center lg:justify-start">
                <Link
                  href="/contact?intent=demo"
                  className="rounded-full bg-primary px-7.5 py-3 font-medium text-white duration-300 ease-in-out hover:bg-primaryho"
                >
                  Book a demo
                </Link>
                <Link
                  href="/pricing"
                  className="rounded-full border border-stroke bg-white px-7.5 py-3 font-medium text-black duration-300 ease-in-out hover:border-primary dark:border-strokedark dark:bg-blacksection dark:text-white"
                >
                  View pricing
                </Link>
              </div>
            </div>
            <div className="mt-8 animate_right z-1 w-full lg:mt-0 lg:block lg:w-1/2">
              <div className="relative mt-8">
                <ProductMonitorFrame
                  src="/images/Pos-Image.png"
                  alt="Cloud POS - Product search and shopping cart"
                  size="lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rest of POS landing content */}
      <FeatureBlock
        title="Effortless inventory & recipe management"
        body="Streamline operations by optimizing inventory levels, controlling costs, and ensuring consistent quality. Consolidate inventory and standardize product recipes across all channels."
        cards={[
          {
            title: "Efficiency",
            body: "Eliminate manual tasks and streamline operations for a smoother workflow.",
            icon: <FiZap className="h-5 w-5" />,
          },
          {
            title: "Cost control",
            body: "Optimize inventory levels and standardize recipes to control costs and maximize profits.",
            icon: <FiDollarSign className="h-5 w-5" />,
          },
        ]}
      />

      <FeatureBlock
        title="Revenue reconciliation for accurate financials & reduced errors"
        body="Automate reconciliation across all channels, reducing processing time and eliminating errors. Focus on what matters most—growing your business."
        cards={[
          {
            title: "Complete transparency",
            body: "Automated reconciliation ensures accurate transaction matching. Say goodbye to manual errors and potential revenue loss.",
            icon: <FiCheckCircle className="h-5 w-5" />,
          },
          {
            title: "Save time and cost",
            body: "Streamline financial operations, reducing reconciliation times and manual labour costs.",
            icon: <FiClock className="h-5 w-5" />,
          },
        ]}
      />

      <FeatureBlock
        title="One system, endless orders"
        body="Seamlessly integrate with all your ordering channels and manage everything from one central platform. Say goodbye to juggling multiple systems."
        cards={[
          {
            title: "Unified ordering",
            body: "Manage all your orders—online, in-store, and delivery—from one central hub. Integrate seamlessly to eliminate complexity and boost efficiency.",
            icon: <FiLayers className="h-5 w-5" />,
          },
          {
            title: "Save time and cost",
            body: "Save valuable time by eliminating the need to switch between different platforms. Focus on delivering exceptional service.",
            icon: <FiClock className="h-5 w-5" />,
          },
        ]}
      />

      <FeatureBlock
        title="Make smarter decisions, faster with advanced analytics"
        body="Empower your team with actionable insights through easy-to-understand analytics. Improve performance and make data-driven decisions for your business."
        cards={[
          {
            title: "Competitive advantage",
            body: "Stay ahead by leveraging data-driven insights to adapt to market trends and customer preferences effectively.",
            icon: <FiTarget className="h-5 w-5" />,
          },
          {
            title: "Optimize efficiency",
            body: "Streamline operations and reduce manual work with clear reporting and KPIs.",
            icon: <FiTrendingUp className="h-5 w-5" />,
          },
        ]}
      />

      {/* CTA */}
      <section className="py-8">
        <div className="flex justify-center">
          <Link
            href="/contact?intent=demo"
            className="rounded-full bg-primary px-7 py-3 font-medium text-white transition hover:bg-primaryho"
          >
            Book a demo
          </Link>
        </div>
      </section>

      {/* Discover the difference - 4 bullets */}
      <DifferenceBlock
        items={[
          {
            title: "Cloud-based experience",
            body: "Access the POS from the cloud; owners can manage operations from anywhere in the world.",
            icon: <FiCloud className="h-6 w-6" />,
          },
          {
            title: "Real-time sync",
            body: "All your locations and devices stay in sync; updates reflect everywhere instantly.",
            icon: <FiRefreshCw className="h-6 w-6" />,
          },
          {
            title: "Integrated experience",
            body: "Minimize manual tasks and maximize efficiency with our integrated platform.",
            icon: <FiLayers className="h-6 w-6" />,
          },
          {
            title: "Data at your fingertips",
            body: "Gain valuable insights and make informed decisions with all your data readily available.",
            icon: <FiBarChart className="h-6 w-6" />,
          },
        ]}
      />

      {/* Automate under one platform - 4 cards */}
      <AutomationGrid
        items={[
          {
            title: "Customer engagement & growth",
            body: "Reward customers with exclusive discounts and vouchers. Foster lasting relationships and boost your bottom line with engagement tools.",
            icon: <FiUsers className="h-5 w-5" />,
          },
          {
            title: "Integration partners marketplace",
            body: "Pre-integrated services and partners so you spend less time searching and more time running your business.",
            icon: <FiGrid className="h-5 w-5" />,
          },
          {
            title: "Menu management",
            body: "Quickly upload, update, and manage menus across multiple channels in bulk, saving you time and effort.",
            icon: <FiFileText className="h-5 w-5" />,
          },
          {
            title: "On-hold / open order module",
            body: "Guests can add items like appetizers, drinks, and desserts to their orders. Orders remain open until requested for a personalized experience.",
            icon: <FiList className="h-5 w-5" />,
          },
        ]}
      />

      {/* Add Direct Inventory + Branch Devices */}
      <section className="grid gap-8 py-16 sm:grid-cols-2">
        <div className="rounded-2xl border border-stroke bg-white p-6 shadow-solid-5 dark:border-strokedark dark:bg-blacksection dark:shadow-solid-6">
          <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <FiPackage className="h-5 w-5" />
          </div>
          <h3 className="mb-2 text-lg font-semibold text-black dark:text-white">
            Add direct inventory
          </h3>
          <p className="text-waterloo dark:text-manatee">
            Say goodbye to manual data entry. Add inventory items directly to your system,
            saving time and effort.
          </p>
        </div>
        <div className="rounded-2xl border border-stroke bg-white p-6 shadow-solid-5 dark:border-strokedark dark:bg-blacksection dark:shadow-solid-6">
          <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <FiPrinter className="h-5 w-5" />
          </div>
          <h3 className="mb-2 text-lg font-semibold text-black dark:text-white">
            Branch devices
          </h3>
          <p className="text-waterloo dark:text-manatee">
            Eliminate manual printing. The system can print kitchen orders (KOTs) by
            category and station for seamless workflow across your branches.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="pb-20">
        <div className="rounded-3xl bg-gradient-to-br from-[#E0F2FF] via-white to-[#F5E9FF] p-8 text-center shadow-solid-8 dark:from-blacksection dark:via-[#111827] dark:to-blackho lg:p-12">
          <h2 className="mb-4 text-2xl font-semibold text-black dark:text-white">
            Ready to transform your business?
          </h2>
          <p className="mb-8 mx-auto max-w-2xl text-waterloo dark:text-manatee">
            See how our cloud POS can streamline your operations. Book a demo and we&apos;ll
            show you the right setup for your business.
          </p>
          <Link
            href="/contact?intent=demo"
            className="inline-flex rounded-full bg-primary px-7 py-3 font-medium text-white transition hover:bg-primaryho"
          >
            Book a demo
          </Link>
        </div>
      </section>
    </>
  );
}
