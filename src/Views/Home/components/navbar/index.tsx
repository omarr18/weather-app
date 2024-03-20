
export default function Navbar({
  isCelsius,
  changeDegreeType,
}: {
  isCelsius: boolean;
  changeDegreeType: () => void;
}) {
  const activeClass = "bg-white bg-opacity-25 border-l-2 border-white";
  return (
    <div className="w-[90%] mb-[20%] lg:mb-[8%] m mx-auto flex items-center justify-between">
      <h1 className=" text-xl md:text-2xl  lg:text-4xl text-white font-bold">
        INSTAWEATHER
      </h1>
      <div className="flex">
        <p
          onClick={isCelsius? undefined:changeDegreeType}
          className={`px-4 lg:px-[30px] py-1.5 lg:py-2.5 text-lg lg:text-2xl font-medium cursor-pointer ${
            isCelsius ? activeClass : ""
          }`}
        >
          C
        </p>
        <p
          onClick={isCelsius?changeDegreeType: undefined}
          className={`px-4 lg:px-[30px] py-1.5 lg:py-2.5 text-lg lg:text-2xl font-medium cursor-pointer ${
            isCelsius ? "" : activeClass
          } `}
        >
          F
        </p>
      </div>
    </div>
  );
}
