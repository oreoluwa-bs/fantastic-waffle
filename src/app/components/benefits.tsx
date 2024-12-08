import { RocketIcon } from "~/components/icons/rocket";
import { StarsIcon } from "~/components/icons/stars";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils";

const benefits = [
  {
    image: "",
    title: "Maintain a consistent online presence",
    description:
      "Schedule your posts in advance to keep your followers engaged and maintain a steady online presence.",
    meta: { className: "lg:w-[calc(41.5%-1.25rem)]" },
  },
  {
    image: "",
    title: "Get a head start on job opportunities",
    description:
      "Receive tailored job alerts 24 hours earlier to get a jump on new opportunities and advance your career.",
    meta: { className: "lg:w-[calc(29%-1.25rem)]" },
  },
  {
    image: "",
    title: "Share your creative work effortlessly",
    description:
      "Seamlessly share your designs from Designwhiz across multiple platforms by connecting all your accounts.",
    meta: { className: "lg:w-[calc(29%-1.25rem)]" },
  },
  {
    image: "",
    title: "Expand your professional reach and visibility.",
    description:
      "Expand your brand’s reach on all of DesignWhiz feeds, growing your audience 10x than average",
    meta: { className: "lg:w-[calc(33%-1.25rem)]" },
  },
  {
    image: "",
    title: "Never miss a posting deadline",
    description:
      "Set reminders to ensure you never miss a deadline and always stay on top of your posting schedule.",
    meta: { className: "lg:w-[calc(33%-1.25rem)]" },
  },
  {
    image: "",
    title: "Stay motivated and track your growth",
    description:
      "Keep and pause streaks to stay motivated, track your progress, and celebrate your achievements.",
    meta: { className: "lg:w-[calc(33%-1.25rem)]" },
  },
];

export function Benefits() {
  return (
    <section className="relative isolate">
      <div className="relative z-0">
        <div className="flex justify-center items-center">
          <div className="container mx-auto px-4 max-w-[620px]">
            <div className="text-center">
              <Badge className="badge-border-gradient">
                <StarsIcon />
                <span className="text-gradient">Benefits</span>
              </Badge>
            </div>
            <h2 className="text-3xl md:text-4xl   lg:text-5xl text-center font-medium mt-2 mb-4 lg:leading-[57.2px] tracking-tighter">
              Its even better with DesignWhiz Pro
            </h2>
            <p className="md:text-lg max-w-[480px] mx-auto  text-center">
              The opportunity to get more eyes on your work and stand out with
              attention grabbing profile features to attract more opportunities.
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-14">
        <ul className="flex flex-wrap gap-6 mb-8">
          {benefits.map((b, i) => {
            return (
              <li key={i} className={cn("", b.meta.className)}>
                <BenefitCard benefit={b} />
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex items-center justify-center pb-20">
        <Button className="w-[164px]">
          <RocketIcon />
          Subscribe now
        </Button>
      </div>
    </section>
  );
}

function BenefitCard({ benefit }: { benefit: (typeof benefits)[0] }) {
  return (
    <div className="benefit-card rounded-[30px] overflow-hidden h-full">
      <div className="bg-gray-50 h-56"></div>
      <div className="benefit-card-text-container px-9 py-9">
        <h3 className="text-[#0E0523]  tracking-tight text-xl mb-6">
          {benefit.title}
        </h3>
        <p className="text-[#33274B] tracking-[-0.01em] leading-5">
          {benefit.description}
        </p>
      </div>
    </div>
  );
}
