"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FiMapPin,
  FiUsers,
  FiCheckCircle,
  FiClock,
  FiNavigation,
  FiActivity,
  FiSmartphone,
  FiBarChart2,
  FiTarget,
  FiShield,
  FiTrendingUp,
  FiLayers,
} from "react-icons/fi";

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

export default function AremLanding() {
  return (
    <>
      <section className="overflow-hidden pb-12 pt-30">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="rounded-3xl bg-white px-6 py-10 shadow-solid-8 dark:bg-gradient-to-br dark:from-blacksection dark:via-[#111827] dark:to-blackho md:px-10 lg:flex lg:flex-row lg:items-start">
            <div className="w-3/4 text-center lg:w-1/2 lg:text-left">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/5 px-3 py-1 text-xs font-medium text-[#1D4ED8] dark:text-[#60A5FA]">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#22C55E]/60" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#22C55E]" />
                </span>
                <span>AREM - Employee Tracking System</span>
              </div>
              <h1 className="mb-5 pr-5 text-5xl font-bold leading-tight text-[#0F3FD0] dark:text-[#60A5FA] md:text-5xl xl:text-hero">
                Track and manage your field staff in real time
              </h1>
              <p className="mb-8 w-3/4 mx-auto text-waterloo dark:text-manatee lg:mx-0 lg:w-full">
                AREM helps teams monitor attendance, assign dynamic field tasks, track
                mileage, and get complete visibility across daily on-ground operations.
              </p>
              <div className="flex flex-row items-center mt-4 gap-4 align-center justify-center lg:justify-start">
                <Link
                  href="/contact?intent=demo"
                  className="rounded-full bg-primary px-7.5 py-3 font-medium text-white duration-300 ease-in-out hover:bg-primaryho"
                >
                  Book AREM demo
                </Link>
              </div>
            </div>
            <div className="z-1 w-full lg:mt-0 lg:block lg:w-1/2">
              <div className="relative overflow-hidden rounded-2xl border border-stroke bg-white p-3 shadow-solid-5 dark:border-strokedark dark:bg-blacksection">
                <Image
                  src="/images/arem.jpeg"
                  alt="AREM employee tracking dashboard"
                  width={900}
                  height={1200}
                  className="h-auto w-full rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8">
        <p className="text-center text-xl font-semibold text-black dark:text-white md:text-2xl">
          Built for field teams handling order taking, meetings, and location-based tasks
        </p>
      </section>

      <FeatureBlock
        title="Smarter field execution, day after day"
        body="Plan work, assign responsibilities, and keep every visit documented with geo-tagged proof and outcomes."
        cards={[
          {
            title: "Live field visibility",
            body: "See where each team member is and track progress in real time.",
            icon: <FiMapPin className="h-5 w-5" />,
          },
          {
            title: "Dynamic task assignment",
            body: "Assign and reassign tasks instantly based on location and workload.",
            icon: <FiUsers className="h-5 w-5" />,
          },
        ]}
      />

      <FeatureBlock
        title="Attendance, meetings, and compliance in one flow"
        body="Remove manual updates and keep attendance, check-ins, and visit outcomes synchronized for managers."
        cards={[
          {
            title: "Smart attendance",
            body: "Capture check-ins and attendance directly from field activity.",
            icon: <FiCheckCircle className="h-5 w-5" />,
          },
          {
            title: "Meeting tracking",
            body: "Log client meetings with timestamps and location for accountability.",
            icon: <FiClock className="h-5 w-5" />,
          },
        ]}
      />

      <FeatureBlock
        title="Route intelligence and mobility support"
        body="Help teams move efficiently while keeping every route and movement connected to task completion."
        cards={[
          {
            title: "Google Maps integration",
            body: "Route guidance and geo-context built into day-to-day execution.",
            icon: <FiNavigation className="h-5 w-5" />,
          },
          {
            title: "Online/offline continuity",
            body: "Teams stay productive even in low-connectivity areas.",
            icon: <FiSmartphone className="h-5 w-5" />,
          },
        ]}
      />

      <section className="py-8">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <h2 className="mb-10 text-center text-2xl font-bold text-[#0F3FD0] dark:text-[#60A5FA] md:text-3xl">
            Why teams choose AREM
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Reliable tracking", body: "Accurate employee location and task visibility.", icon: <FiActivity className="h-6 w-6" /> },
              { title: "Process discipline", body: "Standardized attendance, meetings, and routes.", icon: <FiShield className="h-6 w-6" /> },
              { title: "Actionable analytics", body: "Web-based insights to improve field performance.", icon: <FiBarChart2 className="h-6 w-6" /> },
              { title: "Growth-ready", body: "Scale operations across regions and teams with confidence.", icon: <FiTrendingUp className="h-6 w-6" /> },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-stroke bg-white p-6 text-center shadow-solid-5 dark:border-strokedark dark:bg-blacksection dark:shadow-solid-6"
              >
                <div className="mb-3 flex justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    {item.icon}
                  </div>
                </div>
                <h3 className="mb-2 font-semibold text-black dark:text-white">{item.title}</h3>
                <p className="text-sm text-waterloo dark:text-manatee">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <h2 className="mb-10 text-center text-2xl font-bold text-[#0F3FD0] dark:text-[#60A5FA] md:text-3xl">
            AREM core modules
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Staff tracking", body: "Live map-based employee monitoring.", icon: <FiMapPin className="h-5 w-5" /> },
              { title: "Task engine", body: "Assign, update, and verify task completion.", icon: <FiTarget className="h-5 w-5" /> },
              { title: "Meeting management", body: "Capture visit details with outcomes.", icon: <FiLayers className="h-5 w-5" /> },
              { title: "Performance analytics", body: "Monitor coverage, productivity, and trends.", icon: <FiBarChart2 className="h-5 w-5" /> },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-stroke bg-white p-6 shadow-solid-5 dark:border-strokedark dark:bg-blacksection dark:shadow-solid-6"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  {item.icon}
                </div>
                <h3 className="mb-2 font-semibold text-black dark:text-white">{item.title}</h3>
                <p className="text-sm text-waterloo dark:text-manatee">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20 mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        <div className="rounded-3xl bg-gradient-to-br from-[#E0F2FF] via-white to-[#F5E9FF] p-8 text-center shadow-solid-8 dark:from-blacksection dark:via-[#111827] dark:to-blackho lg:p-12">
          <h2 className="mb-4 text-2xl font-semibold text-black dark:text-white">
            Ready to transform field operations with AREM?
          </h2>
          <p className="mb-8 mx-auto max-w-2xl text-waterloo dark:text-manatee">
            See how AREM can improve attendance, task execution, and team visibility for
            your field operations.
          </p>
          <Link
            href="/contact?intent=demo"
            className="inline-flex rounded-full bg-primary px-7 py-3 font-medium text-white transition hover:bg-primaryho"
          >
            Book AREM demo
          </Link>
        </div>
      </section>
    </>
  );
}

