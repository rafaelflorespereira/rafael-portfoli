import Image from "next/image";
import Img1 from "@/public/Image-1.jpeg";
export default function Recommendations() {
  const recommendations = [
    {
      image: Img1,
      name: "John Dunton",
      title: "Software Engineer",
      message:
        "Rafael is a great engineer. He is very talented and has a great attitude. He is a great team player and is always willing to help others. I highly recommend him.",
    },
    {
      image: Img1,
      name: "Jane Smith",
      title: "Software Engineer",
      message:
        "Rafael is a great engineer. He is very talented and has a great attitude. He is a great team player and is always willing to help others. I highly recommend",
    },
    {
      image: Img1,
      name: "Jane Smith",
      title: "Software Engineer",
      message:
        "Rafael is a great engineer. He is very talented and has a great attitude. He is a great team player and is always willing to help others. I highly recommend",
    },
  ];
  return (
    <section>
      <h1 className="text-md my-8">Recommendations</h1>
      <div className="flex gap-3 justify-start relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-tr from-transparent to-slate-800" />
        {recommendations.map((recommendation) => (
          <div key={recommendation.name} className="min-w-2/3">
            <div className="py-2 flex">
              <Image
                src={recommendation.image}
                alt={recommendation.name}
                width={200}
                height={200}
                className="rounded-full w-12 h-12 my-4"
              />
              <div className="mt-3 ml-3">
                <h2 className="text-lg text-slate-200 ">
                  {recommendation.name}
                </h2>
                <h3 className="text-sm text-slate-500">
                  {recommendation.title}
                </h3>
              </div>
            </div>
            <p className="text-sm font-bold">{recommendation.message}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
