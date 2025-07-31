"use client";

export const SocialLoginButtons = () => {
  return (
    <section className="flex relative gap-14 justify-center mx-0 my-12 max-md:gap-8 max-sm:gap-5">
      <button
        type="button"
        className="w-[72px] h-[72px] rounded-full bg-gray-300 hover:bg-gray-400 transition-colors"
        aria-label="Login with first social provider"
      >
        <div
          dangerouslySetInnerHTML={{
            __html:
              "<svg id=\"229:1195\" width=\"72\" height=\"72\" viewBox=\"0 0 72 72\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"social-circle-bg\" style=\"width: 72px; height: 72px\"> <circle cx=\"36\" cy=\"36\" r=\"36\" fill=\"#D9D9D9\"></circle> </svg>",
          }}
        />
      </button>

      <button
        type="button"
        className="w-[72px] h-[72px] rounded-full hover:opacity-80 transition-opacity"
        aria-label="Login with Google"
      >
        <div
          dangerouslySetInnerHTML={{
            __html:
              "<svg id=\"229:1196\" style=\"width:72px;height:72px;flex-shrink:0;aspect-ratio:1/1;border-radius:72px;background:url(<path-to-image class=\" google-icon\"=\"\">) lightgray 50% / cover no-repeat;position:absolute;left:1171px;top:820px\" width=\"72\" height=\"72\" viewBox=\"0 0 72 72\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"> <circle cx=\"36\" cy=\"36\" r=\"36\" fill=\"url(#pattern0_229_1196)\"></circle> <defs> <pattern id=\"pattern0_229_1196\" patternContentUnits=\"objectBoundingBox\" width=\"1\" height=\"1\"> <use xlink:href=\"#image0_229_1196\" transform=\"scale(0.00195312)\"></use> </pattern>  </defs> </svg>",
          }}
        />
      </button>

      <button
        type="button"
        className="w-[72px] h-[72px] rounded-full hover:opacity-80 transition-opacity"
        aria-label="Login with Facebook"
      >
        <div
          dangerouslySetInnerHTML={{
            __html:
              "<svg id=\"229:1197\" style=\"width:72px;height:72px;flex-shrink:0;aspect-ratio:1/1;border-radius:72px;background:url(<path-to-image class=\" facebook-icon\"=\"\">) lightgray 50% / cover no-repeat;position:absolute;left:1285px;top:820px\" width=\"72\" height=\"72\" viewBox=\"0 0 72 72\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"> <circle cx=\"36\" cy=\"36\" r=\"36\" fill=\"url(#pattern0_229_1197)\"></circle> <defs> <pattern id=\"pattern0_229_1197\" patternContentUnits=\"objectBoundingBox\" width=\"1\" height=\"1\"> <use xlink:href=\"#image0_229_1197\" transform=\"scale(0.00195312)\"></use> </pattern>  </defs> </svg>",
          }}
        />
      </button>

      <button
        type="button"
        className="w-[72px] h-[72px] rounded-full hover:opacity-80 transition-opacity"
        aria-label="Login with GitHub"
      >
        <div
          dangerouslySetInnerHTML={{
            __html:
              "<svg id=\"229:1198\" style=\"width:72px;height:72px;flex-shrink:0;aspect-ratio:1/1;border-radius:72px;background:url(<path-to-image class=\" github-icon\"=\"\">) lightgray 50% / cover no-repeat;position:absolute;left:1399px;top:820px\" width=\"72\" height=\"72\" viewBox=\"0 0 72 72\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"> <circle cx=\"36\" cy=\"36\" r=\"36\" fill=\"url(#pattern0_229_1198)\"></circle> <defs> <pattern id=\"pattern0_229_1198\" patternContentUnits=\"objectBoundingBox\" width=\"1\" height=\"1\"> <use xlink:href=\"#image0_229_1198\" transform=\"scale(0.00195312)\"></use> </pattern>  </defs> </svg>",
          }}
        />
      </button>

      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/6399389708148522343c48d179c8fa617dafe67d?width=76"
        alt=""
        className="absolute h-[53px] left-[9px] top-[9px] w-[53px] max-sm:top-2 max-sm:left-2 max-sm:w-11 max-sm:h-11"
      />
    </section>
  );
};
