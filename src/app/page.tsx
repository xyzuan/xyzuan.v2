import About from "./components/about";
import Header from "./components/header";
import Skill from "./components/skill";
import WorkExperience from "./components/work-experience";

const Home = () => {
  return (
    <main>
      <Header />
      <About />
      <Skill />
      <WorkExperience />
    </main>
  );
};

export default Home;
