import React from "react";
import ContentLoader from "react-content-loader";

const Loader = ({ numberItemsRender = 4 }) => {
  const WIDTH_CIRCLE = 80;
  const HEIGHT_CIRCLE = 80;
  const SPACING_CIRCLE = 20;
  const MARGIN_BOTTOM = 20;

  return (
    <ContentLoader
      speed={2}
      width={350}
      height={500}
      viewBox="0 0 350 500"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      {new Array(numberItemsRender).fill(null).map((__, index) => (
        <>
          <circle
            cx="39"
            cy={39 + index * (HEIGHT_CIRCLE + MARGIN_BOTTOM)}
            r="39"
          />
          <rect
            x={WIDTH_CIRCLE + SPACING_CIRCLE}
            y={16 + index * (HEIGHT_CIRCLE + MARGIN_BOTTOM)}
            rx="8"
            ry="8"
            width="200"
            height="20"
          />
          <rect
            x={WIDTH_CIRCLE + SPACING_CIRCLE}
            y={50 + index * (HEIGHT_CIRCLE + MARGIN_BOTTOM)}
            rx="8"
            ry="8"
            width="150"
            height="16"
          />
        </>
      ))}
    </ContentLoader>
  );
};

export default Loader;
