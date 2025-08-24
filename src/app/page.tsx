import Link from "next/link";
import "./style.css";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="welcome">
        <div className="mb-20 flex items-center justify-center flex-col gap-4 w-4xl">
          <h1 className="text-center text-7xl font-black">
            Welcome to FLA Roadrunners
          </h1>
          <h2 className="text-center text-xl w-2xl opacity-75 font-medium">
            A true professional travel baseball program with coaches that played
            at high levels and know how to coach at the youth levels
          </h2>
        </div>
      </section>

      <section className="py-24 flex items-center justify-center">
        <div className="flex rounded-3xl overflow-hidden bg-neutral-800">
          <div className="p-12 flex flex-col justify-between items-start min-h-80">
            <div className="flex flex-col gap-4 w-90">
              <h1 className="text-4xl font-semibold">Meet Our Coaches</h1>

              <p className="">
                Our coaching staff combines decades of baseball knowledge with
                real-game experience. They teach fundamentals and advanced
                skills. Get to know them and see why they’re the heart of our
                team!
              </p>
            </div>

            <Link
              href="/about"
              className="leading-none font-bold text-center text-sm rounded-md px-4 py-2 bg-pink-600 transition hover:bg-pink-500"
            >
              Learn More About Us
            </Link>
          </div>

          <Image
            src="/COACHES.png"
            alt="Our coaches"
            width={564}
            height={409}
            className="h-92 w-auto object-cover"
          />
        </div>
      </section>
    </>
  );
}
