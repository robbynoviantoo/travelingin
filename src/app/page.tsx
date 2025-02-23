import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import Newsletter from "@/components/Newsletter/Newsletter";
import SearchSection from "@/components/SearchSection";
import Services from "@/components/Services/Services";
import Travel from "@/components/Travel/Travel";
import Testimonial from "@/components/Testimonial/Testimonial";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <SearchSection/>
      <Travel />
      <Services />
      <Newsletter/>
      <Testimonial />
    </main>
  );
}
