import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]"></p>
          <h2 className="text-3xl md:text-4xl font-bold">Internships</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        <ResumeCard
            title="Front End Developer"
            subTitle="Internship at Next24tech Technology and Services"
            result="Virtual Internship"
            des="Performed the role of front end developer at Next24tech Technology and Services from May 2024-June 2024."
          />
          <ResumeCard
            title="Web Developer"
            subTitle="Internship at CodingRajas technology"
            result="Virtual Internship"
            des="Performed the role of web developer at CodingRajas from June-2024 to July 2024 ."
          />
        </div>
      </div>
      <div>
        
      </div>
    </motion.div>
  );
};

export default Experience;
