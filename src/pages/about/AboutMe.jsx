import React, { useState, useEffect } from "react";
import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineIcon,
  Typography,
  TimelineHeader,
  Avatar,
} from "@material-tailwind/react";
import AOS from "aos";
import "aos/dist/aos.css";
import Tilt from "react-parallax-tilt";
import { Icon } from "@iconify/react";

function AboutMe() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      data-aos="fade-in"
      data-aos-duration="1500"
      data-aos-mirror="true"
      id="about-me"
      className="text-black p-8 md:p-16 rounded-lg flex items-center justify-center scroll-mt-64 md:scroll-mt-28"
    >
      <div className="max-w-screen-md text-center">
        <Typography
          variant="h1"
          color="black"
          className="underline font-medium text-4xl md:text-5xl font-poppins dark:text-white"
        >
          About Me
        </Typography>

        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 items-center mt-12">
          <Tilt
            className="flex justify-center"
            tiltMaxAngleY={10}
            tiltMaxAngleX={10}
          >
            <img
              alt="MK"
              src="/images/profile-pic.jpg"
              className="w-2/3 md:w-1/3 md:hidden h-auto object-cover rounded-full mb-4"
            />
          </Tilt>

          <div className="mr-4 ml-4 md:mr-16 text-left max-w-full md:max-w-sm md:min-h-full flex-grow mb-4">
            <Typography
              color="black"
              className=" mb-4 mt-4 font-normal text-sm md:text-base font-poppins dark:text-white"
            >
              Passionate Frontend Developer eager to learn and grow in web
              development. Focused on building intuitive, user-friendly websites
              using React, Next.js, and modern frontend technologies. Seeking
              hands-on experience to enhance skills and deliver exceptional user
              experiences.
            </Typography>
            <div className="w-[22rem]">
              <Timeline>
                <TimelineItem className="h-28 hover:scale-105 transition-transform">
                  <TimelineConnector className="!w-[78px]" />
                  <TimelineHeader className="relative rounded-xl border border-blue-gray-50 bg-white dark:bg-black dar py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
                    <TimelineIcon
                      className="p-3 dark:bg-blue-gray-200"
                      variant="ghost"
                    >
                      <Avatar
                        src="../../../images/arkx_logo.png"
                        alt="ARK-X Logo"
                        style={{ objectFit: "contain" }}
                        size="md"
                      />
                    </TimelineIcon>
                    <div className="flex flex-col gap-1">
                      <Typography
                        variant="h6"
                        color="blue-gray"
                        className="font-base font-poppins dark:text-white"
                      >
                        Team Leader - GDC Baramulla
                      </Typography>
                      <Typography
                        variant="small"
                        color="gray"
                        className="font-normal font-poppins dark:text-white"
                      >
                        June 2023
                      </Typography>
                    </div>
                  </TimelineHeader>
                </TimelineItem>
                <TimelineItem className="h-28 hover:scale-105 transition-transform">
                  <TimelineConnector className="!w-[78px]" />
                  <TimelineHeader className="relative rounded-xl border border-blue-gray-50 bg-white dark:bg-black py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
                    <TimelineIcon
                      className="p-3 dark:bg-blue-gray-200"
                      variant="ghost"
                    >
                      <Avatar
                        src="../../../images/freelance-icon.png"
                        alt="Freelacne Logo"
                        style={{ objectFit: "contain" }}
                        size="md"
                      />
                    </TimelineIcon>
                    <div className="flex flex-col gap-1">
                      <Typography
                        variant="h6"
                        color="blue-gray"
                        className="font-base font-poppins dark:text-white"
                      >
                        Web Development Certification - Eduonix
                      </Typography>
                      <Typography
                        variant="small"
                        color="gray"
                        className="font-normal font-poppins dark:text-white"
                      >
                        Completed in 2025
                      </Typography>
                    </div>
                  </TimelineHeader>
                </TimelineItem>
                <TimelineItem className="h-28 hover:scale-105 transition-transform">
                  <TimelineHeader className="relative rounded-xl border border-blue-gray-50 bg-white dark:bg-black py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
                    <TimelineIcon
                      className="p-3 dark:bg-blue-gray-200"
                      variant="ghost"
                    >
                      <Avatar
                        src="../../../images/management-logo.png"
                        alt="Gym Management System Icon"
                        style={{ objectFit: "contain" }}
                        size="md"
                      />
                    </TimelineIcon>
                    <div className="flex flex-col gap-1">
                      <Typography
                        variant="h6"
                        color="blue-gray"
                        className="font-base font-poppins dark:text-white"
                      >
                        College Project - Gym Management System
                      </Typography>
                      <Typography
                        variant="small"
                        color="gray"
                        className="font-normal font-poppins dark:text-white"
                      >
                        Developed in 2023
                      </Typography>
                    </div>
                  </TimelineHeader>
                </TimelineItem>
              </Timeline>
            </div>
          </div>
          <Tilt tiltMaxAngleY={10} tiltMaxAngleX={10} gyroscope={true}>
            <img
              alt="MK"
              src="https://avatars.githubusercontent.com/u/146638041?v=4"
              className="h-auto object-cover rounded-full hidden md:block"
              style={{
                filter: "brightness(1.2) contrast(1.3) saturate(1.5) blur(0)",
                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
              }}
            />
          </Tilt>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
