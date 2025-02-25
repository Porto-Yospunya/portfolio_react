import { useState } from 'react';
import { motion } from 'motion/react';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './components/About';
import Skill from './components/Skill';
import Service from './components/Service';

import me1_1 from './assets/me-1-1.jpg';
import me3_4 from './assets/me-3-4.jpg';
import image_1_1 from './assets/image-1-1.png';
import image_3_4 from './assets/image-3-4.png';

const App = () => {

  const [isToggle, toggle] = useState(true);

  return (
    <div className="relative h-screen z-3 font-exo2">

      <Navbar />

      {/* Hero */}
      <section
        id="home"
        className="relative h-screen flex flex-col items-center gap-[5rem] justify-center tablet:justify-between bg-linear-to-t from-theme01 to-theme03 tablet:flex-row"
      >
        <div className="relative text-white flex flex-col left-0 tablet:left-40">
          <h1 className="text-[1.8rem] mobile-vert:text-[3rem] mobile-hozi:text-[4rem]">Watcharapong Yospunya</h1>
          <div className="flex tablet:justify-start justify-center items-center text-[1.6rem] mobile-vert:text-[2rem] gap-[1rem]">
            <h2 className="text-white">I'm a</h2>
            <h2 className="my-[20px] text-theme05 border-b-[3px]">Full-Stack Developer</h2>
          </div>
        </div>

        <div className="relative right-0 tablet:right-40 m-w-[300px] w-[300px] mobile-vert:w-[400px] m-h-[300px]">
          <motion.div
            transition={{ duration: 0.7 }}
            initial={{ rotate: 0 }}
            whileInView={{ rotate: -5 }}
            viewport={{ amount: 1 }}
            className="absolute bg-theme02 w-full h-full top-0 rounded-[20px]"
          />
          <motion.div
            transition={{ duration: 0.7 }}
            initial={{ rotate: 0 }}
            whileInView={{ rotate: 5 }}
            viewport={{ amount: 1 }}
          >
            <img className="relative rounded-[20px]" src={image_1_1} />
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="relative flex justify-center items-center py-[7rem] z-10 bg-theme01 overflow-hidden"
      >
        <div className="flex gap-[6rem] justify-center items-center tablet:flex-row flex-col">
          <motion.div
          className="relative z-2"
            transition={{ duration: 0.5 }}
            initial={{ x: 300 }}
            whileInView={{ x: 0 }}
          >
            <img className="min-w-[300px] max-w-[300px] mobile-hozi:max-w-[540px] rounded-[10px]" src={image_3_4} />
          </motion.div>

          <motion.div
            className="relative flex flex-col gap-[1rem] z-1"
            transition={{ duration: 0.5 }}
            initial={{ x: -300 }}
            whileInView={{ x: 0 }}
          >
            <div
              className="relative text-white cursor-pointer w-full rounded-[10px]"
              onClick={() => toggle(!isToggle)}
            >
              <div className="flex absolute justify-between w-full h-full items-center px-[3rem] mobile-hozi:px-[7rem] z-2 text-theme03 font-bold text-[1.2rem] border-3 border-theme02 rounded-[10px]">
                <h1>About</h1>
                <h1>Skill</h1>
              </div>
              <motion.div
                className="relative bg-theme02 w-[50%] text-center py-[0.4rem] rounded-[10px] z-3 font-bold text-[1.2rem] "
                transition={{ duration: 0.5 }}
                initial={{ x: isToggle ? 0 : "100%" }}
                animate={{ x: isToggle ? 0 : "100%" }}
              >
                {isToggle ? "About" : "Skill"}
              </motion.div>
            </div>
            <div className="flex flex-row-reverse overflow-hidden bg-theme02 w-[300px] mobile-hozi:w-[500px] h-[600px] rounded-[10px]">
              <motion.div
                className="p-[2rem] bg-theme02 min-w-[300px] mobile-hozi:min-w-[500px]"
                transition={{ duration: 0.5 }}
                initial={{ x: isToggle ? 0 : "100%" }}
                animate={{ x: isToggle ? 0 : "100%" }}
              >
                <About />
              </motion.div>
              <motion.div
                className="p-[2rem] bg-theme02 min-w-[300px] mobile-hozi:min-w-[500px]"
                transition={{ duration: 0.5 }}
                initial={{ x: isToggle ? "-100%" : "100%" }}
                animate={{ x: isToggle ? "-100%" : "100%" }}
              >
                <Skill />
              </motion.div>
            </div>
          </motion.div>
        </div>

      </section>

      {/* Service */}
      <section
        id="service"
        className="relative w-full px-[2rem] py-[6rem] z-10 bg-theme01 text-white"
      >
        <div className="flex flex-col justify-center mobile-vert:px-[5rem] gap-[1.4rem]">
          <div className="text-center text-[3rem] font-bold">
            <h1>Services</h1>
          </div>
          <div className="text-[2.5rem] text-theme05">
            <h1>What I Provide</h1>
          </div>
          <div className="relative z-3">
            <Service />
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

    </div>
  );
}

export default App;
