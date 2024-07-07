import Image from "next/image";

export default function ImagesSection() {
  const images = [""];
  return (
    <section className="flex justify-center group mb-4">
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
