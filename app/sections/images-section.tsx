import Image from "next/image";
import Img1 from "@/public/Image-1.jpeg";
import Img2 from "@/public/Designer (2).jpeg";
import Img3 from "@/public/Designer (3).jpeg";
import Img4 from "@/public/Designer.jpeg";

export default function ImagesSection() {
  const images = [Img1, Img2, Img3, Img4];
  return (
    <section className="flex justify-center group">
      {images.map((image, index) => (
        <Image
          key={index}
          src={image}
          alt="Designer"
          width={200}
          height={100}
          className="rounded-md mx-4 scale-y-75 shadow-lg shadow-slate-900 even:rotate-3 odd:-rotate-3 group-hover:rotate-0 transition-transform duration-300 ease-in-out"
        />
      ))}
    </section>
  );
}
