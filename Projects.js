import React from 'react';
import Title from '../layouts/Title';
import { projectOne, projectTwo, projectThree, e, chai, cloudsim, stock, twi } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section id="projects" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK" des="My Projects" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="EduVista"
          des="EduVista: An e-learning platform built with HTML, CSS, and JavaScript for interactive and engaging educational experiences."
          src={e}
          githubLink="https://github.com/thevasukush/eduvista"
          liveLink="https://theeduvista.netlify.app"
        />
        <ProjectsCard
          title="Twitter Data Sentiment Analysis"
          des="Twitter Data Sentiment Analysis: Utilized machine learning techniques to analyze sentiments from Twitter data, enabling insights into public opinion."
          src={twi}
          githubLink="https://github.com/thevasukush/Twitter-Data-Sentimental-Analysis"
          //liveLink="https://yourwebsite.com/Twitter-Sentimental-Analysis"
        />
        <ProjectsCard
          title="Stock Market Price Prediction"
          des="Stock Market Price Prediction: Developed models to forecast prices, leveraging machine learning algorithms for accurate predictions."
          src={stock}
          githubLink="https://github.com/thevasukush/Stock-Market-Price-Prediction"
          //liveLink="https://yourwebsite.com/stock-market-prediction"
        />
        <ProjectsCard
          title="CloudSim"
          des="CloudSim Comparison: Evaluated CloudSim parameters across various scheduling algorithms, optimizing performance for cloud computing environments."
          src={cloudsim}
          githubLink="https://github.com/thevasukush/cloudsim"
          //liveLink="https://yourwebsite.com/cloudsim-comparison"
        />
        <ProjectsCard
          title="Get Me A Chai"
          des="GetMeAChai: A MERN full-stack project featuring a Patreon clone, designed to facilitate creator-fan interactions through subscription-based content access and support."
          src={chai}
          githubLink="https://github.com/yourusername/get-me-a-chai"
          liveLink="https://getmeachaibyvk.netlify.app"
        />
        
      </div>
    </section>
  );
};

export default Projects;
