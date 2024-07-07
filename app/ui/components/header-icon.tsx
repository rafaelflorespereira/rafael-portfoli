import { IHeaderIcon } from "@/app/interfaces";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function HeaderIcon({ icon, color, name }: IHeaderIcon) {
  return (
    <div
      className={"m-2 p-2 rounded-lg absolute transition-all"}
      style={{
        boxShadow: `0 0 10px 0 ${color}`,
      }}
    >
      <FontAwesomeIcon icon={icon} color={color} className="w-full h-full" />
    </div>
  );
}
