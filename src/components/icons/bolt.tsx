export function BoltIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="37"
      fill="none"
      viewBox="0 0 30 37"
    >
      <g filter="url(#a)">
        <path
          fill="#fff"
          d="M12.85 29.729c-.416.518-1.249.13-1.12-.522l1.888-9.584a.636.636 0 0 0-.625-.759H4.874a.636.636 0 0 1-.496-1.035l12.774-15.89c.417-.518 1.25-.13 1.12.522l-1.884 9.585a.636.636 0 0 0 .624.76h8.115c.535 0 .831.618.496 1.035z"
        ></path>
      </g>
      <defs>
        <filter
          id="a"
          width="29.164"
          height="35.906"
          x="0.419"
          y="0.426"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dy="2.545"></feOffset>
          <feGaussianBlur stdDeviation="1.909"></feGaussianBlur>
          <feComposite in2="hardAlpha" operator="out"></feComposite>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_23091"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_23091"
            result="shape"
          ></feBlend>
        </filter>
      </defs>
    </svg>
  );
}
