import Card from "@/app/ui/components/cards/cards";
import nextImg from "@/public/next-js-favicon.ico";

export default function Experience() {
  const jobs = [
    {
      isOdd: true,
      years: [2019, "Present"],
      imageUrl: nextImg,
      title: "Software Engineer",
      subtitle: "Next.js",
      description: "I work on the Next.js team.",
      links: ["https://nextjs.org"],
      experiences: [
        {
          name: "Next.js",
          level: 3,
        },
      ],
    },
    {
      isOdd: false,
      years: [2018, 2019],
      imageUrl: "/images/vercel.png",
      title: "Software Engineer",
      subtitle: "Vercel",
      description: "I worked on the Vercel team.",
      links: ["https://vercel.com"],
      experiences: [
        {
          name: "Vercel",
          level: 2,
        },
      ],
    },
  ];
  return (
    <section className="py-8 mb-4">
      {jobs.map((job) => (
        <Card key={job.title} {...job} />
      ))}
    </section>
  );
}
