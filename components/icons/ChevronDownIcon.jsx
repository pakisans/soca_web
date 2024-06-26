import { memo } from "react";

const ChevronDownIcon = ({ width, height, color, styles }) => {
  return (
    <svg
      className={styles}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 14 8"
      fill="none"
    >
      <path
        d="M13.7 1.7L7.7 7.7C7.5 7.9 7.3 8 7 8C6.7 8 6.5 7.9 6.3 7.7L0.3 1.7C-0.1 1.3 -0.1 0.7 0.3 0.3C0.7 -0.1 1.3 -0.1 1.7 0.3L7 5.6L12.3 0.3C12.7 -0.1 13.3 -0.1 13.7 0.3C14.1 0.7 14.1 1.3 13.7 1.7Z"
        fill={color}
      />
    </svg>
  );
};

export default memo(ChevronDownIcon);
