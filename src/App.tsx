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
      <div className="flex flex-col min-h-screen px-5 py-16 space-y-16 md:px-12 lg:px-40 lg:py-28 lg:space-y-28">
        <div className="flex flex-col items-start space-y-9 lg:space-y-0 lg:flex-row">
          <p className="text-4xl font-bold basis-full font-pt-serif">
            The creative crew
          </p>

          <div className="flex flex-col space-y-3 basis-auto">
            <p className="text-lg font-semibold">WHO WE ARE</p>
            <p className="md:text-lg text-[0.875rem] font-normal">
              We are team of creatively diverse. driven. innovative individuals
              working in various locations from the world.
            </p>
          </div>
        </div>
        <main className="grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-16 md:gap-x-10 md:gap-y-20 lg:gap-x-16 lg:gap-y-28 [&>*:nth-child(even)]:mt-24 [&>*:nth-child(3n+2)]:lg:mt-24">
          {crewMembers.map(({ name, title, picture }, idx) => (
            <figure key={idx} className="flex flex-col space-y-4">
              <figure className="flex items-start space-x-2 lg:space-x-3">
                <img
                  src={picture}
                  alt={`${name}'s photo`}
                  className="max-w-[87%]"
                />

                <figcaption className="text-[0.625rem] md:text-xs font-normal uppercase writing-vertical-lr font-pt-serif">
                  {title}
                </figcaption>
              </figure>

              <figcaption className="text-[0.875rem] md:text-lg font-semibold">
                {name}
              </figcaption>
            </figure>
          ))}
        </main>
      </div>

      <footer className="px-5 mb-6 lg:px-40">
        <p className="font-medium text-center text-[#BDBDBD]">
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
