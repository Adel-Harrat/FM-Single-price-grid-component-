import "./App.css";

const App = () => {
  return (
    <div className="bg-neutral-gray min-h-screen px-5 grid place-items-center font-primary">
      <main className="rounded-md shadow-lg overflow-hidden md:max-w-2xl md:grid md:grid-cols-2">
        <section className="p-5 bg-white md:col-span-2">
          <h1 className="font-bold text-2xl text-primary-cyan">
            Join our community
          </h1>

          <h2 className="font-bold text-primary-yellow mt-5">
            30-day, hassle-free money back guarantee
          </h2>

          <p className="mt-5 text-neutral-blue mb-5">
            Gain access to our full library of tutorials along with expert code
            reviews. Perfect for any developers who are serious about honing
            their skills.
          </p>
        </section>

        <section className="p-5 bg-primary-cyan">
          <h1 className="font-bold text-2xl text-white">
            Monthly Subscription
          </h1>

          <p className="mt-3 text-[2.5rem] font-white font-bold text-white flex items-center">
            $29
            <span className="text-base font-thin pl-3 text-white/50">
              per month
            </span>
          </p>

          <p className="text-neutral-gray">
            Full access for less than &dollar;1 a day
          </p>

          <button className="mt-8 bg-primary-yellow text-white w-full rounded-md shadow-lg py-2.5">
            Sign Up
          </button>
        </section>

        <section className="p-5 bg-extra-cyan">
          <h1 className="font-bold text-2xl text-white">Why Us</h1>

          <p className="mt-5 text-neutral-gray">
            Tutorials by industry experts Peer &amp; expert code review Coding
            exercises Access to our GitHub repos Community forum Flashcard decks
            New videos every weeks
          </p>
        </section>
      </main>
    </div>
  );
};

export default App;
