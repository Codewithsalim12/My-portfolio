import React, { useEffect } from "react";
import { Typography, Card, CardBody } from "@material-tailwind/react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Icon } from "@iconify/react";

function Services() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      id="services"
      data-aos="fade-up"
      data-aos-duration="1500"
      className="p-8 md:p-16 text-black dark:text-white flex flex-col items-center justify-center"
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
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-screen-lg">
        {/* Service 1 */}

        {/* Service 2 */}
        {/* Service 1 */}
        <Card
          className="flex items-center justify-center p-6 transition-transform hover:scale-105 hover:bg-gray-200 dark:hover:bg-gray-800 bg-white dark:bg-black shadow-md relative group"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <CardBody className="text-center transition-transform group-hover:scale-110 group-hover:translate-y-[-5px]">
            <Icon
              icon="mdi:web"
              className="text-5xl text-blue-500 mb-4 transition-colors group-hover:text-blue-700"
            />
            <Typography variant="h6" className="mb-2 font-poppins">
              Web Designing
            </Typography>
            <Typography
              variant="small"
              className="text-gray-600 font-poppins dark:text-gray-400 transition-colors group-hover:text-gray-800 dark:group-hover:text-gray-300"
            >
              Creating intuitive and visually appealing web designs tailored to
              user needs.
            </Typography>
          </CardBody>
        </Card>

        {/* Service 2 */}
        <Card
          className="flex items-center justify-center p-6 transition-transform hover:scale-105 hover:bg-gray-200 dark:hover:bg-gray-800 bg-white dark:bg-black shadow-md relative group"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <CardBody className="text-center transition-transform group-hover:scale-110 group-hover:translate-y-[-5px]">
            <Icon
              icon="mdi:code-tags"
              className="text-5xl text-green-500 mb-4 transition-colors group-hover:text-green-700"
            />
            <Typography variant="h6" className="mb-2 font-poppins">
              Web Development
            </Typography>
            <Typography
              variant="small"
              className="text-gray-600 font-poppins dark:text-gray-400 transition-colors group-hover:text-gray-800 dark:group-hover:text-gray-300"
            >
              Developing responsive and scalable websites using React, Next.js,
              and modern technologies.
            </Typography>
          </CardBody>
        </Card>

        {/* Service 3 */}
        <Card
          className="flex items-center justify-center p-6 transition-transform hover:scale-105 hover:bg-gray-200 dark:hover:bg-gray-800 bg-white dark:bg-black shadow-md relative group"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <CardBody className="text-center transition-transform group-hover:scale-110 group-hover:translate-y-[-5px]">
            <Icon
              icon="mdi:palette"
              className="text-5xl text-purple-500 mb-4 transition-colors group-hover:text-purple-700"
            />
            <Typography variant="h6" className="mb-2 font-poppins">
              Visual Design
            </Typography>
            <Typography
              variant="small"
              className="text-gray-600 font-poppins dark:text-gray-400 transition-colors group-hover:text-gray-800 dark:group-hover:text-gray-300"
            >
              Enhancing user experiences with captivating visual designs and
              branding.
            </Typography>
          </CardBody>
        </Card>

        {/* Service 4 */}
        <Card
          className="flex items-center justify-center p-6 transition-transform hover:scale-105 hover:bg-gray-200 dark:hover:bg-gray-800 bg-white dark:bg-black shadow-md relative group"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <CardBody className="text-center transition-transform group-hover:scale-110 group-hover:translate-y-[-5px]">
            <Icon
              icon="mdi:cellphone-link"
              className="text-5xl text-orange-500 mb-4 transition-colors group-hover:text-orange-700"
            />
            <Typography variant="h6" className="mb-2 font-poppins">
              Responsive Design
            </Typography>
            <Typography
              variant="small"
              className="text-gray-600 font-poppins dark:text-gray-400 transition-colors group-hover:text-gray-800 dark:group-hover:text-gray-300"
            >
              Ensuring seamless experiences across all devices and screen sizes.
            </Typography>
          </CardBody>
        </Card>

        {/* Service 5 */}
        <Card
          className="flex items-center justify-center p-6 transition-transform hover:scale-105 hover:bg-gray-200 dark:hover:bg-gray-800 bg-white dark:bg-black shadow-md relative group"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <CardBody className="text-center transition-transform group-hover:scale-110 group-hover:translate-y-[-5px]">
            <Icon
              icon="mdi:tools"
              className="text-5xl text-red-500 mb-4 transition-colors group-hover:text-red-700"
            />
            <Typography variant="h6" className="mb-2 font-poppins">
              Customization
            </Typography>
            <Typography
              variant="small"
              className="text-gray-600 font-poppins dark:text-gray-400 transition-colors group-hover:text-gray-800 dark:group-hover:text-gray-300"
            >
              Offering tailored solutions to meet specific business
              requirements.
            </Typography>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

export default Services;
