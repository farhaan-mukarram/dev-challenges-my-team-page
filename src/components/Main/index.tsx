import { FunctionComponent } from "react";

import photo1 from "../../assets/photo1.png";
import photo2 from "../../assets/photo2.png";
import photo3 from "../../assets/photo3.png";
import photo4 from "../../assets/photo4.png";
import photo5 from "../../assets/photo5.png";
import photo6 from "../../assets/photo6.png";

import CrewMemberCard from "../CrewMemberCard";

const crewMembers = [
  { name: "Bill Mahoney", title: "Product Owner", picture: photo1 },
  { name: "Saba Cabrera", title: "Art director", picture: photo2 },
  { name: "Shae Le", title: "Tech Lead", picture: photo3 },
  { name: "Skylah Lu ", title: "UX Designer", picture: photo4 },
  { name: "Griff Richards", title: "Developer", picture: photo5 },
  { name: "Stan John", title: "Developer", picture: photo6 },
];

const Main: FunctionComponent = () => {
  return (
    <main className="grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-16 md:gap-x-10 md:gap-y-20 lg:gap-x-16 lg:gap-y-28 [&>*:nth-child(2n)]:relative [&>*:nth-child(2n)]:lg:static [&>*:nth-child(2n)]:top-24 [&>*:nth-child(3n+2)]:lg:relative [&>*:nth-child(3n+2)]:lg:top-24">
      {crewMembers.map(({ name, title, picture }, idx) => (
        <CrewMemberCard key={idx} name={name} title={title} picture={picture} />
      ))}
    </main>
  );
};

export default Main;
