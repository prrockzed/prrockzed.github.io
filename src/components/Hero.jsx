import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center ">
          <div className="w-5 h-5 rounded-full bg-[#ea580c]" />
          <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-orange-400 via-orange-800 to-slate-900" />
          <div
            className={`absolute inset-0 top-[8px] left-[83px] h-1 sm:w-80 w-40 bg-gradient-to-r from-orange-400 via-orange-800 to-slate-900`}
          />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} mt-2 text-white`}>
            Hi, I'm <span className="text-[#ea580c]">Priyanshu Ranjan</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            A passionate programmer
            <br className="sm:block hidden" />
            pursuing Physics from IIT Kharagpur
          </p>
        </div>
      </div>
      <ComputersCanvas />
    </section>
  );
};

export default Hero;
