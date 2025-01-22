import React, { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useSpring, animated } from "react-spring";
import AOS from "aos";
import "aos/dist/aos.css";
import { Icon } from "@iconify/react";

const projectsData = [
  {
    id: 1,
    image: "../../../images/Music-img.jpg",
    title: "Music  App",
    description:
      " Welcome to our lightweight music app, designed with HTML, CSS, and JavaScript. Enjoy a curated collection of limited tracks with seamless support for both desktop and Android platforms. Dive into music, anytime, anywhere!",
    liveDemoLink: "https://codewithsalim12.github.io/Free-Music-app.github.io/",
    sourceCodeLink:
      "https://github.com/Codewithsalim12/Free-Music-app.github.io",
  },
  {
    id: 2,
    image: "../../../images/portfolio-img.webp",
    title: "My PortFolio",
    description:
      " Explore my personal portfolio, crafted with Vite, React, Tailwind CSS, and Framer Motion. Showcasing my skills and projects, the design is responsive, fast, and brought to life with smooth animations. Discover my journey and creativity in web development!",
    liveDemoLink: "/",
    sourceCodeLink: "/",
  },
  {
    id: 3,
    image: "../../../images/quiz-app.png",
    title: "Quiz App",
    description:
      "Challenge yourself with our interactive quiz app featuring a variety of topics like Math, Coding, Geography, and Science. Complete quizzes within set time limits, and view your score instantly after finishing. Test your knowledge and track your progress!",
    liveDemoLink: "https://quiz-app-lovat-tau.vercel.app/",
    sourceCodeLink: "https://github.com/Codewithsalim12/Quiz-App",
  },
  {
    id: 4,
    image: "../../../images/Blog.avif",
    title: "TechBlog",
    description:
      "Welcome to TechBlog, Tech Blog is a programming-focused platform built with Next.js, React, TailwindCSS, and Contentlayer. It showcases coding tutorials, tech guides, and developer insights in a sleek, responsive, and easy-to-manage interface",
    liveDemoLink: "https://tech-blog-ten-iota.vercel.app/",
    sourceCodeLink: "https://github.com/Codewithsalim12/Tech-Blog",
  },
  {
    id: 5,
    image: "../../../images/Linktree.png",
    title: "Linktree Clone",
    description:
      "Welcome to LinkTree Clone, an open-source project built with React, Express, Node.js, MongoDB, and TailwindCSS. This platform is designed to provide a customizable and responsive solution for managing and sharing multiple links in one place.",
    liveDemoLink: "https://linktree-clone-omega-red.vercel.app/",
    sourceCodeLink: "https://github.com/Codewithsalim12/Linktree-clone",
  },
  {
    id: 6,
    image: "../../../images/Shortlinks_blog.png",
    title: "URL Shortener",
    description:
      "Welcome to Bitlinks, a sleek and efficient URL shortener built with modern technologies, designed to simplify link sharing and management. Create short, customized links with ease, making your URLs more concise and user-friendly",
    liveDemoLink: "https://bitlinks-omega.vercel.app/",
    sourceCodeLink: "https://github.com/Codewithsalim12/Bitlinks",
  },
];

function ProjectCard({ project }) {
  const [isHovered, setHovered] = React.useState(false);

  const blurProps = useSpring({
    filter: isHovered ? "blur(5px)" : "blur(0px)",
    opacity: isHovered ? 0.9 : 1,
  });

  const overlayProps = useSpring({
    opacity: isHovered ? 1 : 0,
  });

  const handleButtonClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <Card
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      color="white"
      className="w-full max-w-sm dark:bg-black relative mx-auto mb-8 md:max-w-screen-md"
    >
      <animated.div style={blurProps}>
        <img
          src={project.image}
          alt={project.title}
          className="rounded-t-lg object-cover w-auto h-64 md:h-64"
        />
        <Typography className="text-lg text-black dark:text-white flex justify-center font-semibold mx-3 my-6 font-poppins">
          {project.title}
        </Typography>
      </animated.div>
      <animated.div
        style={{
          ...overlayProps,
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
          borderRadius: "10px",
          padding: "10px",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        }}
        className="bg-white dark:bg-black"
      >
        <Typography className="text-xl text-black dark:text-white font-semibold mb-2 font-poppins">
          {project.title}
        </Typography>

        <CardBody>
          <p className="text-sm text-black dark:text-white">
            {project.description}
          </p>
        </CardBody>

        <div className="flex mt-3">
          <Button
            variant="text"
            onClick={() => handleButtonClick(project.liveDemoLink)}
            className="mr-4 flex items-center rounded-full text-second font-medium dark:hover:bg-gray-50"
          >
            <Icon
              icon="material-symbols-light:play-circle"
              height={52}
              width={52}
              style={{ marginRight: "5px" }}
            />
            <span>Live Demo</span>
          </Button>
          <Button
            variant="text"
            onClick={() => handleButtonClick(project.sourceCodeLink)}
            className="flex items-center rounded-full text-second font-medium dark:hover:bg-gray-50"
          >
            <Icon
              icon="mdi:github"
              height={52}
              width={52}
              style={{ marginRight: "5px" }}
            />
            <span>Source Code</span>
          </Button>
        </div>
      </animated.div>
    </Card>
  );
}

function Projects() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      data-aos="fade-in"
      data-aos-duration="1500"
      data-aos-mirror="true"
      id="projects"
      className="flex flex-col items-center p-4 md:p-8 scroll-mt-64 md:scroll-mt-28"
    >
      <div className="w-full text-center">
        <Typography
          variant="h1"
          color="black"
          className="underline text-center dark:text-white font-medium text-4xl md:text-5xl font-poppins"
        >
          My Projects
        </Typography>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 lg:gap-4 items-center mt-12">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} className="mb-4" />
        ))}
      </div>
    </div>
  );
}

export default Projects;