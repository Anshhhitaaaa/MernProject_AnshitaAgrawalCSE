"use client";

export const Header = ({ onBackClick }) => {
  return (
    <header className="box-border flex relative justify-between items-center px-12 py-0 w-full bg-indigo-400 rounded-none h-[105px] max-md:flex-col max-md:p-5 max-md:h-auto max-sm:p-4">
      <div className="flex items-center gap-4">
        <button 
          onClick={onBackClick}
          className="flex items-center gap-2 text-white hover:text-indigo-200 transition-colors duration-200"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="text-lg">Back</span>
        </button>
        <h1 className="text-4xl text-white max-sm:text-3xl">
          UpgenZ
        </h1>
      </div>
      <nav className="absolute text-2xl text-white left-[275px] max-md:static max-md:mx-0 max-md:my-2.5 max-sm:text-lg">
        Explore
      </nav>
      <nav className="absolute text-2xl text-white left-[377px] max-md:static max-md:mx-0 max-md:my-2.5 max-sm:text-lg">
        Challenges
      </nav>
      <div className="flex gap-4 items-center px-5 py-4 bg-purple-400 shadow-sm rounded-[30px] max-md:flex-wrap max-md:gap-2.5 max-md:mt-5 max-sm:hidden">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/af91af29be4065d211d28c2c727bf8e92b4117c5?width=68"
          alt=""
          className="h-[34px] w-[34px]"
        />
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/fc47bdd8e56f19e7fe7bef8051f5f2448eba9332?width=80"
          alt=""
          className="w-10 h-10"
        />
        <button className="px-8 py-2.5 bg-fuchsia-300 shadow-sm rounded-[30px]">
          <span className="text-2xl text-white">
            Log In
          </span>
        </button>
        <button className="px-6 py-2 bg-fuchsia-300 shadow-sm rounded-[30px]">
          <span className="text-2xl text-white">
            Sign Up
          </span>
        </button>
      </div>
    </header>
  );
};
