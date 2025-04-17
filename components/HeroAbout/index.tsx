"use client";
import Image from "next/image";

const HeroAbout = () => {
  return (
    <>
      <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-35">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className="md:w-1/2">
              <h1 className="mb-5 pr-5 text-3xl font-bold text-black dark:text-white xl:text-hero">
                About{"   "}
                <span className="relative me-2 inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark">
                  Us
                </span>
              </h1>
              <p className="mb-4 text-lg leading-relaxed text-body-color dark:text-body-color-dark">
                At Acumen Technologies, we are passionate about delivering innovative digital solutions that drive business growth and transformation.
              </p>
              <p className="mb-4 text-lg leading-relaxed text-body-color dark:text-body-color-dark">
                Established in 2004, we have been at the forefront of technological innovation for nearly two decades. Our journey began with a vision to empower businesses with cutting-edge technology solutions.
              </p>
              <p className="mb-8 text-lg leading-relaxed text-body-color dark:text-body-color-dark">
                Today, we continue to build on our legacy of excellence, helping organizations navigate the complexities of the digital landscape with confidence and success.
              </p>
            </div>
            <div className="z-1 md:w-1/2 lg:block">
              <div className="relative 2xl:-mr-7.5">
                <Image
                  src="/images/shape/shape-01.png"
                  alt="shape"
                  width={46}
                  height={246}
                  className="absolute left-30 top-0"
                />
                <Image
                  src="/images/shape/shape-02.svg"
                  alt="shape"
                  width={36.9}
                  height={36.7}
                  className="absolute bottom-0 right-12 z-10"
                />
                <Image
                  src="/images/shape/shape-03.svg"
                  alt="shape"
                  width={21.64}
                  height={21.66}
                  className="absolute right-5 bottom-0 z-1"
                />
                <div className="relative z-0 aspect-[700/444] w-full">
                  <Image
                    className="object-contain dark:hidden"
                    src="/images/about/about1.svg"
                    alt="About Acumen Technologies"
                    fill
                  />
                  <Image
                    className="hidden object-contain dark:block"
                    src="/images/about/about1.svg"
                    alt="About Acumen Technologies"
                    fill
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroAbout;
