import { education } from "../data/education";
import Card from "../ui/components/cards/cards";
export default function Education() {
  return (
    <section className="py-8 mb-4">
      {education.map((job) => (
        <Card key={job.title} {...job} />
      ))}
    </section>
  );
}
