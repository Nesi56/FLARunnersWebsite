import Link from "next/link";
import "./style.css";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="welcome">
        <div className="mb-20 flex items-center justify-center flex-col gap-4 md:w-4xl p-6">
          <h1 className="text-center max-w-lg md:max-w-3xl text-5xl sm:text-6xl md:text-7xl font-black">
            Welcome to FLA Roadrunners!
          </h1>
          <div className="opacity-75">
            <h2 className="text-center text-xl max-w-md sm:max-w-lg md:max-w-2xl font-medium">
              A true professional travel baseball program with coaches that
              played at high levels and know how to coach at the youth levels
            </h2>
          </div>
        </div>
      </section>

      <section className="lg:py-24 flex items-center justify-center">
        <div className="w-[100vw] lg:w-auto lg:rounded-3xl overflow-hidden bg-neutral-800 flex md:flex-row">
          <div className="p-12 flex flex-col justify-between items-start min-h-80 md:w-[50vw] lg:w-auto gap-16">
            <div className="flex flex-col gap-4 max-w-140 md:max-w-90">
              <h1 className="text-5xl md:text-3xl lg:text-4xl font-semibold">
                Meet Our Coaches!
              </h1>

              <p className="text-lg md:text-base opacity-85">
                Our coaching staff combines decades of baseball knowledge with
                real-game experience. They teach fundamentals and advanced
                skills. Get to know them and see why they’re the heart of our
                team!
              </p>
            </div>

            <Link
              href="/about"
              className="leading-none font-bold text-center rounded-md px-4 py-3 bg-pink-600 transition hover:bg-pink-500"
            >
              Learn More About Us
            </Link>
          </div>

          <Image
            src="/COACHES.png"
            alt="Our coaches"
            width={564}
            height={409}
            className="min-h-92 object-cover object-center hidden md:block w-[50vw] lg:w-[30rem]"
          />
        </div>
      </section>
    </>
  );
}
