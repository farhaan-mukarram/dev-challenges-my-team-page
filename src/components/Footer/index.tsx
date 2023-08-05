import { FunctionComponent } from "react";

const Footer: FunctionComponent = () => {
  return (
    <footer className="px-5 mt-24 mb-6 lg:px-40">
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
  );
};

export default Footer;
