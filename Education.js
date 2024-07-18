import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]"></p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="B.Tech in Computer Science and Engineering"
            subTitle="Graphic Era University(2021-2025)"
            result="8.0/10"
            des="Currently pursuing B.Tech in Computer Science and Engineering at Graphic Era University, Dehradun, from 2021 to 2025, gaining expertise in advanced computer science concepts and practical application in engineering."
          />
          <ResumeCard
            title="10+2"
            subTitle="Asha Modern School(2020-2021)"
            result="95/100"
            des="Secured 95% in CBSE 10+2 from Asha Modern School, Saharanpur, Uttar Pradesh, showcasing strong academic performance."
          />
          <ResumeCard
            title="High School"
            subTitle="Asha Modern School(2018-2019)"
            result="95/100"
            des="Secured 95% in CBSE high school from Asha Modern School, Saharanpur, Uttar Pradesh, showcasing strong academic performance."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]"></p>
          <h2 className="text-3xl md:text-4xl font-bold"></h2>
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
