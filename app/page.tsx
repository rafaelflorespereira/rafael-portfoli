import Experience from "./ui/experience";
import Header from "./sections/header";
import ImagesSection from "./sections/images-section";

export default function Home() {
  return (
    <main className="md:max-w-3xl w-full p-16 bg-gray-800 h-screen border-sky-100 border-x">
      <Header />
      <ImagesSection />
      <Experience />
      {/* Rewards Section */}
      {/* Education Section (Articles) */}
      {/* Recommendations */}
      {/* Contact me section */}
      {/* Footer Section */}
    </main>
  );
}
