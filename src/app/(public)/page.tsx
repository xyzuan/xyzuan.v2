import BlurFade from "@/components/magicui/blur-fade";
import About from "./components/about";
import Header from "./components/header";
import RecentBlog from "./components/recent-blog";
import Recommendation from "./components/recommendation";
import Services from "./components/services";
import Skill from "./components/skill";

const HomePage = () => {
  return (
    <BlurFade>
      <Header />
      <About />
      <RecentBlog />
      <Skill />
      <Recommendation />
      <Services />
    </BlurFade>
  );
};

export default HomePage;
