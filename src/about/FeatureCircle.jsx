export const FeatureCircle = ({ title, className = "" }) => {
    return (
      <div className={`flex relative flex-col justify-center items-center ${className}`}>
        <div>
          <div
            dangerouslySetInnerHTML={{
              __html:
                "<svg id=\"220:1092\" width=\"515\" height=\"515\" viewBox=\"0 0 515 515\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"feature-circle\" style=\"width: 415px; height: 415px; border-radius: 415px; background: linear-gradient(180deg, rgba(143, 135, 241, 0.34) 0%, rgba(254, 210, 226, 0.34) 100%); box-shadow: 5px 5px 50px 0 rgba(0, 0, 0, 0.25); margin-bottom: 30px\"> <g filter=\"url(#filter0_d_220_1092)\"> <circle cx=\"252.5\" cy=\"252.5\" r=\"207.5\" fill=\"url(#paint0_linear_220_1092)\" shape-rendering=\"crispEdges\"></circle> </g> <defs> <filter id=\"filter0_d_220_1092\" x=\"0\" y=\"0\" width=\"515\" height=\"515\" filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\"> <feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\"></feFlood> <feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\" result=\"hardAlpha\"></feColorMatrix> <feOffset dx=\"5\" dy=\"5\"></feOffset> <feGaussianBlur stdDeviation=\"25\"></feGaussianBlur> <feComposite in2=\"hardAlpha\" operator=\"out\"></feComposite> <feColorMatrix type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0\"></feColorMatrix> <feBlend mode=\"normal\" in2=\"BackgroundImageFix\" result=\"effect1_dropShadow_220_1092\"></feBlend> <feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"effect1_dropShadow_220_1092\" result=\"shape\"></feBlend> </filter> <linearGradient id=\"paint0_linear_220_1092\" x1=\"252.5\" y1=\"45\" x2=\"252.5\" y2=\"460\" gradientUnits=\"userSpaceOnUse\"> <stop stop-color=\"#8F87F1\" stop-opacity=\"0.34\"></stop> <stop offset=\"1\" stop-color=\"#FED2E2\" stop-opacity=\"0.34\"></stop> </linearGradient> </defs> </svg>",
            }}
          />
        </div>
        <p className="absolute -bottom-20 text-4xl text-center text-black w-[339px] max-md:text-3xl max-md:w-[280px] max-sm:text-xl max-sm:bottom-[-60px] max-sm:w-[200px]">
          {title}
        </p>
      </div>
    );
  };
  