import { faJs, faReact } from "@fortawesome/free-brands-svg-icons";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import { IHeaderIcon } from "../interfaces";
import HeaderIcon from "../ui/components/header-icon";

import { techIcons, frontEndIcons } from "@/app/data/icons";

export default function ImagesSection() {
  return (
    <section className="flex justify-center mb-4 h-16">
      <div className="relative w-16 h-16">
        {techIcons.map((icon, index) => (
          <HeaderIcon key={index} {...icon} />
        ))}
      </div>
      <div className="relative w-16 h-16">
        {frontEndIcons.map((icon, index) => (
          <HeaderIcon key={index} {...icon} />
        ))}
      </div>
    </section>
  );
}
