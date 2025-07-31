export function CourseCard({ image, category, title, rating, lessons, duration, showViewButton = false }) {
    return (
      <article className="flex flex-col grow items-start px-4 py-4 w-full bg-white rounded-[30px] shadow-[5px_5px_50px_rgba(0,0,0,0.25)]">
        <img
          src={image}
          alt={title}
          className="object-contain self-stretch w-full rounded-none aspect-[1.39] shadow-[5px_5px_20px_rgba(0,0,0,0.25)]"
        />
        <div className="mt-5 ml-3 text-base tracking-widest text-indigo-400 max-md:ml-2.5">
          {category}
        </div>
        <h3 className="mt-1.5 ml-3 text-2xl text-black max-md:ml-2.5">
          {title}
        </h3>
        {rating && (
          <img
            src={rating}
            alt="Rating"
            className="object-contain mt-5 ml-4 max-w-full aspect-[4.63] w-[148px] max-md:ml-2.5"
          />
        )}
        {lessons && duration && (
          <div className="flex mt-5 ml-5 text-base text-black max-md:ml-2.5">
            <div className="grow my-auto max-md:mr-0">
              {lessons}
            </div>
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/153aedd2d0f661d720c16d7a562151914a75be36?placeholderIfAbsent=true&apiKey=f4404789203e45a6bd721c6cd37f95e0"
              alt="Duration icon"
              className="object-contain shrink-0 aspect-[1.03] w-[31px]"
            />
            <div className="self-start">
              {duration}
            </div>
          </div>
        )}
        {showViewButton && (
          <div className="flex gap-10 items-start mt-7 ml-4 text-base text-white max-md:ml-2.5">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/37516aaffab43fb72597f4a3eb77763da8a8da52?placeholderIfAbsent=true&apiKey=f4404789203e45a6bd721c6cd37f95e0"
              alt="Progress"
              className="object-contain shrink-0 mt-3.5 max-w-full aspect-[4.07] w-[134px]"
            />
            <button className="flex flex-col justify-center px-8 py-3.5 bg-fuchsia-300 rounded-[30px] shadow-[5px_5px_20px_rgba(0,0,0,0.25)] max-md:px-5">
              View now
            </button>
          </div>
        )}
      </article>
    );
  }
  