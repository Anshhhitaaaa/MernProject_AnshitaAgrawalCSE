export const CourseCard = ({
    image,
    category,
    title,
    time,
    buttonText,
    buttonColor = "bg-fuchsia-300",
    categoryColor = "text-indigo-400"
  }) => {
    return (
      <article className="flex flex-col px-2.5 py-4 mx-auto w-full bg-white rounded-[30px] shadow-[5px_5px_50px_rgba(0,0,0,0.25)] max-md:mt-10 max-md:max-w-full">
        <img
          src={image}
          alt={`${title} course`}
          className="object-contain w-full aspect-[2.65] rounded-[30px] shadow-[5px_5px_50px_rgba(0,0,0,0.25)] max-md:max-w-full"
        />
        <div className={`self-start mt-3 ml-3.5 text-base tracking-widest ${categoryColor} max-md:ml-2.5`}>
          {category}
        </div>
        <div className="flex gap-5 justify-between self-center mt-2 max-w-full w-[416px]">
          <div className="flex-1">
            <h3 className="text-2xl text-black">
              {title}
            </h3>
            <button className={`flex flex-col justify-center px-7 py-3.5 mt-3.5 max-w-full text-base text-white ${buttonColor} rounded-[30px] shadow-[5px_5px_20px_rgba(0,0,0,0.25)] w-[130px] max-md:px-5`}>
              {buttonText}
            </button>
          </div>
          {time && (
            <div className="text-sm text-black my-auto">
              {time}
            </div>
          )}
        </div>
      </article>
    );
  };
  