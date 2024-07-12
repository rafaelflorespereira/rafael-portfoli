import { education } from "../data/education";
import Card from "../ui/components/cards/cards";
export default function Education() {
  return (
    <section className="section-spacing">
      {education.map((job) => (
        <Card key={job.title} {...job} />
      ))}
    </section>
  );
}
