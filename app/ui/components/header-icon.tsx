import { IHeaderIcon, IHeaderIconProps } from "@/app/interfaces";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

export default function HeaderIcon({
  icon,
  color,
  name,
  index,
  arraylength,
}: IHeaderIconProps) {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prev) => (prev + 1) % arraylength);
    }, 4000);

    return () => clearInterval(interval);
  }, [arraylength, counter]);

  return (
    <div
      className={`m-2 p-2 rounded-lg absolute transition-all delay-1000  ${
        counter === index ? "animate-glow" : "animate-none hidden"
      }`}
      style={{
        boxShadow: `0 0 10px 0 ${color}`,
      }}
    >
      <FontAwesomeIcon icon={icon} color={color} className="w-full h-full" />
    </div>
  );
}
