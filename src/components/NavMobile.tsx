import { motion } from "framer-motion";
import { XIcon } from "@heroicons/react/outline";
import { MenuAlt3Icon } from "@heroicons/react/outline";

import { Link } from "react-scroll";
import { useState } from "react";

interface NavMobileProps {}

const NavMobile = ({}: NavMobileProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const circleVariants = {
    hidden: {
      scale: 0,
    },
    visible: {
      scale: 180,
      transition: {
        type: "spring",
        stiffness: 160,
        damping: 60,
      },
    },
  };

  const ulVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.1,
      },
    },
  };

  return (
    <nav className={"relative"}>
      <div
        onClick={() => setIsOpen(true)}
        className={"cursor-pointer text-white"}
      >
        <MenuAlt3Icon className={"w-8 h-8"} />
      </div>

      <motion.div
        initial={"hidden"}
        variants={circleVariants}
        animate={isOpen ? "visible" : "hidden"}
        className="w-4 h-4 rounded-full bg-accent fixed top-0 right-0"
      />
      <motion.ul
        variants={ulVariants}
        initial="hidden"
        animate={isOpen ? "visible" : ""}
        className={`${
          isOpen ? "right-0" : "-right-full"
        } fixed top-0 bottom-0 w-full flex flex-col justify-center items-center transition-all duration-300 overflow-hidden`}
      >
        <div
          onClick={() => setIsOpen(false)}
          className="cursor-pointer absolute top-8 right-8"
        >
          <XIcon className="w-8 h-8" />
        </div>

      </motion.ul>
    </nav>
  );
};

export { NavMobile };
