import { memo } from "react";

const ArrowRight = ({ width, height, color, styles }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    id="Layer_1"
    data-name="Layer 1"
    viewBox="0 0 24 24"
    width={width}
    height={height}
    fill={color}
    className={styles}
  >
    <path d="M19,0H5C2.243,0,0,2.243,0,5v14c0,2.757,2.243,5,5,5h14c2.757,0,5-2.243,5-5V5c0-2.757-2.243-5-5-5Zm-1.232,12.552l-4.418,4.361c-.498,.492-1.35,.143-1.35-.552v-3.361H7c-.553,0-1-.448-1-1s.447-1,1-1h5v-3.361c0-.695,.852-1.044,1.35-.552l4.418,4.361c.309,.305,.309,.799,0,1.104Z" />
  </svg>
);
export default memo(ArrowRight);
