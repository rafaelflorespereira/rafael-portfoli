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
    }, 3500);

    return () => clearInterval(interval);
  }, [arraylength, counter]);

  return (
    <div
      className={`p-2 w-16 h-16 rounded-lg absolute left-2/4 -translate-x-1/2 ${
        counter === index ? "animate-glow" : "animate-none hidden"
      } shadow-primary-500 shadow-md `}
    >
      <FontAwesomeIcon icon={icon} className="w-full h-full" />
    </div>
  );
}
