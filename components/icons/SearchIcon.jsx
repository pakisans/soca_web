import { memo } from "react";

const SearchIcon = ({ width, height, color, styles }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    id="Layer_1"
    data-name="Layer 1"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill={color}
    className={styles}
  >
    <path d="m0,3v7h10V0H3C1.346,0,0,1.346,0,3Zm8,5H2V3c0-.551.449-1,1-1h5v6Zm14-5c0-1.654-1.346-3-3-3h-7v10h10V3Zm-2,5h-6V2h5c.551,0,1,.449,1,1v5ZM0,19c0,1.654,1.346,3,3,3h7v-10H0v7Zm2-5h6v6H3c-.551,0-1-.449-1-1v-5Zm21.979,8.564l-2.812-2.812c.524-.791.833-1.736.833-2.753,0-2.757-2.243-5-5-5s-5,2.243-5,5,2.243,5,5,5c1.017,0,1.962-.309,2.753-.833l2.812,2.812,1.414-1.414Zm-6.979-2.564c-1.654,0-3-1.346-3-3s1.346-3,3-3,3,1.346,3,3-1.346,3-3,3Z" />
  </svg>
);
export default memo(SearchIcon);
