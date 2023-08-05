import { FunctionComponent } from "react";

const Header: FunctionComponent = () => {
  return (
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
  );
};

export default Header;
