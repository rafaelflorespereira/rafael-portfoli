import logoImg1 from "@/public/next-js-favicon.ico";
import Card1 from "../ui/components/cards/card-1";

export default function Rewards() {
  const rewards = [
    {
      title: "Designer",
      subtitle: "I design cool stuff",
      logo: logoImg1,
    },
    {
      title: "Developer",
      subtitle: "I develop cool stuff",
      logo: logoImg1,
    },
  ];
  return (
    <section className="p-8 mb-4">
      <div className="flex gap-5">
        {rewards.map((reward) => (
          <Card1 key={reward.title} {...reward} />
        ))}
      </div>
    </section>
  );
}
