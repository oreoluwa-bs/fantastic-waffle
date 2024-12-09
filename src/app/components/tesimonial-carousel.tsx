"use client";

import { StarIcon } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel";
import { cn } from "~/lib/utils";

const testimonials = [
  {
    image: "/testimonials/testimonial-1.webp",
    rating: 5,
    testimony:
      "DesignWhiz is not just a website; it's a canvas for boundless imagination and artistic collaboration, setting the bar for inspiration and fostering a culture of creativity that transcends boundaries.",
    testifier: {
      image: "/testimonials/sonci-carey.webp",
      name: "Sonci Carey",
    },
  },
  {
    image: "/testimonials/testimonial-2.webp",
    rating: 5,
    testimony:
      "DesignWhiz is not just a website; it's a canvas for boundless imagination and artistic collaboration, setting the bar for inspiration and fostering a culture of creativity that transcends boundaries.",
    testifier: {
      image: "/testimonials/sonci-carey.webp",
      name: "Sonci Carey",
    },
  },
  {
    image: "/testimonials/testimonial-3.webp",
    rating: 5,
    testimony:
      "DesignWhiz is not just a website; it's a canvas for boundless imagination and artistic collaboration, setting the bar for inspiration and fostering a culture of creativity that transcends boundaries.",
    testifier: {
      image: "/testimonials/sonci-carey.webp",
      name: "Sonci Carey",
    },
  },
  {
    image: "/testimonials/testimonial-4.webp",
    rating: 5,
    testimony:
      "DesignWhiz is not just a website; it's a canvas for boundless imagination and artistic collaboration, setting the bar for inspiration and fostering a culture of creativity that transcends boundaries.",
    testifier: {
      image: "/testimonials/sonci-carey.webp",
      name: "Sonci Carey",
    },
  },
  {
    image: "/testimonials/testimonial-5.webp",
    rating: 5,
    testimony:
      "DesignWhiz is not just a website; it's a canvas for boundless imagination and artistic collaboration, setting the bar for inspiration and fostering a culture of creativity that transcends boundaries.",
    testifier: {
      image: "/testimonials/sonci-carey.webp",
      name: "Sonci Carey",
    },
  },
  {
    image: "/testimonials/testimonial-6.webp",
    rating: 5,
    testimony:
      "DesignWhiz is not just a website; it's a canvas for boundless imagination and artistic collaboration, setting the bar for inspiration and fostering a culture of creativity that transcends boundaries.",
    testifier: {
      image: "/testimonials/sonci-carey.webp",
      name: "Sonci Carey",
    },
  },
];

export function TestimonialCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const { selectedIndex, scrollSnaps, onPageButtonClick } = usePageButton(api);

  return (
    <Carousel
      setApi={setApi}
      opts={{
        loop: true,
        align: "start",
      }}
      className="w-full"
      data-animation="fade-in"
    >
      <CarouselContent>
        {testimonials.map((t, index) => (
          <CarouselItem
            key={index}
            className="lg:flex-[0_0_calc(100%/4)] even:pt-7"
          >
            <span>
              <TestimonialCard testimonial={t} />
            </span>
          </CarouselItem>
        ))}
      </CarouselContent>

      <div className="relative flex items-center justify-center gap-1.5 mt-10">
        <CarouselPrevious className="static text-primary  translate-y-0 translate-x-0 mr-2.5" />

        {scrollSnaps.map((_, index) => {
          return (
            <button
              key={index}
              type="button"
              onClick={() => onPageButtonClick(index)}
              className={cn(
                "size-2 rounded-full bg-[rgba(108,80,224,0.2)]",
                index === selectedIndex && "bg-primary",
              )}
            />
          );
        })}

        <CarouselNext className="static text-primary  translate-y-0 translate-x-0 ml-2.5" />
      </div>
    </Carousel>
  );
}

type UsePageButtonType = {
  selectedIndex: number;
  scrollSnaps: number[];
  onPageButtonClick: (index: number) => void;
};

export const usePageButton = (emblaApi: CarouselApi): UsePageButtonType => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onPageButtonClick = useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi],
  );

  const onInit = useCallback((emblaApi: CarouselApi) => {
    if (!emblaApi) {
      return;
    }
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: CarouselApi) => {
    if (!emblaApi) {
      return;
    }
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit).on("reInit", onSelect).on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  return {
    selectedIndex,
    scrollSnaps,
    onPageButtonClick,
  };
};

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof testimonials)[0];
}) {
  return (
    <div className="testimonial-card bg-background p-1 rounded-[30px] overflow-hidden w-full">
      <div className="rounded-2xl overflow-hidden">
        <Image
          src={testimonial.image}
          alt=""
          width={333}
          height={221}
          loading="lazy"
          className="w-full"
        />
      </div>
      <div className="p-4">
        <div className="flex items-cente justify-center gap-0.5 mb-4">
          {Array.from(Array(testimonial.rating).keys()).map((i) => {
            return (
              <StarIcon key={i} className="fill-primary text-primary size-4" />
            );
          })}
        </div>
        <blockquote className="text-[#514D4B] tracking-tight text-center">
          {testimonial.testimony}
        </blockquote>
        <div className="text-center mt-4">
          <Image
            src={testimonial.testifier.image}
            alt=""
            width={48}
            height={48}
            loading="lazy"
            className="rounded-xl mx-auto mb-2"
          />
          <p className="text-[#514D4B] font-medium">
            {testimonial.testifier.name}
          </p>
        </div>
      </div>
    </div>
  );
}
