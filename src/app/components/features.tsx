import { RocketIcon } from "~/components/icons/rocket";
import { StarsIcon } from "~/components/icons/stars";
import { UsersIcon } from "~/components/icons/users";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { SectionIcon } from "~/components/ui/section-icon";

export function Features() {
  return (
    <section className="relative isolate">
      <div className="relative z-0">
        <div className="flex justify-center items-center">
          <div className="container mx-auto px-4 max-w-[620px]">
            <div className="text-center">
              <Badge className="badge-border-gradient">
                <StarsIcon />
                <span className="text-gradient">Features</span>
              </Badge>
            </div>
            <h2 className="text-3xl md:text-4xl   lg:text-5xl text-center font-medium mt-2 mb-4 lg:leading-[57.2px] tracking-tighter">
              Features
              <span className="align-middle px-4">
                <SectionIcon>
                  <UsersIcon />
                </SectionIcon>
              </span>
              that make us interesting.
            </h2>
            <p className="md:text-lg max-w-[480px] mx-auto  text-center">
              Take control of your experience—unify and organize your designs
              using our advanced features and tools.
            </p>

            <div className="flex items-center justify-center mt-10">
              <Button className="w-[164px]">
                <RocketIcon />
                Subscribe now
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-14"></div>
    </section>
  );
}
