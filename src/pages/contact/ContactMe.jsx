import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Button } from "@material-tailwind/react";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactMe = () => {
  const [successAlert, setSuccessAlert] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const formData = new FormData(form);
    const firstName = formData.get("from_name");
    const email = formData.get("from_email");
    const message = formData.get("message");

    if (!firstName || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }

    emailjs
      .sendForm(
        "service_2obso4f", // Replace with your EmailJS Service ID
        "template_eiqgd6m", // Replace with your EmailJS Template ID
        form,
        "iOibMqK03nJ5Bwkzi" // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          setSuccessAlert(true);
          setTimeout(() => setSuccessAlert(false), 4000); // Hide the alert after 4 seconds
        },
        () => {
          alert("Failed to send the message. Please try again.");
        }
      );

    form.reset();
  };

  return (
    <div
      data-aos="fade-zoom-in"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1200"
      data-aos-easing="ease-in-out"
      data-aos-once="false"
      id="contact-me"
      className="space-y-2 items-center justify-center"
      style={{ borderRadius: "5px", marginBottom: "50px" }}
    >
      <div className="w-full p-0" style={{ textAlign: "center" }}>
        <h1 className="underline text-center dark:text-white font-medium text-4xl md:text-5xl font-poppins">
          Contact Me
        </h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center mt-12"
        >
          <div className="md:w-4/5 lg:w-3/4 xl:w-2/3">
            <div className="flex flex-col md:flex-row">
              <input
                name="from_name"
                type="text"
                className="my-2 py-2 px-4 rounded-md text-gray-900 bg-white w-full md:w-1/2 md:mr-2 outline-none focus:ring-2 focus:ring-second"
                placeholder="Your Name"
                required
              />
              <input
                name="from_email"
                type="email"
                className="my-2 py-2 px-4 rounded-md text-gray-900 bg-white w-full md:w-1/2 md:ml-2 outline-none focus:ring-2 focus:ring-second"
                placeholder="Your Email"
                required
              />
            </div>
            <textarea
              name="message"
              rows="5"
              className="my-2 py-2 px-4 rounded-md text-gray-900 bg-white w-full outline-none focus:ring-2 focus:ring-second"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <Button
            type="submit"
            ripple={true}
            className="font-poppins mx-2 flex items-center justify-center w-full md:w-4/5 lg:w-3/4 xl:w-2/3 mt-4 bg-second text-white border-2 border-second hover:bg-green-500 hover:border-green-500 transition duration-300 mb-4 md:mr-2 dark:bg-second dark:hover:bg-green-500 dark:text-gray-200 dark:hover:border-green-500"
          >
            Send Message
          </Button>
        </form>
        {successAlert && (
          <div className="mt-4 w-full md:w-4/5 lg:w-3/4 xl:w-2/3 p-3 bg-green-100 text-green-700 rounded-lg shadow-md text-sm font-medium">
            Your message has been sent successfully!
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactMe;
