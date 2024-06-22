import Card from "./components/cards/cards";

export default function Experience() {
  const jobs = [
    {
      isOdd: true,
      years: [2019, "Present"],
      imageUrl: "/images/nextjs.png",
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
    <main>
      <h1>Experience</h1>
      {jobs.map((job) => (
        <Card key={job.title} {...job} />
      ))}
    </main>
  );
}
