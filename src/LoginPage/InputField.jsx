"use client";

export const InputField = ({
  label,
  type = "text",
  required = false,
  className = "",
  ...props
}) => {
  return (
    <div className="mb-10">
      <label className="mb-2.5 text-2xl text-black max-sm:text-xl block">
        {label}{required && "*"}
      </label>
      <input
        type={type}
        className={`bg-white rounded-2xl border border-indigo-400 border-solid shadow-2xl h-[63px] w-full max-sm:h-[50px] px-4 ${className}`}
        {...props}
      />
    </div>
  );
};
