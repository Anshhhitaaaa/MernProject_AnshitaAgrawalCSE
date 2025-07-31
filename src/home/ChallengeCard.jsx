export const ChallengeCard = ({
    image,
    category,
    subtitle,
    title,
    description,
    buttonText = "Start now",
    buttonColor = "bg-fuchsia-300",
    categoryColor = "text-indigo-400"
  }) => {
    return (
      <article className="flex flex-col grow items-start px-2.5 pt-3 pb-5 w-full bg-white rounded-[30px] shadow-[5px_5px_50px_rgba(0,0,0,0.25)] max-md:mt-10 max-md:max-w-full">
        <img
          src={image}
          alt={`${title} challenge`}
          className="object-contain self-stretch w-full aspect-[2.65] rounded-[30px] shadow-[5px_5px_50px_rgba(0,0,0,0.25)] max-md:max-w-full"
        />
        <div className={`mt-3 ml-3.5 text-base tracking-widest ${categoryColor} max-md:ml-2.5`}>
          {category}
        </div>
        {subtitle && (
          <div className="mt-2.5 ml-3.5 text-lg text-black max-md:ml-2.5">
            {subtitle}
          </div>
        )}
        <p className="mt-6 ml-3.5 text-2xl text-black max-md:ml-2.5">
          {description}
        </p>
        <button className={`flex flex-col justify-center px-7 py-3.5 mt-5 ml-3 max-w-full text-base text-white ${buttonColor} rounded-[30px] shadow-[5px_5px_20px_rgba(0,0,0,0.25)] w-[130px] max-md:px-5 max-md:ml-2.5`}>
          {buttonText}
        </button>
      </article>
    );
  };
  