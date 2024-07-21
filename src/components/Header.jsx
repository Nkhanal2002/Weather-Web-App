const Header = () => {
  return (
    <header className="bg-slate-100 shadow-md text-center p-2 font-serif fixed top-0 w-full z-10">
      <nav className="flex items-center justify-center gap-1">
        <div>
          <img
            className="w-[2.2rem] sm:w-[3rem] rounded-lg mt-1"
            src="/weatherAppLogo.png"
            alt="WeatherAppLogo"
          />
        </div>
        <h1 className="font-bold text-2xl sm:text-4xl">
          Weather&nbsp;
          <span className=" text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
            App
          </span>
        </h1>
      </nav>
    </header>
  );
};

export default Header;
