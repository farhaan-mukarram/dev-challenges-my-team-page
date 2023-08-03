import photo1 from "./assets/photo1.png";
import photo2 from "./assets/photo2.png";
import photo3 from "./assets/photo3.png";
import photo4 from "./assets/photo4.png";
import photo5 from "./assets/photo5.png";
import photo6 from "./assets/photo6.png";

const App = () => {
  const crewMembers = [
    { name: "Bill Mahoney", title: "Product Owner", picture: photo1 },
    { name: "Saba Cabrera", title: "Art director", picture: photo2 },
    { name: "Shae Le", title: "Tech Lead", picture: photo3 },
    { name: "Skylah Lu ", title: "UX Designer", picture: photo4 },
    { name: "Griff Richards", title: "Developer", picture: photo5 },
    { name: "Stan John", title: "Developer", picture: photo6 },
  ];

  return (
    <div className="mx-auto max-w-7xl">
      <div className="flex flex-col min-h-screen px-40 py-28 space-y-28">
        <div className="flex items-start">
          <p className="text-4xl font-bold basis-full font-pt-serif">
            The creative crew
          </p>

          <div className="flex flex-col basis-auto">
            <p className="text-lg font-semibold">WHO WE ARE</p>
            <p className="text-lg font-normal">
              We are team of creatively diverse. driven. innovative individuals
              working in various locations from the world.
            </p>
          </div>
        </div>

        <main className="grid grid-cols-3 gap-x-16 gap-y-28 [&>*:nth-child(3n+2)]:mt-24">
          {crewMembers.map(({ name, title, picture }, idx) => (
            <figure key={idx} className="flex flex-col space-y-4">
              <figure className="flex items-start space-x-3">
                <img
                  src={picture}
                  alt={`${name}'s photo`}
                  className="max-w-[87%]"
                />

                <figcaption className="text-xs font-normal uppercase writing-vertical-lr font-pt-serif">
                  {title}
                </figcaption>
              </figure>

              <figcaption className="text-lg font-semibold">{name}</figcaption>
            </figure>
          ))}
        </main>
      </div>

      <footer className="mb-6">
        <p className="font-medium text-center font-montserrat text-[#BDBDBD]">
          created by{" "}
          <span className="font-bold">
            <a
              href="https://github.com/farhaan-mukarram/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              farhaan-mukarram
            </a>
          </span>
          {" - "}
          <a
            href="https://devchallenges.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            devChallenges.io
          </a>
        </p>
      </footer>
    </div>
  );
};

export default App;
