import About from "./About";
import Banner from "./Banner";
import NewsSection from "./NewsSection";
import PatientSays from "./PatientSays";
import Schedule from "./Schedule";
import SkillSection from "./SkillSection";

const Home = () => {
  return (
    <div className="space-y-24 font-poppins sm:mx-2">
      <Banner />
      <SkillSection />
      <About />
      <Schedule />
      <PatientSays />
      <NewsSection />
    </div>
  );
};

export default Home;
