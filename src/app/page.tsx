import Image from "next/image";
import { Footer } from "~/components/footer";
import { DsgnWhizIcon } from "~/components/icons/dsgnwhiz";
import { Button } from "~/components/ui/button";
import { Benefits } from "./components/benefits";
import { FAQs } from "./components/faqs";
import { Features } from "./components/features";
import { Hero } from "./components/hero";
import { Pricing } from "./components/pricing";
import { SocialProof } from "./components/social-proof";
import { Testimonials } from "./components/tesimonials";

export default function Home() {
  return (
    <>
      <Button variant="tertiary" className="fixed top-4 right-4 z-30">
        <DsgnWhizIcon />
        Join DsgnWhiz
      </Button>
      <main>
        <Hero />
        <div className="-mt-[500px] md:-mt-[550px] lg:-mt-[650px] py-10">
          <div className="absolute">
            <div className="relative text-center clipped w-[100vw] h-[100svh]">
              <Image src={"/bg-arc.webp"} alt="" fill loading="lazy" />
            </div>
          </div>
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
      <div className="pt-20">
        <Footer />
      </div>
    </>
  );
}
