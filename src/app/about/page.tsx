import Image from "next/image";

export default function About() {
  return (
    <>
      <section className="p-12">
        <h1 className="text-4xl sm:text-5xl font-semibold">
          Meet Our Coaches!
        </h1>
      </section>
      <section className="px-12 pb-12">
        <ul className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          <li className="bg-neutral-800 rounded-xl flex flex-col md:flex-row overflow-hidden ">
            <Image
              src="/COACHES.png"
              alt="Our coaches"
              width={250}
              height={250}
              className="object-cover object-center min-h-48 w-full md:w-64 h-82 md:h-full"
            />

            <div className="flex flex-col gap-4 p-8">
              <div className="font-semibold text-2xl">Coach Jake Torres</div>
              <p>
                Coach Jake Torres played with the Parkland Pokers from age
                8-14yrs old then when on to play HS at St. John Paul II Academy
                in Boca Raton where he played 4 years and was lettered as a
                freshman. During the summer he played with PRIMAL 9 and
                eventually committed as a 2-way to a D2 in NY then transferred
                to St. Petersburg College, FL and finishing at Union University.
                Jake is now pursuing his masters at FAU and coaching young
                players to become the best version of themselves while having
                fun.
              </p>
            </div>
          </li>

          <li className="bg-neutral-800 rounded-xl flex flex-col md:flex-row overflow-hidden ">
            <Image
              src="/COACHES.png"
              alt="Our coaches"
              width={250}
              height={250}
              className="object-cover object-center min-h-48 w-full md:w-64 h-82 md:h-full"
            />

            <div className="flex flex-col gap-4 p-8">
              <div className="font-semibold text-2xl">Coach Tyler Durland</div>
              <p>
                Coach Tyler Durland played with the Coconut Creek Hawks then the
                Falcons from age 8-14. He went on to play at St. John Paul Il
                Academy in Boca Raton where he played 4 years. During the summer
                he played with PRIMAL 9 and eventually committed to Loyola
                University NOLA as an outfielder. Tyler graduated with his
                Bachelors in Finance. Tyler wants to have an impact in the youth
                baseball community so players learn how to play at a higher
                level while enjoying the process.
              </p>
            </div>
          </li>

          <li className="bg-neutral-800 rounded-xl flex flex-col md:flex-row overflow-hidden ">
            <Image
              src="/COACHES.png"
              alt="Our coaches"
              width={250}
              height={250}
              className="object-cover object-center min-h-48 w-full md:w-64 h-82 md:h-full"
            />

            <div className="flex flex-col gap-4 p-8">
              <div className="font-semibold text-2xl">Coach Stefano Libio</div>
              <p>
                Coach Stefano Libio played with the Tamarac Titans from age 8-14
                yrs old then went on to play four years of HS at Taravella HS in
                Coral Springs, FL. During the summer he played with FUBU and
                then PRIMAL 9. Stefano eventually committed to D2 Dominican
                University, NY as an INF and earning his Masters in
                Communication. Coach Stef wants nothing more that to contribute
                to the game by showing the youth of today how to do things the
                right way and to reach their ultimate potential.
              </p>
            </div>
          </li>

          <li className="bg-neutral-800 rounded-xl flex flex-col md:flex-row overflow-hidden ">
            <Image
              src="/COACHES.png"
              alt="Our coaches"
              width={250}
              height={250}
              className="object-cover object-center min-h-48 w-full md:w-64 h-82 md:h-full"
            />

            <div className="flex flex-col gap-4 p-8">
              <div className="font-semibold text-2xl">Coach David Torres</div>
              <p>
                Coach David Torres played 18 years and was a 4 sport athlete.
                He's been coaching Travel Baseball for 15yrs and eventually
                started the PRIMAL 9 summer program in 2017 where he has helped
                guide over 125+ players into college with college scholarships.
                He believes strongly that a good foundation has to be set early
                and the biggest development is between 12-14yrs old eventually
                going to the 60/90 field and into HS. Known to be firm but
                always eager to help the growth of his players.
              </p>
            </div>
          </li>
        </ul>
      </section>
    </>
  );
}
