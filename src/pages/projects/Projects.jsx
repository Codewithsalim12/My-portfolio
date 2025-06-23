import React, { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import AOS from "aos";
import "aos/dist/aos.css";
import { Icon } from "@iconify/react";
import { Typography } from "@material-tailwind/react";

const projectsData = [
  {
    id: 1,
    image: "../../../images/salimscorner.png",
    title: "Salim's Corner  Blog",
    description:
      "A modern blog using React, Tailwind, and Mernstack. Explore personal life and Islamic reflections with tech content in a clean, fast, and responsive interface.",
    liveDemoLink: "https://salimscorner.onrender.com/",
    sourceCodeLink: "https://github.com/Codewithsalim12/Salim-sCorner",
  },
  {
    id: 2,
    image: "../../../images/web-developer-portfolio.png",
    title: "My Portfolio",
    description:
      "A creative portfolio built with React, Vite, and Tailwind CSS. It showcases projects with smooth animations, modern design, and responsive layout.",
    liveDemoLink: "https://my-portfolio-seven-eta-27.vercel.app/",
    sourceCodeLink: "https://github.com/Codewithsalim12/My-portfolio",
  },
  {
    id: 3,
    image: "../../../images/Quiz.png",
    title: "Quiz App",
    description:
      "Challenge yourself with quizzes in coding, math, and science. Built using React with scoring, timers, and sleek UI — responsive on all the devices...",
    liveDemoLink: "https://quiz-app-lovat-tau.vercel.app/",
    sourceCodeLink: "https://github.com/Codewithsalim12/Quiz-App",
  },
  {
    id: 4,
    image: "../../../images/Techblog2.png",
    title: "TechBlog",
    description:
      "A tech blog built with Next.js, Tailwind CSS, and MDX. Find tutorials, dev insights, and fullstack resources with a clean and minimal interface.",
    liveDemoLink: "https://tech-blog-ten-iota.vercel.app/",
    sourceCodeLink: "https://github.com/Codewithsalim12/Tech-Blog",
  },
  {
    id: 5,
    image:
      "https://www.figma.com/community/resource/89256f5a-c522-41ec-a446-89d9d5322dc6/thumbnail",
    title: "Mirrentx",
    description:
      "A rental web app built with Next.js, Tailwind CSS, and the MERN stack. List or rent properties from one place with a responsive and clean layout",
    liveDemoLink: "https://mirren-tx.vercel.app/",
    sourceCodeLink: "https://github.com/Codewithsalim12/MirrenTX",
  },
  {
    id: 6,
    image: "../../../images/viralhash.png",
    title: "ViralHash",
    description:
      "ViralHash is a fullstack hashtag generator using React, Vite, and Tailwind CSS. Create viral, niche, fast with a clean and modern layout.",
    liveDemoLink: "https://viralhash.vercel.app/",
    sourceCodeLink: "https://github.com/Codewithsalim12/ViralHash",
  },
];

function ProjectCard({ project }) {
  const [isHovered, setHovered] = useState(false);

  const cardSpring = useSpring({
    transform: isHovered ? "scale(1.015)" : "scale(1)",
    boxShadow: isHovered
      ? "0 12px 28px rgba(0,0,0,0.2)"
      : "0 4px 14px rgba(0,0,0,0.1)",
    config: { tension: 200, friction: 20 },
  });

  const handleButtonClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <animated.div
      style={cardSpring}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative bg-gradient-to-br from-gray-100 via-white to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl overflow-hidden shadow-lg backdrop-blur-md transition-all duration-300"
    >
      <div className="p-4">
        <div className="relative">
          {/* Backdrop shadow */}
          <div className="absolute inset-0 z-0 rounded-lg blur-xl opacity-50 bg-gradient-to-br from-blue-400 to-indigo-500"></div>

          {/* Main image */}
          <img
            src={project.image}
            alt={project.title}
            className="relative z-10 w-full h-48 object-contain bg-white dark:bg-gray-800 p-3 rounded-lg shadow-md"
          />
        </div>
        <div className="mt-4">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            {project.title}
          </h3>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            {project.description}
          </p>
        </div>
        <div className="flex justify-start gap-3 mt-6">
          <button
            onClick={() => handleButtonClick(project.liveDemoLink)}
            className="text-xs px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 shadow hover:shadow-md flex items-center gap-1"
          >
            <Icon icon="material-symbols-light:play-circle" width={16} />
            Live
          </button>
          <button
            onClick={() => handleButtonClick(project.sourceCodeLink)}
            className="text-xs px-3 py-1.5 rounded-full bg-gradient-to-r from-gray-700 to-black text-white hover:from-gray-800 hover:to-gray-900 transition-all duration-300 shadow hover:shadow-md flex items-center gap-1"
          >
            <Icon icon="mdi:github" width={16} />
            Code
          </button>
        </div>
      </div>
    </animated.div>
  );
}

function Projects() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section
      id="projects"
      data-aos="fade-up"
      data-aos-duration="1000"
      className="px-4 py-16 md:px-12 lg:px-24 bg-gray-50 dark:bg-black"
    >
      <Typography
        variant="h2"
        className="text-center text-3xl md:text-5xl font-bold underline dark:text-white"
      >
        My Projects
      </Typography>

      <div className="grid gap-10 mt-12 sm:grid-cols-2 lg:grid-cols-3">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
