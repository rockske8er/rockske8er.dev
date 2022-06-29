import { useEffect, useState } from "react";

import classes from "classnames";
import Link from "next/link";
import { Socials } from "./Socials";
import { NavMobile } from "./NavMobile";
import { Nav } from "./Nav";

interface HeaderProps {}

const Header = ({}: HeaderProps) => {
  const [bg, setBg] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  }, []);

  return (
    <header
      className={classes(
        "flex items-center fixed top-0 w-full text-white z-10 transition-all duration-300",
        {
          "bg-tertiary h-20": bg,
          "h-24": !bg,
        }
      )}
    >
      <div className="container mx-auto h-full flex items-center justify-between">
        {/* logo */}
        <Link href={"/"}>
          <a>Rockske8er.dev</a>
        </Link>
        {/* nav */}
        <div className="hidden lg:block">
          <Nav />
        </div>
        {/* Socials */}
        <div className="hidden lg:block">
          <Socials />
        </div>
        {/* nav mobile*/}
        <div className="lg:hidden">
          <NavMobile />
        </div>
      </div>
    </header>
  );
};

export { Header };
