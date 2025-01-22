import React from "react";
import { Typography, Button } from "@material-tailwind/react";
import { Icon } from "@iconify/react";

function Footer() {
  const handleButtonClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <footer className="w-full rounded-lg border shadow-md bg-white dark:bg-black dark:border-black">
      <div className="flex flex-col items-center ">
        <div className="flex">
          <Button
            className="dark:text-white"
            variant="text"
            aria-label="LinkedIn"
            onClick={() =>
              handleButtonClick("https://www.linkedin.com/in/mohammadsalimmir")
            }
          >
            <Icon
              icon="mdi:linkedin"
              height={36}
              width={36}
              style={{ marginRight: "2px" }}
            />
          </Button>
          <Button
            className="dark:text-white"
            variant="text"
            aria-label="GitHub"
            onClick={() =>
              handleButtonClick("https://github.com/Codewithsalim12")
            }
          >
            <Icon
              icon="mdi:github"
              height={36}
              width={36}
              style={{ marginRight: "2px" }}
            />
          </Button>
          <Button
            className="dark:text-white"
            variant="text"
            aria-label="YouTube"
            onClick={() =>
              handleButtonClick("https://www.instagram.com/mohammadsalim__567/")
            }
          >
            <Icon
              icon="mdi:instagram"
              height={36}
              width={36}
              style={{ marginRight: "2px" }}
            />
          </Button>
        </div>

        <Typography
          color="blue-gray"
          size="lg"
          className="text-center mt-2 font-normal font-poppins dark:text-white"
        >
          © 2024 Mohammad salim. All Rights Reserved.
        </Typography>
      </div>
    </footer>
  );
}

export default Footer;
