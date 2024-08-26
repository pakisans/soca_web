import { memo } from "react";

const PdfIcon = ({ width, height, color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    id="Layer_1"
    data-name="Layer 1"
    viewBox="0 0 24 24"
    width={width}
    height={height}
  >
    <path d="M12.75,15.07v2c0,.45-.36,.75-.75,.75-.14,0-.43,0-.75,0v-3.5c.32,0,.61,0,.75,0,.39,0,.75,.3,.75,.75Zm-5.78-.82h-.71v1.47s.71,0,.71,0c.41,0,.76-.34,.76-.73s-.35-.73-.76-.73ZM17,.59V5h4.41L17,.59Zm5,6.41V24H2V3C2,1.34,3.34,0,5,0H15V7h7Zm-13.02,7.98c0-1.09-.9-1.98-2.01-1.98h-1.97v6.07h1.25v-2.1h.72c1.11,0,2.01-.89,2.01-1.99Zm5.02,.07c0-1.09-.89-1.98-2-1.98h0c-.27,0-.52,0-.75,0h-1.25s0,6,0,6h1.25c.23,0,.48,0,.75,0h0c1.11,0,2-.89,2-1.98v-2.03Zm5-2.05h-4v6.07h1.25v-2.1h1.75v-1.25h-1.74s0-1.47,0-1.47h2.75v-1.25Z" />
  </svg>
);
export default memo(PdfIcon);
