import Card from "@/app/ui/components/cards/cards";
import { jobs } from "../data/experience";

export default function Experience() {
  return (
    <section className="py-8 mb-4">
      {jobs.map((job) => (
        <Card key={job.title} {...job} />
      ))}
    </section>
  );
}
