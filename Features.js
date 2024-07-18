import React from 'react'
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";
import Title from '../layouts/Title';
import Card from './Card';

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Full Stack Web Development (MERN Stack)"
          des="Experienced in Full Stack Web Development using the MERN stack, creating responsive and high-performance web applications from concept to deployment."
         
        />
        <Card
          title="Software Development"
          des="Familiar with software development principles, proficient in coding, debugging, and testing applications, eager to contribute skills to projects."
          icon={<AiFillAppstore />}
        />
        <Card
          title="Business Analyst"
          des="Certified Business Analyst skilled in data analysis, requirements gathering, and process improvement with LinkedIn Learning and Microsoft certifications."
          icon={<SiProgress />}
        />
        <Card
          title="Mobile Development"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
          hic consequuntur eum repellendus ad."
          icon={<FaMobile />}
        />
        <Card
          title="UX Design"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
          hic consequuntur eum repellendus ad."
          icon={<SiAntdesign />}
        />
        <Card
          title="Hosting Websites"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
          hic consequuntur eum repellendus ad."
          icon={<FaGlobe />}
        />
      </div>
    </section>
  );
}

export default Features