import About from "./components/about";
import Header from "./components/header";
import Recommendation from "./components/recommendation";
import Skill from "./components/skill";

const HomePage = () => {
  return (
    <>
      <Header />
      <About />
      <Skill />
      <Recommendation />
    </>
  );
};

export default HomePage;
