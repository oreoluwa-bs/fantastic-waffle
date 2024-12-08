import {
  PriceActiveLogo,
  PriceInActiveLogo,
} from "~/components/icons/price-logo";
import { RocketStrokeIcon } from "~/components/icons/rocket-stroke";
import { StarsIcon } from "~/components/icons/stars";
import { UsersIcon } from "~/components/icons/users";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { SectionIcon } from "~/components/ui/section-icon";
import { Switch } from "~/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";

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
      <div className="container mx-auto mt-14">
        <div>
          <Tabs defaultValue="yearly" className="">
            <TabsList className="grid w-[min(100%,220px)] mx-auto grid-cols-2">
              <TabsTrigger value="yearly">
                <span className="shrink-0">
                  <RocketStrokeIcon />
                </span>
                Yearly
              </TabsTrigger>
              <TabsTrigger value="monthly">
                <span className="shrink-0">
                  <RocketStrokeIcon />
                </span>
                Monthly
              </TabsTrigger>
            </TabsList>
            <TabsContent value="yearly">
              <ul className="space-y-8 max-w-screen-md mx-auto pt-10 isolate">
                <li
                  className="pricing-card__container group rounded-2xl"
                  data-state="in-active"
                >
                  <span className="text-center block p-3  text-sm tracking-tight font-medium">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="none"
                      viewBox="0 0 20 20"
                      className="align-middle inline mr-2"
                    >
                      <path
                        stroke="#036B26"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.619"
                        d="M3.69 18.271v-4.153m0-8.305V1.661M1.612 3.737h4.153M1.613 16.195h4.153M10.749 2.49l-1.44 3.745c-.235.609-.352.913-.534 1.17q-.245.342-.587.586c-.256.182-.56.3-1.17.534l-3.744 1.44 3.745 1.44c.609.234.913.351 1.17.534.226.161.425.36.586.586.182.257.3.56.533 1.17l1.44 3.745 1.44-3.745c.235-.61.352-.913.534-1.17q.245-.342.587-.586c.256-.182.56-.3 1.17-.534l3.744-1.44-3.744-1.44c-.61-.234-.914-.352-1.17-.534a2.5 2.5 0 0 1-.587-.586c-.182-.257-.299-.561-.533-1.17z"
                      ></path>
                    </svg>
                    <span>Start a 14 days free trial</span>
                  </span>
                  <PricingCard
                    display={
                      <div className="p-4 flex gap-6 items-center justify-between">
                        <div className="">
                          <div className="tracking-tight">
                            <span className="text-2xl font-semibold text-[#099137]">
                              $3
                            </span>{" "}
                            <span className="text-sm text-soft-foreground">
                              / month
                            </span>
                          </div>
                          <span className="text-xs text-soft-foreground tracking-tight">
                            Cancel anytime
                          </span>
                        </div>
                        <div>
                          <span className="text-xs text-soft-foreground tracking-tight">
                            (Save 20% - $36)
                          </span>
                          <div className="flex gap-2 items-center mt-1">
                            <span className="text-sm text-foreground font-medium tracking-tight">
                              Pay yearly
                            </span>
                            <Switch
                              className="h-4 w-7 data-[state=checked]:bg-[#375DFB]"
                              classNameThumbs="h-3 w-3 data-[state=checked]:translate-x-3"
                              checked
                            />
                          </div>
                        </div>
                      </div>
                    }
                    canUpgrade
                    price={{
                      name: "Pro plan",
                      benefits: [
                        "Unlimited cross-post to other platforms",
                        "Unlimited frames schedule ",
                        "Unlimited reminders",
                        "Unlimited streak pause ",
                        "Job Alerts - 24 hrs earlier  ",
                      ],
                    }}
                  />
                </li>
                <li
                  className="pricing-card__container group"
                  data-state="active"
                >
                  <span className="text-center block p-3 text-sm tracking-tight font-medium">
                    You are on this plan
                  </span>
                  <PricingCard
                    display={
                      <div className="p-4">
                        <div className="tracking-tight">
                          <span className="text-2xl font-semibold text-foreground">
                            Free
                          </span>{" "}
                          <span className="text-sm text-soft-foreground">
                            / forever
                          </span>
                        </div>
                        <span className="text-xs text-soft-foreground tracking-tight">
                          Limited access to designwhiz capabilities
                        </span>
                      </div>
                    }
                    price={{
                      name: "Starter",
                      benefits: [
                        "Cross-post to other platforms 3X per month",
                        "Frames schedule once per month  ",
                        "Reminders once per week",
                        "Streak pause once per month",
                        "Job Alerts - 24 hrs later ",
                      ],
                    }}
                  />
                </li>
              </ul>
            </TabsContent>
            <TabsContent value="monthly">
              <ul className="space-y-8 max-w-screen-md mx-auto pt-10 isolate">
                <li
                  className="pricing-card__container group rounded-2xl"
                  data-state="in-active"
                >
                  <span className="text-center block p-3  text-sm tracking-tight font-medium">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="none"
                      viewBox="0 0 20 20"
                      className="align-middle inline mr-2"
                    >
                      <path
                        stroke="#036B26"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.619"
                        d="M3.69 18.271v-4.153m0-8.305V1.661M1.612 3.737h4.153M1.613 16.195h4.153M10.749 2.49l-1.44 3.745c-.235.609-.352.913-.534 1.17q-.245.342-.587.586c-.256.182-.56.3-1.17.534l-3.744 1.44 3.745 1.44c.609.234.913.351 1.17.534.226.161.425.36.586.586.182.257.3.56.533 1.17l1.44 3.745 1.44-3.745c.235-.61.352-.913.534-1.17q.245-.342.587-.586c.256-.182.56-.3 1.17-.534l3.744-1.44-3.744-1.44c-.61-.234-.914-.352-1.17-.534a2.5 2.5 0 0 1-.587-.586c-.182-.257-.299-.561-.533-1.17z"
                      ></path>
                    </svg>
                    <span>Start a 14 days free trial</span>
                  </span>
                  <PricingCard
                    display={
                      <div className="p-4 flex gap-6 items-center justify-between">
                        <div className="">
                          <div className="tracking-tight">
                            <span className="text-2xl font-semibold text-[#099137]">
                              $3
                            </span>{" "}
                            <span className="text-sm text-soft-foreground">
                              / month
                            </span>
                          </div>
                          <span className="text-xs text-soft-foreground tracking-tight">
                            Cancel anytime
                          </span>
                        </div>
                        <div>
                          <span className="text-xs text-soft-foreground tracking-tight">
                            (Save 20% - $36)
                          </span>
                          <div className="flex gap-2 items-center mt-1">
                            <span className="text-sm text-foreground font-medium tracking-tight">
                              Pay yearly
                            </span>
                            <Switch
                              className="h-4 w-7 data-[state=checked]:bg-[#375DFB]"
                              classNameThumbs="h-3 w-3 data-[state=checked]:translate-x-3"
                              checked
                            />
                          </div>
                        </div>
                      </div>
                    }
                    canUpgrade
                    price={{
                      name: "Pro plan",
                      benefits: [
                        "Unlimited cross-post to other platforms",
                        "Unlimited frames schedule ",
                        "Unlimited reminders",
                        "Unlimited streak pause ",
                        "Job Alerts - 24 hrs earlier  ",
                      ],
                    }}
                  />
                </li>
                <li
                  className="pricing-card__container group"
                  data-state="active"
                >
                  <span className="text-center block p-3 text-sm tracking-tight font-medium">
                    You are on this plan
                  </span>
                  <PricingCard
                    display={
                      <div className="p-4">
                        <div className="tracking-tight">
                          <span className="text-2xl font-semibold text-foreground">
                            Free
                          </span>{" "}
                          <span className="text-sm text-soft-foreground">
                            / forever
                          </span>
                        </div>
                        <span className="text-xs text-soft-foreground tracking-tight">
                          Limited access to designwhiz capabilities
                        </span>
                      </div>
                    }
                    price={{
                      name: "Starter",
                      benefits: [
                        "Cross-post to other platforms 3X per month",
                        "Frames schedule once per month  ",
                        "Reminders once per week",
                        "Streak pause once per month",
                        "Job Alerts - 24 hrs later ",
                      ],
                    }}
                  />
                </li>
              </ul>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}

function PricingCard({
  display,
  price,
  canUpgrade = false,
}: {
  display: React.ReactNode;
  canUpgrade?: boolean;
  price: {
    name: string;
    benefits: string[];
  };
}) {
  return (
    <div className="pricing-card bg-background rounded-2xl py-5 px-4">
      <div className="grid gap-8 md:grid-cols-2">
        <div className="bg-[#F9FAFB] rounded-lg">
          <div className="p-4">
            <div className="flex gap-2 items-center mb-6 font-medium tracking-tight">
              <span>
                <span className="group-data-[state='active']:hidden">
                  <PriceInActiveLogo />
                </span>
                <span className="hidden group-data-[state='active']:inline-block">
                  <PriceActiveLogo />
                </span>
              </span>
              {price.name}
            </div>
            {canUpgrade && (
              <Button
                className="pricing-card-upgrade-button  w-full"
                style={{ background: "#099137" }}
              >
                Upgrade
              </Button>
            )}
          </div>
          {display ? (
            <>
              <hr />
              {display}
            </>
          ) : null}
        </div>
        <div>
          <p className="text-sm text-[#344054] tracking-[-0.06px] font-medium mb-2">
            What you get:
          </p>
          <ul className="space-y-2">
            {price.benefits.map((b, i) => {
              return (
                <li
                  key={i}
                  className="grid grid-cols-[21px_1fr] gap-2 text-sm text-[#344054] tracking-[-0.06px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="21"
                    fill="none"
                    viewBox="0 0 21 21"
                  >
                    <rect
                      width="19.932"
                      height="19.932"
                      x="0.528"
                      y="0.432"
                      fill="#F5F8FD"
                      rx="9.966"
                    ></rect>
                    <path
                      stroke="#1751D0"
                      strokeWidth="1.869"
                      d="m7.172 10.398 2.077 2.077 4.567-4.568"
                    ></path>
                  </svg>
                  <span>{b}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
