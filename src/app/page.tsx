import "./style.css";

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
    </>
  );
}
