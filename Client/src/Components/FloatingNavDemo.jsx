import React from "react";
import FloatingNav from "./ui/floating-navbar"; // Adjust the path as needed
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";


export function FloatingNavDemo() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "/about",
      icon: <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
    },
    {
      name: "Profile",
      link: "/landing",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    }
  ];

  return (
    <div className="relative w-full">
      <FloatingNav navItems={navItems} />
      <DummyContent />
    </div>
  );
}

const DummyContent = () => {
  return (
      <>
      {/* <BackgroundBeamsDemo />
      <Home /> */}
      </>
  );
};
