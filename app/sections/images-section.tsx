"use client";
import { useEffect, useState } from "react";
import HeaderIcon from "../ui/components/header-icon";

import { techIcons, frontEndIcons } from "@/app/data/icons";

export default function ImagesSection() {
  return (
    <section className="flex justify-center mb-4 h-16">
      <div className="relative w-16 h-16">
        {techIcons.map((icon, index) => (
          <HeaderIcon
            key={index}
            {...icon}
            index={index}
            arraylength={techIcons.length}
          />
        ))}
      </div>
      <div className="relative w-16 h-16">
        {frontEndIcons.map((icon, index) => (
          <HeaderIcon
            key={index}
            {...icon}
            index={index}
            arraylength={frontEndIcons.length}
          />
        ))}
      </div>
    </section>
  );
}
