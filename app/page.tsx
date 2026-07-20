import { Navigation } from "@/components/landing/navigation";
import { HeroSection } from "@/components/landing/hero-section";
import { WhyUsSection } from "@/components/landing/why-us-section";
import { ExcavatorTypesSection } from "@/components/landing/excavator-types-section";
import { PriceTableSection } from "@/components/landing/price-table-section";
import { ServicesSection } from "@/components/landing/services-section";
import { GallerySection } from "@/components/landing/gallery-section";
import { AreaSection } from "@/components/landing/area-section";
import { TestimonialsSection } from "@/components/landing/testimonials-section";
import { FaqSection } from "@/components/landing/faq-section";
import { CtaSection } from "@/components/landing/cta-section";
import { FooterSection } from "@/components/landing/footer-section";
import { FloatingWhatsapp } from "@/components/landing/floating-whatsapp";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <WhyUsSection />
      <ExcavatorTypesSection />
      <PriceTableSection />
      <ServicesSection />
      <GallerySection />
      <AreaSection />
      <TestimonialsSection />
      <FaqSection />
      <CtaSection />
      <FooterSection />
      <FloatingWhatsapp />
    </main>
  );
}
