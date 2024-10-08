import { memo } from "react";

const LocationIcon = ({ width, height, color, styles }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    id="Layer_1"
    data-name="Layer 1"
    viewBox="0 0 24 24"
    width={width}
    className={styles}
    fill={color}
    height={height}
  >
    <path d="M16.243,9.757a6,6,0,0,0-8.486,8.486L12,22.392l4.243-4.149A6,6,0,0,0,16.243,9.757ZM12,16a2,2,0,1,1,2-2A2,2,0,0,1,12,16Zm12-5.868V24H14.647l3.067-3H21V10.132a.408.408,0,0,0-.158-.323l-8.59-6.722a.41.41,0,0,0-.505,0L3.157,9.81A.407.407,0,0,0,3,10.132V21H6.286l3.067,3H0V10.132A3.4,3.4,0,0,1,1.307,7.447L9.9.724a3.407,3.407,0,0,1,4.2,0l8.592,6.723A3.4,3.4,0,0,1,24,10.132Z" />
  </svg>
);
export default memo(LocationIcon);
