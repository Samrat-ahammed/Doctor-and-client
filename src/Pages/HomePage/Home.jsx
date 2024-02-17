import About from "./About";
import Banner from "./Banner";
import PatientSays from "./PatientSays";
import Schedule from "./Schedule";
import SkillSection from "./SkillSection";

const Home = () => {
  return (
    <div className="space-y-24 font-poppins">
      <Banner />
      <SkillSection />
      <About />
      <Schedule />
      <PatientSays />
    </div>
  );
};

export default Home;
