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
    <div className="flex flex-col px-60 py-28">
      <div className="flex items-start">
        <p className="text-4xl font-bold basis-full">The creative crew</p>

        <div className="flex flex-col basis-auto">
          <p className="text-lg font-semibold">WHO WE ARE</p>
          <p className="text-lg font-normal">
            We are team of creatively diverse. driven. innovative individuals
            working in various locations from the world.
          </p>
        </div>
      </div>

      <main>
        {/*  
        
        <div className="grid grid-cols-3 gap-x-16 gap-y-28 [&>*:nth-child(3n+2)]:bg-red-500 [&>*:nth-child(3n+2)]:mt-5">
        */}
        <div className="grid grid-cols-3 gap-x-16 gap-y-28">
          {crewMembers.map(({ name, title, picture }, idx) => (
            <figure
              key={idx}
              className="relative flex flex-col space-y-4 bg-purple-500"
            >
              <figure className="flex items-start space-x-3">
                <img src={picture} alt={`${name}'s photo`} />
                <figcaption className="writing-vertical-lr">{title}</figcaption>
              </figure>

              <figcaption>{name}</figcaption>
            </figure>
          ))}
        </div>
      </main>
    </div>
  );
};

export default App;
