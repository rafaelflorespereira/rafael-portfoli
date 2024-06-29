import Experience from "./ui/experience";
import Header from "./sections/header";
import ImagesSection from "./sections/images-section";
import Rewards from "./sections/rewards";
import Recommendations from "./sections/recommendations";

export default function Home() {
  return (
    <main className="md:max-w-3xl w-full p-16 bg-gray-800 border-sky-100 border-x">
      <Header />
      <ImagesSection />
      <Experience />
      <Rewards />
      {/* Education Section (Articles) */}
      <Recommendations />
      {/* Contact me section */}
      {/* Footer Section */}
    </main>
  );
}
