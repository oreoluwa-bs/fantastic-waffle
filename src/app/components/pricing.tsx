import { StarsIcon } from "~/components/icons/stars";
import { UsersIcon } from "~/components/icons/users";
import { Badge } from "~/components/ui/badge";
import { SectionIcon } from "~/components/ui/section-icon";

export function Pricing() {
  return (
    <section className="relative isolate">
      <div className="relative z-0">
        <div className="flex justify-center items-center">
          <div className="container mx-auto px-4 max-w-[620px]">
            <div className="text-center">
              <Badge className="badge-border-gradient">
                <StarsIcon />
                <span className="text-gradient">Pricing</span>
              </Badge>
            </div>
            <h2 className="text-3xl md:text-4xl   lg:text-5xl text-center font-medium mt-2 mb-4 lg:leading-[57.2px] tracking-tighter">
              Find the right plan
              <span className="align-middle px-4">
                <SectionIcon>
                  <UsersIcon />
                </SectionIcon>
              </span>
              for your needs.
            </h2>
            <p className="md:text-lg max-w-[480px] mx-auto  text-center">
              Choose the plan that suits you best. No hidden fees and no
              surprises.
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-14"></div>
    </section>
  );
}
