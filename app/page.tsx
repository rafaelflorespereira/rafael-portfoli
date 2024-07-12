import Experience from "./sections/experience";
import Header from "./sections/header";
import ImagesSection from "./sections/images-section";
import Rewards from "./sections/rewards";
import Recommendations from "./sections/recommendations";
import Footer from "./sections/footer";
import ContactMe from "./sections/contact-me";
import Education from "./sections/education";

export default function Home() {
  return (
    <main className="md:max-w-3xl w-full p-8 md:p-16 bg-gray-800 border-sky-100 border-x">
      <Header />
      <ImagesSection />

      <h1 className="font-bold">Job Experiences</h1>
      <Experience />

      <h1 className="font-bold">Education</h1>
      <Education />

      <h1 className="font-bold">Awards and Certifications</h1>
      <Rewards />

      <h1 className="font-bold">Recommendations</h1>
      <Recommendations />

      <h1 className="font-bold" id="get-in-touch">
        Get in touch
      </h1>
      <ContactMe />

      <Footer />
    </main>
  );
}
