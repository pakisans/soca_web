import { memo, useCallback, useState } from "react";

const { default: Image } = require("next/image");

const ImageWithFallback = ({ src, alt, width, height }) => {
  const [imgSrc, setImgSrc] = useState(src);

  const handleError = useCallback(() => {
    setImgSrc("/images/no-image.webp");
  }, []);

  return (
    <Image
      src={imgSrc}
      alt={alt}
      width={width}
      height={height}
      onError={handleError}
    />
  );
};

export default memo(ImageWithFallback);
