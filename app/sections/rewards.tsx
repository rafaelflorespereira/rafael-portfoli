import Card1 from "../ui/components/cards/card-1";
import { awards } from "../data/awards";

export default function Rewards() {
  return (
    <section className="section-spacing">
      <div className="flex flex-col md:flex-row gap-5">
        {awards.map((award) => (
          <Card1 key={award.title} {...award} />
        ))}
      </div>
    </section>
  );
}
