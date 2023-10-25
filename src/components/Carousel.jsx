import { useEffect, useState } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import BlurImageImport from './BlurImageImport';

const Carousel = ({ imgs }) => {
  const [index, setIndex] = useState(0);
  const next = () => {
    setIndex(index + 1 > imgs.length - 1 ? 0 : index + 1);
  };
  const prev = () => {
    setIndex(index - 1 < 0 ? imgs.length - 1 : index - 1);
  };

  const handleClick = (index) => {
    setIndex(index);
  };

  useEffect(() => {
    const timer = setInterval(next, 3000);
    return () => clearInterval(timer);
  }, [index]);

  return (
    <div className='h-56 overflow-hidden relative'>
      {imgs.map((img, i) => {
        return <BlurImageImport image={img} key={i} i={i} index={index} />;
      })}
      <div className='absolute bottom-1 left-[50%] translate-x-[-50%]'>
        {imgs.map((_, i) => {
          return (
            <button
              type='button'
              key={i}
              onClick={() => handleClick(i)}
              className={`text-xs mx-1 md:text-lg p-2 rounded-[50%]  ${
                i === index ? 'bg-emerald-800' : 'bg-emerald-500'
              }`}
            ></button>
          );
        })}
      </div>
      <button
        onClick={next}
        className='absolute top-[50%] translate-y-[-50%] right-1 text-3xl text-emerald-500 bg-emerald-100 hover:bg-emerald-200 rounded-[50%] p-1'
      >
        <FiChevronRight />
      </button>
      <button
        onClick={prev}
        className='absolute top-[50%] translate-y-[-50%] left-1  text-3xl text-emerald-500 bg-emerald-100 hover:bg-emerald-200 rounded-[50%] p-1'
      >
        <FiChevronLeft />
      </button>
    </div>
  );
};
export default Carousel;
