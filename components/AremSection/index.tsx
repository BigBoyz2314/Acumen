import Link from "next/link";
import Image from "next/image";
const aremFeatures = [
  "Field staff tracking",
  "Smart attendance",
  "Dynamic task assignment",
  "Google Maps integration",
  "Automated mileage and fuel tracking",
  "Seamless online/offline mode",
  "Meeting management",
  "Web-based analytics",
];

const AremSection = () => {
  return (
    <section className="py-8">
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        <div className="rounded-3xl border border-stroke bg-white p-7 shadow-solid-8 dark:bg-blacksection dark:shadow-solid-6 md:p-10">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-primary">
                AREM - Employee Tracking System
              </p>
              <h2 className="mb-4 text-2xl font-bold text-[#0F3FD0] dark:text-[#60A5FA] md:text-3xl">
                Track and manage your field staff in real time
              </h2>
              <p className="mb-6 text-waterloo dark:text-manatee">
                AREM helps teams assign tasks, monitor attendance, track movement, and
                keep field operations fully visible from one cloud dashboard.
              </p>
              <div className="grid gap-2 sm:grid-cols-2">
                {aremFeatures.map((feature) => (
                  <div key={feature} className="flex items-center gap-2 text-sm text-black dark:text-white">
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary">
                      ✓
                    </span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact?intent=demo"
                  className="rounded-full bg-primary px-7.5 py-3 font-medium text-white duration-300 ease-in-out hover:bg-primaryho"
                >
                  Book AREM demo
                </Link>
                <Link
                  href="/products/fleet-management"
                  className="rounded-full border border-stroke bg-white px-7.5 py-3 font-medium text-black duration-300 ease-in-out hover:border-primary dark:border-strokedark dark:bg-blacksection dark:text-white"
                >
                  Learn more
                </Link>
              </div>
            </div>

            <div className="rounded-2xl border border-stroke bg-white/80 p-6 shadow-solid-5 dark:border-strokedark dark:bg-blacksection/80 dark:shadow-solid-6">
              <h3 className="mb-3 text-lg font-semibold text-[#0F3FD0] dark:text-[#60A5FA]">
                AREM dashboard
              </h3>
              <div className="overflow-hidden rounded-xl border border-primary/20 bg-primary/5 p-3 dark:bg-primary/10">
                <Image
                  src="/images/arem.jpeg"
                  alt="AREM employee tracking dashboard"
                  width={900}
                  height={1200}
                  className="h-auto w-full rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AremSection;
