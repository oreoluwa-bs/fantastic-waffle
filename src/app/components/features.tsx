import { BoltIcon } from "~/components/icons/bolt";
import { RocketIcon } from "~/components/icons/rocket";
import { StarsIcon } from "~/components/icons/stars";
import { UsersIcon } from "~/components/icons/users";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { SectionIcon } from "~/components/ui/section-icon";

const features = [
  {
    title: "Multi-Platform Sync",
    description:
      "Integrated with other platforms to make sharing and importing designs easy and fast. ",
    display: (
      <div className="grid md:grid-cols-2">
        <div className="md:col-span-2">
          <FeatureSubCard
            feature={{
              title: "Share your work across multi-platforms at once",
              description:
                "Save time and boost your reach by effortlessly posting your designs everywhere your audience is.",
            }}
          />
        </div>
        <div className="">
          <FeatureSubCard
            feature={{
              title: "One click to connect all your accounts",
              description:
                "Instantly connect all your social media accounts by togging on or off.",
            }}
          />
        </div>
        <div className="">
          <FeatureSubCard
            feature={{
              title: "Import from any account",
              description:
                "Import your designs from other accounts, organize and showcase them all in one place.",
            }}
          />
        </div>
      </div>
    ),
  },
  {
    title: "Content Management",
    description:
      "Take control of your content with a management system that adapts to your needs. ",
    display: (
      <div className="grid md:grid-cols-2">
        <div className="">
          <FeatureSubCard
            feature={{
              title: "Schedule Post",
              description:
                "Plan ahead and schedule your posts to go live exactly when you want them to.",
            }}
          />
        </div>
        <div className="">
          <FeatureSubCard
            feature={{
              title: "Set Reminders",
              description:
                "Set reminders and never forget an important task again.",
            }}
          />
        </div>
        <div className="md:col-span-2">
          <FeatureSubCard
            feature={{
              title: "Edit your Frames and Posts anytime",
              description:
                "Unlimited edits to keep your content fresh and up-to-date. ",
            }}
          />
        </div>
      </div>
    ),
  },
  {
    title: "Growth Tools",
    description: "Tools to boost your growth and creativity. ",
    display: (
      <div className="grid md:grid-cols-2">
        <div className="">
          <FeatureSubCard
            feature={{
              title: "Keep and Pause Streaks for up to a week",
              description:
                "Pause or keep your streaks for a week and retain your progress.",
            }}
          />
        </div>
        <div className="">
          <FeatureSubCard
            feature={{
              title: "Receive Tailored Job alerts 24hrs earlier",
              description:
                "Be the first to receive job alerts 24 hours before anyone else.",
            }}
          />
        </div>
      </div>
    ),
  },
];

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
      <div className="container px-4 mx-auto mt-14">
        <ul className="space-y-16">
          {features.map((f, i) => {
            return (
              <li key={i}>
                <FeatureCard feature={f} />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

function FeatureCard({ feature }: { feature: (typeof features)[0] }) {
  return (
    <div className="feature-card bg-background rounded-[30px] overflow-clip grid md:grid-cols-[0.3fr_0.7fr]">
      <div className="flex flex-col p-8">
        <div>
          <SectionIcon>
            <BoltIcon />
          </SectionIcon>

          <h3 className="text-2xl font-medium tracking-tight mt-10 mb-4">
            {feature.title}
          </h3>
          <p className="tracking-tight">{feature.description}</p>
        </div>

        <div className="flex-1 min-h-10" />
        <Button className="w-[164px]">
          <RocketIcon />
          Subscribe now
        </Button>
      </div>
      <div className="min-h-[450px]">{feature.display}</div>
    </div>
  );
}

function FeatureSubCard({
  feature,
}: {
  feature: { title: string; description: string };
}) {
  return (
    <div className="h-full">
      <div className="max-w-[550px] px-9 py-9">
        <h4 className="text-[#0E0523] tracking-tight text-lg mb-2">
          {feature.title}
        </h4>
        <p className="text-[#33274B] tracking-[-0.01em] text-sm leading-5">
          {feature.description}
        </p>
      </div>
      <div className="bg-gray-50 h-[350px]"></div>
    </div>
  );
}
