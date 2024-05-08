import "../../styles/offert/stylesSingleOffert.css";
export const MiniatureDarkMode = ({ href, test }) => {
  console.log(typeof href);
  const image =
    '<svg width="101" height="101" viewBox="0 0 101 101" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" transform="matrix(6.123233995736766e-17,1,1,-6.123233995736766e-17,0,0)"> <circle cx="50.5" cy="50.5" r="50" fill="#1288A3" stroke="black"></circle> <circle cx="51" cy="50" r="45" fill="#D9D9D9"></circle> <rect x="5" y="5" width="91" height="90" rx="45" fill="url(#pattern0)"></rect> <rect x="5" y="5" width="91" height="90" rx="45" fill="url(#pattern1)"></rect> <rect x="5" y="5" width="91" height="90" rx="45" fill="url(#pattern2)"></rect> <defs> <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1"><use xlink:href="#image0_15_1315" transform="matrix(0.00149925 0 0 0.00151591 0 -0.145777)"></use></pattern><pattern id="pattern1" patternContentUnits="objectBoundingBox" width="1" height="1"><use xlink:href="#image0_15_1315" transform="matrix(0.00149925 0 0 0.00151591 0 -0.145777)"></use></pattern><pattern id="pattern2" patternContentUnits="objectBoundingBox" width="1" height="1"><use xlink:href="#image0_15_1315" transform="matrix(0.00149925 0 0 0.00151591 0 -0.145777)"></use></pattern><image id="image0_15_1315" width="667" height="852" xlink:href=' +
    '"' +
    href +
    '"' +
    "/></defs></svg>";
  console.log(image);
  return (
    <>
      <div className="miniature" dangerouslySetInnerHTML={{ __html: image }} />
    </>
  );
};
