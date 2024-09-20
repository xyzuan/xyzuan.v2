import About from "./components/about";
import Header from "./components/header";
import Recommendation from "./components/recommendation";
import Skill from "./components/skill";
import WorkExperienceEducation from "./components/work-experience-education";

const HomePage = () => {
  return (
    <>
      <Header />
      <About />
      <Skill />
      <Recommendation />
      <WorkExperienceEducation />
    </>
  );
};

export default HomePage;
