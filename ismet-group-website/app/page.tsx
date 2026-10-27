import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import AboutSection from "@/components/AboutSection";
import ServicesGrid from "@/components/ServicesGrid";
import DoctorSection from "@/components/DoctorSection";
import ClinicGallery from "@/components/ClinicGallery";
import CinematicBanner from "@/components/CinematicBanner";
import TreatmentTimeline from "@/components/TreatmentTimeline";
import FAQ from "@/components/FAQ";
import AppointmentSection from "@/components/AppointmentSection";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <AboutSection />
      <ServicesGrid />
      <DoctorSection />
      <ClinicGallery />
      <CinematicBanner />
      <TreatmentTimeline />
      <FAQ />
      <AppointmentSection />
    </>
  );
}
