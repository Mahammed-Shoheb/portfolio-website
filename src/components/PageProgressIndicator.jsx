import { useEffect, useState } from 'react';

const PageProgressIndicator = () => {
  const [pageHeight, setPageHeight] = useState(0);

  const lengthIndicator = (e) => {
    const totalHeight =
      window.document.body.getClientRects()[0].height - window.innerHeight;
    const scrolledHeight = window.scrollY;
    setPageHeight(((scrolledHeight / totalHeight) * 100).toFixed(0));
  };
  useEffect(() => {
    window.addEventListener('scroll', lengthIndicator);
    return () => window.removeEventListener('scroll', lengthIndicator);
  });
  console.log(pageHeight);
  return (
    <div className={`min-w-full bg-emerald-100`}>
      <div
        className={`h-1 bg-emerald-500 transition  ease-linear`}
        style={{ width: `${pageHeight}%` }}
      ></div>
    </div>
  );
};
export default PageProgressIndicator;
