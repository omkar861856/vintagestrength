import Header from "@/components/Header";
import Footer from "@/components/Footer";
import IntroSection from "@/components/IntroSection";
import ServicesSection from "@/components/ServicesSection";
import PricingSection from "@/components/PricingSection";
import AboutSection from "@/components/AboutSection";
import ScheduleSection from "@/components/ScheduleSection";
import CallToAction from "@/components/CallToAction";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <IntroSection />
        <ServicesSection />
        <PricingSection />
        <AboutSection />
        <ScheduleSection />
        <CallToAction />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
