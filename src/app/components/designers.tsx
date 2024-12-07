import Image from "next/image";

const designers = [
  {
    headshot: "/designers/owoeye-olalekan.webp",
    name: "Owoeye Olalekan",
    alias: "@creativesauce",
    meta: {
      rotation: "-4deg",
    },
  },
  {
    headshot: "/designers/olamilekan-philip.webp",
    name: "Olamilekan Philip",
    alias: "@philodsgnr",
    meta: {
      rotation: "8deg",
      bgColor: "#D4AFBD",
    },
  },
  {
    headshot: "/designers/kabir-anifowose.webp",
    name: "Kabir Anifowose",
    alias: "@kabirr",
    meta: {
      rotation: "-6deg",
    },
  },
  {
    headshot: "/designers/raji-product-designer.webp",
    name: "Raji, Product Designer",
    alias: "@frapisky",
    meta: {
      rotation: "-2deg",
    },
  },
  {
    headshot: "/designers/aj.webp",
    name: "aj.",
    alias: "@theAjaNwachuku",
    meta: {
      rotation: "15deg",
    },
  },
  {
    headshot: "/designers/juwon-Olagoke.webp",
    name: "Juwon Olagoke",
    alias: "@@snazzdesign",
    meta: {
      rotation: "4deg",
    },
  },
  {
    headshot: "/designers/ozenua-oluwatobi.webp",
    name: "Ozenua Oluwatobi",
    alias: "@ozenua_",
    meta: {
      rotation: "-4deg",
    },
  },
  {
    headshot: "/designers/emisho-victor.webp",
    name: "Emisho Victor",
    alias: "@emishovictor",
    meta: {
      rotation: "10deg",
    },
  },
  {
    headshot: "/designers/anjola-adekunle.webp",
    name: "Anjola Adekunle",
    alias: "@only0neAnj",
    meta: {
      rotation: "-12deg",
    },
  },
  {
    headshot: "/designers/leslie-williams.webp",
    name: "Leslie Williams",
    alias: "@shugarDadddy",
    meta: {
      rotation: "8deg",
    },
  },
  {
    headshot: "/designers/alison-eyo.webp",
    name: "Alison Eyo 💐",
    alias: "@thealisoneyo",
    meta: {
      rotation: "5deg",
    },
  },
  {
    headshot: "/designers/segun-akinnibosun.webp",
    name: "Segun Akinnibosun",
    alias: "@_smute",
    meta: {
      rotation: "-12deg",
    },
  },
];

export function Designers() {
  return (
    <ul className="flex snap-x -space-x-4 scroll-pl-6 overflow-x-auto mx-auto max-w-[2000px] justify-center scrollbar-hide">
      {designers.map((d) => {
        return (
          <li
            key={d.alias}
            className="snap-center shrink-0 first:pl-6 last:pr-6 py-6"
          >
            <DesignerCard designer={d} />
          </li>
        );
      })}
    </ul>
  );
}

function DesignerCard({ designer }: { designer: (typeof designers)[0] }) {
  return (
    <div
      className="designer-card border-background border-2 rounded-[14px] overflow-hidden relative h-[183px] w-[128px] origin-[bottom_center]"
      style={{
        rotate: designer.meta.rotation ?? "0deg",
        backgroundColor: designer.meta.bgColor ?? "transparent",
      }}
    >
      <Image
        src={designer.headshot}
        alt={designer.name}
        fill
        loading="lazy"
        sizes="(max-width: 768px) 128px"
        className="object-cover object-center"
      />
      <div className="absolute bottom-1 left-1 right-1 rounded-lg px-2 py-2 bg-background">
        <h3 className="text-[11px] font-semibold leading-tight tracking-tight line-clamp-1 break-all">
          {designer.name}
        </h3>
        <p className="text-[9px] text-soft-foreground">{designer.alias}</p>
      </div>
    </div>
  );
}
