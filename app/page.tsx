import Experience from "./sections/experience";
import Header from "./sections/header";
import ImagesSection from "./sections/images-section";
import Rewards from "./sections/rewards";
import Recommendations from "./sections/recommendations";
import Footer from "./sections/footer";
import ContactMe from "./sections/contact-me";

export default function Home() {
  return (
    <main className="md:max-w-3xl w-full p-16 bg-gray-800 border-sky-100 border-x">
      <Header />
      <ImagesSection />

      <h1 className="font-bold">Experience</h1>
      <Experience />

      <h1 className="font-bold">Rewards</h1>
      <Rewards />
      {/* Education Section (Articles) */}

      <h1 className="font-bold">Recommendations</h1>
      <Recommendations />

      <h1 className="font-bold">Get in touch</h1>
      <ContactMe />

      <Footer />
    </main>
  );
}
