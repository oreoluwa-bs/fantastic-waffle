import { UsersIcon } from "~/components/icons/users";
import { SectionIcon } from "~/components/ui/section-icon";
import { Designers } from "./designers";
import { LogoCloud } from "./logo-cloud";

export function SocialProof() {
  return (
    <section className="relative isolate overflow-clip">
      <div className="pt-44 relative z-0">
        <div className="flex justify-center items-center mb-10">
          <div className="container mx-auto px-4 max-w-[620px]">
            <h2
              data-animation="fade-in-up"
              className="text-3xl md:text-4xl   lg:text-5xl text-center font-medium mt-2 mb-4 lg:leading-[57.2px] tracking-tighter"
            >
              With over 1k
              <span className="align-middle px-4">
                <SectionIcon>
                  <UsersIcon />
                </SectionIcon>
              </span>
              designers like you hooked on Pro
            </h2>
            <p
              data-animation="fade-in-up"
              className="md:text-lg max-w-[480px] mx-auto  text-center text-balance"
            >
              Don’t be left behind, join thousands of top designers with
              unlimited access to resources and a thriving community on
              DesignWhiz Pro
            </p>
          </div>
        </div>
        <Designers />
        <LogoCloud />
      </div>
    </section>
  );
}
