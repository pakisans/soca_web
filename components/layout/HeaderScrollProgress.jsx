"use client";
import { useScrollProgress } from "@/components/hooks/useScrollProgress";

const HeaderScrollProgress = () => {
  const scrollProgress = useScrollProgress();

  return (
    <div
      className="rounded-[1rem] bg-gradient-to-r from-red-800 to-red-500 shadow-md"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: `${scrollProgress * 100}%`,
        height: "4px",
      }}
    ></div>
  );
};

export default HeaderScrollProgress;
