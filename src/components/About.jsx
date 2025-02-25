import React from 'react';

const About = () => {
  return (
    <div className="flex flex-col gap-[1rem] text-white">
      <div className="text-[3rem] font-bold flex gap-[1rem]">
        <h1>About</h1>
        <h1 className="text-theme05">ME</h1>
      </div>
      <div className="text-[1.2rem] mobile-hozi:text-[2rem]">
        My name is Watcharapong Yospunya, Nickname is Porto
        I'm from Phitsanulok in Thailand because I studing in faculy of Engineering at Naresuan University,
        Of course I'm Computer Engineering, I'm want to be Full-stack Developer.
      </div>
    </div>
  );
}

export default About;
