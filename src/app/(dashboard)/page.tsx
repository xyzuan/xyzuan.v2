import { Metadata } from "next";

import BlurFade from "@/components/magicui/blur-fade";
import About from "./components/about";
import Header from "./components/header";
import Skill from "./components/skill";
import WorkExperienceEducation from "./components/work-experience-education";
import Services from "./components/services";

const HomePage = () => {
  return (
    <BlurFade delay={0.25 * 0.05} inView>
      <Header />
      <About />
      <Skill />
      <WorkExperienceEducation />
      <Services />
    </BlurFade>
  );
};

export default HomePage;
