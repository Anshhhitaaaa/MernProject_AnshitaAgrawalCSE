"use client";
import { useState } from "react";
import { InputField } from "./InputField";
import { SocialLoginButtons } from "./SocialLoginButtons";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login attempt:", { email, password });
  };

  return (
    <section className="absolute right-[233px] top-[207px] w-[586px] max-md:relative max-md:top-auto max-md:right-auto max-md:w-full max-md:max-w-[500px]">
      <header>
        <h1 className="mb-12 text-6xl text-left text-black max-md:mb-8 max-md:text-5xl max-md:text-center max-sm:text-4xl">
          Login
        </h1>
      </header>

      <form onSubmit={handleSubmit}>
        <InputField
          label="Email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
        />

        <div className="mb-10">
          <InputField
            label="Password"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            className="mb-5"
          />
          <button
            type="button"
            className="mt-5 text-2xl text-right text-indigo-400 max-sm:text-xl hover:underline w-full text-right"
          >
            Forgot Password?
          </button>
        </div>

        <button
          type="submit"
          className="flex justify-center items-center mx-0 my-10 h-16 bg-fuchsia-300 rounded-2xl border border-indigo-400 border-solid shadow-2xl w-[586px] max-md:w-full max-sm:h-[50px] hover:bg-fuchsia-400 transition-colors"
        >
          <span className="text-3xl text-white max-sm:text-2xl">
            Log in
          </span>
        </button>
      </form>

      <div className="flex relative justify-center items-center mx-0 my-12 max-md:mx-0 max-md:my-8">
        <div className="absolute left-0 h-px bg-black w-[163px]" />
        <p className="mx-5 my-0 text-2xl text-black max-sm:text-xl">
          or Continue With
        </p>
        <div className="absolute right-0 h-px bg-black w-[163px]" />
      </div>

      <SocialLoginButtons />

      <footer className="flex justify-center mt-12">
        <p className="text-2xl text-black max-sm:text-xl">
          Don't have account?
        </p>
        <button
          type="button"
          className="text-2xl text-indigo-400 max-sm:text-xl hover:underline ml-1"
        >
          Sign up here
        </button>
      </footer>
    </section>
  );
};
