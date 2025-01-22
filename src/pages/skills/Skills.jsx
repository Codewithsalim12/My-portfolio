import React, { useState, useEffect } from "react";
import { Typography } from "@material-tailwind/react";
import { Icon } from "@iconify/react";
import AOS from "aos";
import "aos/dist/aos.css";
import Marquee from "react-fast-marquee";
const Skills = () => {
  const skills = [
    {
      name: "React",
      icon: <Icon icon="devicon:react" width="4em" height="4em" />,
      link: "https://reactjs.org/",
    },
    {
      name: "Next.js",
      icon: <Icon icon="devicon:nextjs" width="4em" height="4em" />,
      link: "https://nextjs.org/",
    },
    {
      name: "HTML5",
      icon: <Icon icon="devicon:html5" width="4em" height="4em" />,
      link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
      name: "CSS3",
      icon: <Icon icon="devicon:css3" width="4em" height="4em" />,
      link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    {
      name: "JavaScript",
      icon: <Icon icon="devicon:javascript" width="4em" height="4em" />,
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      name: "Tailwind CSS",
      icon: <Icon icon="devicon:tailwindcss" width="4em" height="4em" />,
      link: "https://tailwindcss.com/",
    },
    {
      name: "Material-UI",
      icon: <Icon icon="simple-icons:mui" width="4em" height="4em" />,
      link: "https://mui.com/",
    },
    {
      name: "Responsive Design",
      icon: <Icon icon="mdi:responsive" width="4em" height="4em" />,
      link: "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design",
    },
    {
      name: "UI/UX Design",
      icon: (
        <Icon icon="ic:baseline-design-services" width="4em" height="4em" />
      ),
      link: "https://www.interaction-design.org/",
    },
    {
      name: "Figma",
      icon: <Icon icon="logos:figma" width="4em" height="4em" />, // Reliable Figma logo
      link: "https://figma.com/",
    },
    {
      name: "Git",
      icon: <Icon icon="devicon:git" width="4em" height="4em" />,
      link: "https://git-scm.com/",
    },
    {
      name: "Framer Motion",
      icon: <Icon icon="simple-icons:framer" width="4em" height="4em" />,
      link: "https://www.framer.com/motion/",
    },
    {
      name: "SEO Optimization",
      icon: <Icon icon="mdi:magnify-scan" width="4em" height="4em" />, // Better SEO icon
      link: "https://developers.google.com/search",
    },
  ];

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      id="skills"
      data-aos="fade-in"
      data-aos-duration="1500"
      data-aos-mirror="true"
      className="text-black dark:text-white rounded-5 p-8 md:p-16 scroll-mt-64 md:scroll-mt-28"
    >
      <div className="w-full">
        <Typography
          variant="h1"
          color="black"
          className="underline text-center text-black dark:text-white font-medium text-4xl md:text-5xl font-poppins"
        >
          My Skills
        </Typography>
        <Marquee pauseOnHover>
          <div className="flex flex-nowrap overflow-x-auto mt-12">
            {skills.map((skill) => (
              <a
                key={skill.name}
                href={skill.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center mr-4"
              >
                <div className="p-4 bg-primary rounded-full">{skill.icon}</div>
                <Typography
                  variant="h6"
                  align="center"
                  className="ml-2 font-poppins"
                >
                  {skill.name}
                </Typography>
              </a>
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Skills;
