import { useState } from 'react';
import { Blurhash } from 'react-blurhash';

const BlurImageImport = ({ image, i, index }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div
      className={`absolute inset-0 ${
        i === index
          ? 'translate-x-[0%]'
          : i < index
          ? 'translate-x-[-100%]'
          : 'translate-x-[100%]'
      }   `}
    >
      <img
        src={image.imgURL}
        alt='project image'
        loading='lazy'
        onLoad={() => {
          setImageLoaded(true);
        }}
        className={`absolute inset-0  rounded-t w-full h-full`}
      />
      {!imageLoaded && (
        <Blurhash
          hash={image.blurHash}
          width={'100%'}
          height={'100%'}
          resolutionX={32}
          resolutionY={32}
          punch={1}
        />
      )}
    </div>
  );
};
export default BlurImageImport;
