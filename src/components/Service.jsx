import React from 'react';
import { motion } from 'motion/react';

import web_app from './../assets/web_application.jpg';
import mobile_app from './../assets/mobile_application.jpg';
import backend from './../assets/backend.jpg';

const Service = () => {

  const services = [
    { label: "Wab Application Development", image: web_app, description: "Web design encompasses many different skills and disciplines in the production and maintenance of websites. The different areas of web design include web graphic design user interface design authoring, including standardised code and proprietary software user experience design and search engine" },
    { label: "Mobile Application Development", image: mobile_app, description: "We provide a range of mobile application development services including custom mobile development on Android platforms, building cross-platform apps, designing user experience and integrating novel mobile interfaces such as chat and voice" },
    { label: "Backend Development", image: backend, description: "Graphic design is a craft where professionals create visual content to communicate messages. By applying visual hierarchy and page layout techniques, designers use typography and pictures to meet users' specific needs." },
  ]

  return (
    <div className="grid tablet:grid-cols-3 gap-[3rem] overflow-hidden">
      {services.map((service, index) => (
        <motion.div
          className="bg-theme02 p-[1rem] rounded-[10px]"
          key={index}
          transition={{ duration: 0.5, delay: index / 20 }}
          initial={{ x: index + 1 * -100 }}
          whileInView={{ x: 0 }}
        >
          <div><img src={service.image} /></div>
          <h1 className="py-[1rem] text-[1.4rem] font-bold text-center">{service.label}</h1>
          <p className="text-[1.2rem]">{service.description}</p>
        </motion.div>
      ))}
    </div>
  );
}

export default Service;