import Image from "next/image";
import { FooterSvg } from "./footer-svg";
import { InstagramLogo } from "./icons/instagram";
import { LinkedinLogo } from "./icons/linkedin";
import { TwitterLogo } from "./icons/twitter";
import { Button } from "./ui/button";

export function Footer() {
  return (
    <footer className="footer relative overflow-clip">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-10  md:gap-16 lg:gap-28">
          <div>
            <Profile />
          </div>
          <div>
            <Menu />
          </div>
          <div>
            <SubscribeToNewsletter />
          </div>
        </div>
      </div>
      <div className="w-full mt-14">
        <FooterSvg />
      </div>
      <Image
        src={"/footer-overlay.webp"}
        alt=""
        fill
        loading="lazy"
        className="opacity-10 -z-[1] object-top object-cover"
      />
    </footer>
  );
}

function Profile() {
  return (
    <div>
      <div className="text-sub-foreground mb-6 tracking-tight">
        <span className="font-semibold">DesignWhiz</span>
        <span className="text-sm text-soft-foreground">
          {" "}
          - A community for designers
        </span>
      </div>
      <nav>
        <ul className="flex gap-2 flex-wrap text-sm text-soft-foreground">
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Advertise</a>
          </li>
          <li>
            <a href="#">Terms</a>
          </li>
          <li>
            <a href="#">Support</a>
          </li>
        </ul>
      </nav>
      <span className="inline-block text-soft-foreground text-sm mt-3">
        © 2024 DesignWhiz. All rights reserved.
      </span>
      <nav className="mt-6">
        <ul className="flex gap-4 flex-wrap text-sm text-soft-foreground">
          <li>
            <a
              href="#"
              className="bg-[#98A2B3] flex items-center justify-center size-6 rounded-full"
            >
              <TwitterLogo />
              <span className="sr-only">Twitter</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="bg-[#98A2B3] flex items-center justify-center size-6 rounded-full"
            >
              <InstagramLogo />
              <span className="sr-only">Instagram</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="bg-[#98A2B3] flex items-center justify-center size-6 rounded-full"
            >
              <LinkedinLogo />
              <span className="sr-only">Linkedin</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

function Menu() {
  return (
    <div>
      <h3 className="text-soft-foreground mb-4 tracking-tight">Menu</h3>
      <nav>
        <ul className="grid gap-y-4 gap-x-5 text-lg font-medium grid-cols-2  md:grid-cols-3">
          <li>
            <a href="#">Frames</a>
          </li>
          <li>
            <a href="#">Connect</a>
          </li>
          <li>
            <a href="#">Resources</a>
          </li>
          <li>
            <a href="#">Feed</a>
          </li>
          <li>
            <a href="#">Jobs</a>
          </li>
          <li>
            <a href="#" className="font-semibold text-primary">
              Pro
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

function SubscribeToNewsletter() {
  return (
    <div>
      <h3 className="text-soft-foreground mb-4 tracking-tight">
        Subscribe to our Newsletter
      </h3>
      <form method="POST">
        <div className="flex items-center gap-4">
          <div className="flex-1">
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              className="rounded-full w-full flex h-14 bg-background px-6 py-2 text-base border border-[##98A2B3] placeholder:text-sm"
            />
          </div>

          <div>
            <Button className="subscribe-button h-16 w-[120px]">
              Subscribe
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
