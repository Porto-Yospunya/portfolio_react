import React from 'react';
import { motion } from 'motion/react';

import { BiLogoGithub, BiLogoFacebook, BiLogoInstagram } from 'react-icons/bi';
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

const Footer = () => {

  const informations = [
    { label: "yospunyaporto@gmail.com", icon: <MdEmail /> },
    { label: "082-942-0255", icon: <MdPhone /> },
    { label: "Phitsanulok, Thailand", icon: <MdLocationOn /> },
  ]

  const contacts = [
    { icon: <BiLogoGithub />, link: "https://github.com/Porto-Yospunya/" },
    { icon: <BiLogoFacebook />, link: "https://www.facebook.com/wacharapong.yospunya/" },
    { icon: <BiLogoInstagram />, link: "https://www.instagram.com/p.porto_o/" },
  ]

  const scaleVariants = {
    inView: {
      scale: 0,
    },
    outView: {
      scale: 1,
    },
  }

  return (
    <>
      {/* Contact */}
      <div
        id="contact"
        className="relative bg-theme02 text-white py-[2rem]"
      >
        <div className="px-[1rem] mobile-hozi:px-[8rem] w-full">
          <div className="text-center text-[3rem] font-bold py-[3rem]">
            <h1 className="text-white">Contact</h1>
          </div>
          <div className="grid tablet:grid-cols-2 w-full gap-[7rem] tablet:gap-0">
            <form className="flex flex-col placeholder-white text-[1.2rem] tablet:min-w-[500px] gap-[1rem]">
              <div
                variants={scaleVariants}
              >
                <label htmlFor="">Name</label>
                <input className="bg-theme03 px-[1rem] py-[0.6rem] w-full rounded-[10px]" type="text" placeholder="Enter your name" />
              </div>

              <div>
                <label htmlFor="">Email</label>
                <input className="bg-theme03 px-[1rem] py-[0.6rem] w-full rounded-[10px]" type="email" placeholder="Enter your email" />
              </div>

              <div>
                <label htmlFor="">Message</label>
                <textarea className="bg-theme03 px-[1rem] py-[0.6rem] w-full rounded-[10px] resize-none h-[10rem]" placeholder="Enter your message"></textarea>
              </div>

              <div className="py-[1rem] flex justify-center">
                <div
                  className="font-bold py-[0.6rem] px-[1.2rem] border-theme05 text-theme05 border-[3px] rounded-[10px] cursor-pointer w-fit hover:bg-theme03 hover:text-theme01 duration-300"
                >
                  Send Message
                </div>
              </div>
            </form>
            <div className="h-full w-full flex flex-col justify-center items-center gap-[1rem]">
              <ul className="flex flex-col gap-[1.2rem] highlight-black">
                {informations.map((info, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center gap-[0.6rem]"
                    variants={scaleVariants}
                    transition={{ duration: 0.5, delay: index / 10 }}
                    initial={"inView"}
                    whileInView={"outView"}
                  >
                    <span className="text-[1.8rem]">{info.icon}</span>
                    <h1 className="text-[1.4rem] border-b-[2] border-white">{info.label}</h1>
                  </motion.li>
                ))}
              </ul>
              <ul className="flex gap-[2rem]">
                {contacts.map((contact, index) => (
                  <motion.li
                    key={index}
                    transition={{ duration: 0.5, delay: index / 10 }}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                  >
                    <a href={contact.link} className="text-[3rem] p-[1rem]">{contact.icon}</a>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-theme03 w-full text-center text-white py-[1rem] text-[1rem]">
        © 2025 Porto. All rights reserved.
      </footer>
    </>
  );
}

export default Footer;