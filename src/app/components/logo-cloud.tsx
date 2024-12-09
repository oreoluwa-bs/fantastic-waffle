import Image from "next/image";

export function LogoCloud() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2
          data-animation="fade-in-up"
          className="text-center text-sm/6 font-medium  text-soft-foreground"
        >
          Top Designers from companies like
        </h2>
        <div className="mx-auto mt-10 flex max-w-lg flex-wrap items-center justify-center gap-x-8 gap-y-10 sm:max-w-xl sm: sm:gap-x-14 lg:max-w-[960px]">
          <Image
            alt="Moniepoint"
            src="/logos/moniepoint.svg"
            width={117}
            height={32}
            loading="lazy"
            className="object-contain"
            data-animation="fade-in-up"
          />
          <Image
            alt="Figma"
            src="/logos/figma.svg"
            width={104}
            height={32}
            loading="lazy"
            className="object-contain"
            data-animation="fade-in-up"
          />
          <Image
            alt="Meta"
            src="/logos/meta.svg"
            width={90}
            height={32}
            loading="lazy"
            className="object-contain"
            data-animation="fade-in-up"
          />
          <Image
            alt="Piggyvest"
            src="/logos/piggyvest.svg"
            width={147}
            height={32}
            loading="lazy"
            className="object-contain"
            data-animation="fade-in-up"
          />
          <Image
            alt="Lateral Frontiers"
            src="/logos/lateral-frontiers.svg"
            width={111}
            height={32}
            loading="lazy"
            className="object-contain "
          />
          <Image
            alt="Ryvision"
            src="/logos/ryvision.svg"
            width={108}
            height={32}
            loading="lazy"
            className="object-contain"
            data-animation="fade-in-up"
          />
          <Image
            alt="Shuttlers"
            src="/logos/shuttlers.svg"
            width={128}
            height={32}
            loading="lazy"
            className="object-contain"
            data-animation="fade-in-up"
          />
          <Image
            alt="Pastel"
            src="/logos/pastel.svg"
            width={111}
            height={32}
            loading="lazy"
            className="object-contain"
            data-animation="fade-in-up"
          />
          <Image
            alt="Multigate"
            src="/logos/multigate.svg"
            width={176}
            height={32}
            loading="lazy"
            className="object-contain"
            data-animation="fade-in-up"
          />
          <Image
            alt="Lemfi"
            src="/logos/lemfi.svg"
            width={104}
            height={20}
            loading="lazy"
            className="object-contain"
            data-animation="fade-in-up"
          />

          <Image
            alt="HonyCoin"
            src="/logos/honeycoin.svg"
            width={168}
            height={32}
            loading="lazy"
            className="object-contain"
            data-animation="fade-in-up"
          />
        </div>
      </div>
    </div>
  );
}
