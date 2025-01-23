import React, { useEffect } from "react";
import { Typography, Card, CardBody } from "@material-tailwind/react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Icon } from "@iconify/react";

const servicesData = [
  {
    id: 1,
    icon: "mdi:web",
    title: "Web Designing",
    description:
      "Creating intuitive and visually appealing web designs tailored to user needs.",
    delay: 100,
    color: "blue",
  },
  {
    id: 2,
    icon: "mdi:code-tags",
    title: "Web Development",
    description:
      "Developing responsive and scalable websites using React, Next.js, and modern technologies.",
    delay: 200,
    color: "green",
  },
  {
    id: 3,
    icon: "mdi:palette",
    title: "Visual Design",
    description:
      "Enhancing user experiences with captivating visual designs and branding.",
    delay: 300,
    color: "purple",
  },
  {
    id: 4,
    icon: "mdi:cellphone-link",
    title: "Responsive Design",
    description:
      "Ensuring seamless experiences across all devices and screen sizes.",
    delay: 400,
    color: "orange",
  },
  {
    id: 5,
    icon: "mdi:tools",
    title: "Customization",
    description:
      "Offering tailored solutions to meet specific business requirements.",
    delay: 500,
    color: "red",
  },
];

function Services() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      id="services"
      data-aos="fade-up"
      data-aos-duration="1500"
      className="p-4 sm:p-8 md:p-16 text-black dark:text-white flex flex-col items-center justify-center"
    >
      {/* Small Heading */}
      <Typography
        variant="small"
        color="blue-gray"
        className="text-center uppercase font-xl text-sm md:text-base"
      >
        My Services
      </Typography>

      {/* Main Header */}
      <Typography
        variant="h2"
        color="black"
        className="mt-4 font-semibold text-3xl md:text-4xl text-center font-poppins dark:text-white"
      >
        What can you <strong>expect from me?</strong>
      </Typography>

      {/* Grid Container */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-screen-lg w-full">
        {servicesData.map((service) => (
          <Card
            key={service.id}
            className="w-full flex items-center justify-center p-4 sm:p-6 xs:min-h-[260px] sm:min-h-[220px] transition-transform hover:scale-105 hover:bg-gray-200 dark:hover:bg-gray-800 bg-white dark:bg-black shadow-md relative group"
            data-aos="fade-up"
            data-aos-delay={service.delay}
          >
            <CardBody className="text-center transition-transform group-hover:scale-110 group-hover:translate-y-[-5px]">
              <Icon
                icon={service.icon}
                className={`text-6xl text-${service.color}-500 mb-4 transition-colors group-hover:text-${service.color}-700`}
              />
              <Typography variant="h6" className="mb-2 font-poppins">
                {service.title}
              </Typography>
              <Typography
                variant="small"
                className="text-gray-600 font-poppins dark:text-gray-400 transition-colors group-hover:text-gray-800 dark:group-hover:text-gray-300"
              >
                {service.description}
              </Typography>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Services;
