const App = () => {
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
        <div className="grid grid-cols-3 gap-x-16 gap-y-28 [&>*:nth-child(3n+2)]:bg-red-500 [&>*:nth-child(3n+2)]:mt-5">
          {Array.from({ length: 6 }, (v, i) => i).map((idx) => (
            <div key={idx} className="bg-purple-500 h-[264px]"></div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default App;
