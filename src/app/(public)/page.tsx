import About from "./components/about";
import Header from "./components/header";
import Skill from "./components/skill";
import WorkExperienceEducation from "./components/work-experience-education";
import Services from "./components/services";

const HomePage = () => {
  return (
    <>
      <Header />
      <About />
      <Skill />
      <WorkExperienceEducation />
      <Services />
    </>
  );
};

export default HomePage;
