import BlurFade from "@/components/magicui/blur-fade";
import About from "./components/about";
import Header from "./components/header";
import Skill from "./components/skill";
import WorkExperience from "./components/work-experience";
import Services from "./components/services";

const Home = () => {
  return (
    <BlurFade delay={0.25 * 0.05} inView>
      <Header />
      <About />
      <Skill />
      <WorkExperience />
      <Services />
    </BlurFade>
  );
};

export default Home;
