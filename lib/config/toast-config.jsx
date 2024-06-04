import { toast } from "react-hot-toast";
import XIcon from "@/components/icons/XIcon";
import CheckmarkIcon from "@/components/icons/CheckmarkIcon";

let lastToastTime = 0;
const TOAST_INTERVAL = 1000;

const canShowToast = () => {
  const now = Date.now();
  if (now - lastToastTime < TOAST_INTERVAL) {
    return false;
  }
  lastToastTime = now;
  return true;
};

const customToast = {
  success: (message, onClick) => {
    if (!canShowToast()) {
      return;
    }

    toast(
      (t) => (
        <div className="border border-offRed rounded-[1rem] animate-fadeIn relative py-[1rem] mt-10 text-gunMetal opacity-85 bg-mintCream px-[2rem]">
          <div className="flex items-center">
            <div className="shake-animation border-gol">
              <CheckmarkIcon
                background={"#8E1B13"}
                color={"#F7F7FF"}
                width={30}
                height={30}
              />
            </div>
            <span className="text-[1.5rem] leading-[2.4rem] font-semibold  mx-[1rem]">
              {message}
            </span>
            <button
              aria-label="toast"
              type="button"
              tabIndex={0}
              className="cursor-pointer absolute right-5 top-5"
              onClick={() => (onClick ? onClick() : toast.dismiss(t.id))}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  toast.dismiss(t.id);
                }
              }}
            >
              <XIcon width={10} height={10} color="#1C3738" />
            </button>
          </div>
        </div>
      ),
      {
        duration: 3000,
        style: {
          background: "transparent",
          boxShadow: "none",
          border: "none",
        },
      }
    );
  },
  error: (message, onClick) => {
    if (!canShowToast()) {
      return;
    }

    toast(
      (t) => (
        <div className="border border-red-500 rounded-[1rem] animate-fadeIn relative py-[1rem] mt-10 text-white opacity-85 bg-red-500 px-[2rem]">
          <div className="flex items-center">
            <div className="shake-animation border-gol">
              <XIcon
                background={"#FFFFFF"}
                color={"#8E1B13"}
                width={30}
                height={30}
              />
            </div>
            <span className="text-[1.5rem] leading-[2.4rem] font-semibold  mx-[1rem]">
              {message}
            </span>
            <button
              aria-label="toast"
              type="button"
              tabIndex={0}
              className="cursor-pointer absolute right-5 top-5"
              onClick={() => (onClick ? onClick() : toast.dismiss(t.id))}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  toast.dismiss(t.id);
                }
              }}
            >
              <XIcon width={10} height={10} color="#1C3738" />
            </button>
          </div>
        </div>
      ),
      {
        duration: 3000,
        style: {
          background: "transparent",
          boxShadow: "none",
          border: "none",
        },
      }
    );
  },
};

export default customToast;
