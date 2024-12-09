import Image from "next/image";
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
      <div className="grid md:grid-cols-2 divide-x divide-y">
        <div className="md:col-span-2">
          <FeatureSubCard
            feature={{
              title: "Share your work across multi-platforms at once",
              description:
                "Save time and boost your reach by effortlessly posting your designs everywhere your audience is.",
              display: (
                <div className="relative h-[350px]  overflow-clip pt-4">
                  <Image
                    src="/features/features-2.webp"
                    alt=""
                    width={627.21}
                    height={358.41}
                    className="mx-auto group-hover:scale-110 absolute right-4 -bottom-16 transition-transform ease-in-out duration-300"
                    loading="lazy"
                    quality={100}
                  />
                  {/* <Image
                    src="/features/features-2.webp"
                    alt=""
                    width={261.97}
                    height={67.71}
                    className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 group-hover:scale-110 transition-transform ease-in-out duration-300"
                    loading="lazy"
                    quality={100}
                  /> */}
                </div>
              ),
            }}
          />
        </div>
        <div className="">
          <FeatureSubCard
            feature={{
              title: "One click to connect all your accounts",
              description:
                "Instantly connect all your social media accounts by togging on or off.",
              display: (
                <div className="relative h-[350px]  overflow-clip pt-4">
                  <Image
                    src="/features/features-3.webp"
                    alt=""
                    width={627.21}
                    height={358.41}
                    className="mx-auto group-hover:scale-110 absolute right-4 -bottom-10 transition-transform ease-in-out duration-300"
                    loading="lazy"
                    quality={100}
                  />
                  <Image
                    src="/features/features-5.webp"
                    alt=""
                    width={60}
                    height={60}
                    className="mx-auto group-hover:scale-110 absolute right-12 top-7 transition-transform ease-in-out duration-300"
                    loading="lazy"
                    quality={100}
                  />
                </div>
              ),
            }}
          />
        </div>
        <div className="">
          <FeatureSubCard
            feature={{
              title: "Import from any account",
              description:
                "Import your designs from other accounts, organize and showcase them all in one place.",
              display: (
                <div className="relative h-[350px]  overflow-clip pt-4">
                  <Image
                    src="/features/features-4.webp"
                    alt=""
                    width={627.21}
                    height={358.41}
                    className="mx-auto group-hover:scale-110 absolute right-4 -bottom-16 transition-transform ease-in-out duration-300"
                    loading="lazy"
                    quality={100}
                  />
                </div>
              ),
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
      <div className="grid md:grid-cols-2 divide-x divide-y">
        <div className="">
          <FeatureSubCard
            feature={{
              title: "Schedule Post",
              description:
                "Plan ahead and schedule your posts to go live exactly when you want them to.",

              display: (
                <div className="relative h-[250px]  overflow-clip pt-4">
                  <Image
                    src="/features/features-6.webp"
                    alt=""
                    width={591.78}
                    height={369.01}
                    className="mx-auto group-hover:scale-110 absolute right-4 -bottom-7 transition-transform ease-in-out duration-300"
                    loading="lazy"
                    quality={100}
                  />
                </div>
              ),
            }}
          />
        </div>
        <div className="">
          <FeatureSubCard
            feature={{
              title: "Set Reminders",
              description:
                "Set reminders and never forget an important task again.",
              display: (
                <div className="relative h-[250px]  overflow-clip pt-4">
                  <Image
                    src="/features/features-7.webp"
                    alt=""
                    width={627.21}
                    height={358.41}
                    className="mx-auto group-hover:scale-110 absolute right-4 -bottom-10 transition-transform ease-in-out duration-300"
                    loading="lazy"
                    quality={100}
                  />
                  <Image
                    src="/features/features-9.webp"
                    alt=""
                    width={285.69}
                    height={48}
                    className="mx-auto group-hover:scale-110 absolute right-12 top-7 transition-transform ease-in-out duration-300"
                    loading="lazy"
                    quality={100}
                  />
                </div>
              ),
            }}
          />
        </div>
        <div className="md:col-span-2">
          <FeatureSubCard
            feature={{
              title: "Edit your Frames and Posts anytime",
              description:
                "Unlimited edits to keep your content fresh and up-to-date. ",
              display: (
                <div className="relative h-[350px]  overflow-clip pt-4">
                  <div
                    className="absolute right-1/2 translate-x-1/2 group-hover:scale-110   bottom-1/4 translate-y-1/2 size-[393px] rounded-full transition-transform ease-in-out duration-300"
                    style={{
                      background: "#FCFCFD",
                      border: "0.63px solid #E6E6E659",
                      boxShadow:
                        "0px 3.81px 7.62px 1.27px #E2E3F23D,-4.27px -1.27px 5.81px 0px #E2E3F280 inset, 6.27px 1.27px 5.81px 0px #E2E3F280 inset;",
                    }}
                  />
                  <Image
                    src="/features/features-10.webp"
                    alt=""
                    width={350}
                    height={414.86}
                    className="mx-auto group-hover:scale-110 absolute right-1/3 translate-x-1/2 top-0 transition-transform ease-in-out duration-300"
                    loading="lazy"
                    quality={100}
                  />

                  <Image
                    src="/features/features-8.webp"
                    alt=""
                    width={499.74}
                    height={502.06}
                    className="mx-auto group-hover:scale-110 absolute right-2/3 translate-x-1/2 translate-y-1/2 bottom-10 transition-transform ease-in-out duration-300"
                    loading="lazy"
                    quality={100}
                  />
                </div>
              ),
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
      <div className="grid md:grid-cols-2 divide-x">
        <div className="">
          <FeatureSubCard
            feature={{
              title: "Keep and Pause Streaks for up to a week",
              description:
                "Pause or keep your streaks for a week and retain your progress.",
              display: (
                <div className="relative h-[350px]  overflow-clip pt-4">
                  <Image
                    src="/features/features-1.webp"
                    alt=""
                    width={235.54}
                    height={281.35}
                    className="mx-auto group-hover:scale-110 absolute -right-10 top-8 transition-transform ease-in-out duration-300"
                    loading="lazy"
                    quality={100}
                  />

                  <Image
                    src="/features/features-12.webp"
                    alt=""
                    width={425.35}
                    height={282.08}
                    className="mx-auto group-hover:scale-110 absolute right-2/3 translate-x-1/2 translate-y-1/2 bottom-20 transition-transform ease-in-out duration-300"
                    loading="lazy"
                    quality={100}
                  />
                </div>
              ),
            }}
          />
        </div>
        <div className="">
          <FeatureSubCard
            feature={{
              title: "Receive Tailored Job alerts 24hrs earlier",
              description:
                "Be the first to receive job alerts 24 hours before anyone else.",
              display: (
                <div className="relative h-[350px]  overflow-clip pt-4">
                  <Image
                    src="/features/features-11.webp"
                    alt=""
                    width={401.61}
                    height={450.46}
                    className="mx-auto group-hover:scale-110 absolute right-[45%] translate-x-1/2 -top-6 transition-transform ease-in-out duration-300"
                    loading="lazy"
                    quality={100}
                  />
                </div>
              ),
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
    <div className="feature-card bg-background rounded-[30px] overflow-clip grid md:grid-cols-[0.3fr_0.7fr] divide-x">
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
  feature: { title: string; description: string; display?: React.ReactNode };
}) {
  return (
    <div className="h-full group">
      <div className="max-w-[550px] px-9 py-9">
        <h4 className="text-[#0E0523] tracking-tight text-lg mb-2">
          {feature.title}
        </h4>
        <p className="text-[#33274B] tracking-[-0.01em] text-sm leading-5">
          {feature.description}
        </p>
      </div>
      <div className="bg-gray-50/5 min-h-[100px]">{feature.display}</div>
    </div>
  );
}
