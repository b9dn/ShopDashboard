import "../../styles/offert/stylesSingleOffert.css";
export const Miniature = ({ href }) => {
  return (
    <>
      <svg
        className="miniature"
        width="101"
        height="101"
        viewBox="0 0 101 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <circle cx="50.5" cy="50.5" r="50" fill="#19B3DA" stroke="black" />
        <circle cx="51" cy="50" r="45" fill="#D9D9D9" />
        <rect
          x="5"
          y="6"
          width="91"
          height="90"
          rx="45"
          fill="url(#pattern0)"
        />
        <rect
          x="5"
          y="6"
          width="91"
          height="90"
          rx="45"
          fill="url(#pattern1)"
        />
        <rect
          x="5"
          y="6"
          width="91"
          height="90"
          rx="45"
          fill="url(#pattern2)"
        />
        <defs>
          <pattern
            id="pattern0"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image0_15_1316"
              transform="matrix(0.00149925 0 0 0.00151591 0 -0.145777)"
            />
          </pattern>
          <pattern
            id="pattern1"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image0_15_1316"
              transform="matrix(0.00149925 0 0 0.00151591 0 -0.145777)"
            />
          </pattern>
          <pattern
            id="pattern2"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image0_15_1316"
              transform="matrix(0.00149925 0 0 0.00151591 0 -0.145777)"
            />
          </pattern>
          <image
            id="image0_15_1316"
            width="667"
            height="852"
            xlinkHref={href}
          />
        </defs>
      </svg>
    </>
  );
};
