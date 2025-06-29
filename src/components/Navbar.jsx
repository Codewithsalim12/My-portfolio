import React, { useState, useEffect } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Collapse,
  Card,
  Avatar,
} from "@material-tailwind/react";
import { Icon } from "@iconify/react";

export function NavBar() {
  const [openNav, setOpenNav] = useState(false);
  const pages = ["About Me", "Skills", "Projects", "Contact Me"];
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleToggle = () => {
    toggleDarkMode();
    document.documentElement.classList.toggle("dark", !darkMode);
  };

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 960) {
        setOpenNav(false);
      }
    });

    return () => {
      window.removeEventListener("resize", () => {});
    };
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {pages.map((page) => (
        <Typography
          key={page}
          as="li"
          variant="h6"
          color="blue-gray"
          className="p-1 font-medium font-poppins dark:text-white"
        >
          <a
            href={`#${page.toLowerCase().replace(/\s+/g, "-")}`}
            className="flex items-center hover:text-second transition-colors"
            onClick={() => setOpenNav(false)}
          >
            {page}
          </a>
        </Typography>
      ))}
    </ul>
  );

  return (
    <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-lg px-4 py-2 lg:px-8 lg:py-4 bg-white dark:bg-black dark:border-black">
      <div className="flex items-center justify-between text-black dark:text-white">
        <a href="#" className="cursor-pointer">
          <div className="flex items-center">
            <Avatar
              alt="MK"
              withBorder={true}
              src="https://avatars.githubusercontent.com/u/146638041?v=4"
              className="p-0.5"
              style={{ objectFit: "cover" }}
            />
            <span className="ml-2 text-xl sm:text-2xl font-semibold">
              Salim
            </span>
          </div>
        </a>
        <div className="mr-4 hidden lg:block">{navList}</div>
        <div className="flex items-center gap-4 justify-center">
          <div className="flex items-center gap-m-1">
            <div className="flex items-center justify-center w-full">
              <label
                htmlFor="toggle"
                className="flex items-center cursor-pointer"
              >
                <input
                  type="checkbox"
                  id="toggle"
                  className="sr-only peer"
                  checked={darkMode}
                  onChange={handleToggle}
                />
                <div
                  className={`block relative bg-gray-300 w-14 h-8 p-1 rounded-full before:absolute before:bg-white before:w-6 before:h-6 before:p-1 before:rounded-full before:transition-all before:duration-500 before:left-1 peer-checked:before:left-7 ${
                    darkMode ? "peer-checked:before:bg-black" : ""
                  }`}
                ></div>
              </label>
            </div>
          </div>
          <IconButton
            variant="text"
            className="ml-auto h-8 w-8 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <Icon icon="mdi:close" height={32} width={32} />
            ) : (
              <Icon icon="mdi:menu" height={32} width={32} />
            )}
          </IconButton>
        </div>
      </div>
      <Collapse open={openNav}>
        {navList}
        <div className="flex items-center gap-x-1">
          <Button
            onClick={(e) => {
              e.preventDefault();
              window.open(
                "https://www.instagram.com/mohammadsalim__567/",
                "_blank"
              );
              setOpenNav(!openNav);
            }}
            variant="text"
            size="sm"
            className="dark:text-white"
          >
            <Icon
              icon="mdi:instagram"
              height={24}
              width={24}
              style={{ fontSize: "1.5em", marginRight: "5px" }}
            />
          </Button>
          <Button
            onClick={(e) => {
              e.preventDefault();
              window.open("https://github.com/Codewithsalim12", "_blank");
              setOpenNav(!openNav);
            }}
            variant="text"
            size="sm"
            className="dark:text-white"
          >
            <Icon
              icon="mdi:github"
              height={24}
              width={24}
              style={{ fontSize: "1.5em", marginRight: "5px" }}
            />
          </Button>
          <Button
            onClick={(e) => {
              e.preventDefault();
              window.open(
                "https://www.linkedin.com/in/mohammadsalimmir/",
                "_blank"
              );
              setOpenNav(!openNav);
            }}
            variant="text"
            size="sm"
            className="dark:text-white"
          >
            <Icon
              icon="mdi:linkedin"
              height={24}
              width={24}
              style={{ fontSize: "1.5em", marginRight: "5px" }}
            />
          </Button>
        </div>
      </Collapse>
    </Navbar>
  );
}

export default NavBar;
