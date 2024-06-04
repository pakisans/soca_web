import { memo } from "react";

const XIcon = ({ width, height, color, styles }) => {
  return (
    <svg
      className={styles}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 12 12"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.68991 0.947896C1.48266 0.781176 1.17874 0.794 0.98637 0.98637C0.78026 1.19248 0.78026 1.52665 0.98637 1.73276L5.25356 5.99995L0.98637 10.2671L0.947896 10.31C0.781176 10.5172 0.794 10.8212 0.98637 11.0135C1.19248 11.2196 1.52665 11.2196 1.73276 11.0135L5.99995 6.74634L10.2671 11.0135L10.31 11.052C10.5172 11.2187 10.8212 11.2059 11.0135 11.0135C11.2196 10.8074 11.2196 10.4733 11.0135 10.2671L6.74634 5.99995L11.0135 1.73276L11.052 1.68991C11.2187 1.48266 11.2059 1.17874 11.0135 0.98637C10.8074 0.78026 10.4733 0.78026 10.2671 0.98637L5.99995 5.25356L1.73276 0.98637L1.68991 0.947896Z"
        fill={color}
      />
    </svg>
  );
};

export default memo(XIcon);
