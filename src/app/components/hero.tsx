import Image from "next/image";
import { RaynaLogo } from "~/components/icons/rayna";
import { RocketIcon } from "~/components/icons/rocket";
import { StarsIcon } from "~/components/icons/stars";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";

export function Hero() {
  return (
    <section className="relative isolate overflow-clip">
      <div className="flex items-center justify-center pt-20">
        <Image
          src="/temp-product.png"
          alt="product showcase"
          width={1055.23}
          height={437.21}
          className="-z-10"
          priority
        />
      </div>
      <div className="hero-overlay -mt-24 md:-mt-44 pt-24 h-[1158px]">
        <div className="flex justify-center items-center">
          <div className="container mx-auto px-4 max-w-[826px]">
            <div className="text-center relative z-10">
              <Badge className="badge-border-gradient">
                <StarsIcon />
                <span className="text-gradient">DsgnWhiz Pro</span>
              </Badge>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[56px] text-center font-medium mt-2 mb-4 lg:leading-[67.2px] tracking-tighter">
              Experience DesignWhiz on a whole different level 🚀
            </h1>
            <p className=" md:text-lg text-center text-balance">
              Subscribe to DesignWhiz pro to unlock exclusive access to design
              resources and enjoy unlimited premium features that boost your
              creative process.
            </p>
            <div className="flex flex-col sm:flex-row gap-10 items-center justify-center mt-10">
              <div className="text-sub-foreground">
                Brought to you by:
                <div className="flex gap-2 items-center">
                  <span>the creators of </span>
                  <span>
                    <RaynaLogo />
                  </span>
                </div>
              </div>
              <Button className="w-[164px]">
                <RocketIcon />
                Sign me up
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Image
        src="/sunrays.webp"
        alt=""
        fill={true}
        className="pointer-events-none"
      />
    </section>
  );
}
