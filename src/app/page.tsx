import Hero from "@/components/home/Hero";
import AboutSection from "@/components/home/AboutSection";
import ServicesPreview from "@/components/home/ServicesPreview";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Testimonials from "@/components/home/Testimonials";
import LocationSection from "@/components/home/LocationSection";
import CtaSection from "@/components/home/CtaSection";

export default function Home() {
  return (
    <main className="flex-grow flex flex-col">
      <Hero />
      <AboutSection />
      <ServicesPreview />
      <WhyChooseUs />
      <Testimonials />
      <LocationSection />
      <CtaSection />
    </main>
  );
}
