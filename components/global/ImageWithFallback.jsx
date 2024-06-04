"use client";
import { memo, useCallback, useState } from "react";

const { default: Image } = require("next/image");

const ImageWithFallback = ({ src, alt, width, height, styles }) => {
  const [imgSrc, setImgSrc] = useState(src);

  const handleError = useCallback(() => {
    setImgSrc("/images/no-image.jpeg");
  }, []);

  return (
    <Image
      src={imgSrc}
      alt={alt}
      width={width}
      height={height}
      onError={handleError}
      className={styles}
    />
  );
};

export default memo(ImageWithFallback);
