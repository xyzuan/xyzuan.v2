import About from "./components/about";
import Header from "./components/header";
import RecentBlog from "./components/recent-blog";
import Recommendation from "./components/recommendation";
import Skill from "./components/skill";

const HomePage = () => {
  return (
    <>
      <Header />
      <About />
      <RecentBlog />
      <Skill />
      <Recommendation />
    </>
  );
};

export default HomePage;
