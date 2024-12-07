import { UsersIcon } from "~/components/icons/users";
import { SectionIcon } from "~/components/ui/section-icon";
import { Designers } from "./designers";
import { LogoCloud } from "./logo-cloud";

export function SocialProof() {
  return (
    <section className="relative isolate overflow-clip">
      <div className="pt-44 relative z-0">
        <div className="flex justify-center items-center mb-10">
          <div className="container mx-auto px-4 max-w-[620px]">
            <h2 className="text-3xl md:text-4xl   lg:text-5xl text-center font-medium mt-2 mb-4 lg:leading-[57.2px] tracking-tighter">
              With over 1k
              <span className="align-middle px-4">
                <SectionIcon>
                  <UsersIcon />
                </SectionIcon>
              </span>
              designers like you hooked on Pro
            </h2>
            <p className="md:text-lg max-w-[480px] mx-auto  text-center text-balance">
              Don’t be left behind, join thousands of top designers with
              unlimited access to resources and a thriving community on
              DesignWhiz Pro
            </p>
          </div>
        </div>
        <Designers />
        <LogoCloud />
      </div>
    </section>
  );
}

// function Arc() {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width="1728"
//       height="2611"
//       fill="none"
//       viewBox="0 0 1728 2611"
//     >
//       <g filter="url(#filter0_di_1_21504)">
//         <path
//           fill="url(#paint0_linear_1_21504)"
//           d="M2351 2606c0-202.4-38.45-1471.73-113.15-1658.727-74.71-186.997-184.2-356.906-322.24-500.028-138.03-143.121-301.9-256.651-482.25-334.107S1020.21 5 825 5 475.991 35.681 295.641 113.138C115.291 190.594-48.58 304.124-186.614 447.245c-138.035 143.122-247.529 313.031-322.233 500.028S-622 2403.6-622 2606h2973"
//         ></path>
//       </g>
//       <defs>
//         <linearGradient
//           id="paint0_linear_1_21504"
//           x1="864.499"
//           x2="865.601"
//           y1="-4.185"
//           y2="2056.7"
//           gradientUnits="userSpaceOnUse"
//         >
//           <stop stopColor="#fff"></stop>
//           <stop offset="0.5" stopColor="#fff"></stop>
//           <stop offset="1" stopColor="#fff"></stop>
//         </linearGradient>
//         <filter
//           id="filter0_di_1_21504"
//           width="2982.37"
//           height="2610.37"
//           x="-626.684"
//           y="0.316"
//           colorInterpolationFilters="sRGB"
//           filterUnits="userSpaceOnUse"
//         >
//           <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
//           <feColorMatrix
//             in="SourceAlpha"
//             result="hardAlpha"
//             values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
//           ></feColorMatrix>
//           <feOffset></feOffset>
//           <feGaussianBlur stdDeviation="2.342"></feGaussianBlur>
//           <feComposite in2="hardAlpha" operator="out"></feComposite>
//           <feColorMatrix values="0 0 0 0 0.133333 0 0 0 0 0.164706 0 0 0 0 0.207843 0 0 0 0.08 0"></feColorMatrix>
//           <feBlend
//             in2="BackgroundImageFix"
//             result="effect1_dropShadow_1_21504"
//           ></feBlend>
//           <feBlend
//             in="SourceGraphic"
//             in2="effect1_dropShadow_1_21504"
//             result="shape"
//           ></feBlend>
//           <feColorMatrix
//             in="SourceAlpha"
//             result="hardAlpha"
//             values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
//           ></feColorMatrix>
//           <feOffset dy="4"></feOffset>
//           <feGaussianBlur stdDeviation="6"></feGaussianBlur>
//           <feComposite
//             in2="hardAlpha"
//             k2="-1"
//             k3="1"
//             operator="arithmetic"
//           ></feComposite>
//           <feColorMatrix values="0 0 0 0 0.886275 0 0 0 0 0.890196 0 0 0 0 0.94902 0 0 0 0.5 0"></feColorMatrix>
//           <feBlend in2="shape" result="effect2_innerShadow_1_21504"></feBlend>
//         </filter>
//       </defs>
//     </svg>
//   );
// }
