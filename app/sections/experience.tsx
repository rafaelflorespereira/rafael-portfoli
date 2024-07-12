import Card from "@/app/ui/components/cards/cards";
import { jobs } from "../data/experience";

export default function Experience() {
  return (
    <section className="section-spacing">
      {jobs.map((job) => (
        <Card key={job.title} {...job} />
      ))}
    </section>
  );
}
