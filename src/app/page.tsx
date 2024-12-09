import { Footer } from "~/components/footer";
import { DsgnWhizIcon } from "~/components/icons/dsgnwhiz";
import { Button } from "~/components/ui/button";
import { Arc } from "./components/arc";
import { Benefits } from "./components/benefits";
import { FAQs } from "./components/faqs";
import { Features } from "./components/features";
import { FooterEnd } from "./components/footer-end";
import { Hero } from "./components/hero";
import { Pricing } from "./components/pricing";
import { SocialProof } from "./components/social-proof";
import { Testimonials } from "./components/tesimonials";
import { Experience } from "./experience";

export default function Home() {
  return (
    <Experience>
      <Button variant="tertiary" className="fixed top-4 right-4 z-30">
        <DsgnWhizIcon />
        Join DsgnWhiz
      </Button>
      <main>
        <Hero />
        <div className="-mt-[500px] md:-mt-[550px] lg:-mt-[650px] py-10">
          <Arc />
          <SocialProof />
          <div className="bg-background">
            <Benefits />
          </div>
        </div>
        <div className="py-20">
          <Features />
        </div>
        <div className="py-20">
          <Testimonials />
        </div>
        <div className="py-20">
          <Pricing />
        </div>
        <div className="py-20">
          <FAQs />
        </div>
      </main>
      <div className="pt-20" data-animation="fadse-in">
        <Footer />
      </div>
      <FooterEnd />
    </Experience>
  );
}
