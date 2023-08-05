import { PropsWithChildren, FunctionComponent } from "react";

const MainWrapper: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen px-5 py-16 space-y-16 md:px-12 lg:px-40 lg:py-28 lg:space-y-28">
      {children}
    </div>
  );
};

export default MainWrapper;
