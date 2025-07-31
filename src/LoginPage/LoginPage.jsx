"use client";
import { BackgroundPattern } from "./BackgroundPattern";
import { LoginForm } from "./LoginForm";

export const LoginPage = () => {
  return (
    <main className="overflow-hidden relative w-screen h-screen bg-white max-md:flex-col max-md:items-center max-md:p-5">
      <header>
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/6399389708148522343c48d179c8fa617dafe67d?width=76"
          alt="Company Logo"
          className="absolute top-10 left-12 z-10 h-[37px] w-[38px] max-md:top-5 max-md:left-5 max-sm:h-[29px] max-sm:w-[30px]"
        />
      </header>

      <BackgroundPattern />
      <LoginForm />
    </main>
  );
};
