import { StarsIcon } from "~/components/icons/stars";
import { UsersIcon } from "~/components/icons/users";
import { Badge } from "~/components/ui/badge";
import { SectionIcon } from "~/components/ui/section-icon";

export function Testimonials() {
  return (
    <section className="relative isolate">
      <div className="relative z-0">
        <div className="flex justify-center items-center">
          <div className="container mx-auto px-4 max-w-[720px]">
            <div className="text-center">
              <Badge className="badge-border-gradient">
                <StarsIcon />
                <span className="text-gradient">Testimonials</span>
              </Badge>
            </div>
            <h2 className="text-3xl md:text-4xl   lg:text-5xl text-center font-medium mt-2 mb-4 lg:leading-[57.2px] tracking-tighter">
              Don&apos;t just take our word for it, hear from our
              <span className="align-middle px-4">
                <SectionIcon>
                  <UsersIcon />
                </SectionIcon>
              </span>
              community.
            </h2>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-14"></div>
    </section>
  );
}