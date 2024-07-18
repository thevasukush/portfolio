import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]"></p>
          <h2 className="text-3xl md:text-4xl font-bold">Certifications</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Business Analysis"
            subTitle="Business Analysis from LinkedInLearning and Microsoft."
            result="Success"
            des="Certified Business Analyst skilled in data analysis, requirements gathering, and process improvement with LinkedIn Learning and Microsoft certifications."
          />
          <ResumeCard
            title="Software Development."
            subTitle="Software Development from LinkedInLearning and Microsoft."
            result="Success"
            des="Certifications in Software Development from LinkedIn Learning and Microsoft, validating proficiency in coding, debugging, and application testing for real-world projects."
          />
          <ResumeCard
            title="Programming in Python"
            subTitle="Programming in Python from Google."
            result="Success"
            des="Certifications in Python Programming from Google and Coursera, showcasing advanced skills in Python development and application across various domains."
          />
        </div>
      </div>
      <div>
        
      </div>
    </motion.div>
  );
};

export default Achievement;
