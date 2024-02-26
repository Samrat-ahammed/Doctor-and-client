import Banner from "../Shared/Banner";
import About from "./About";
import NewsSection from "./NewsSection";
import PatientSays from "./PatientSays";
import Schedule from "./Schedule";
import SkillSection from "./SkillSection";

const Home = () => {
  return (
    <div className="space-y-24 font-poppins sm:mx-2">
      <Banner
        backgroundImg="https://i.ibb.co/0ys8SP8/back.jpg"
        title={"Your Trusted Partner in Comprehensive Care"}
        headline="Your Trusted Partner in Comprehensive Care"
        subheadline1="Where Compassion Elevating"
        subheadline2="Excellence"
        opacityClass={"hero-overlay bg-opacity-60"}
        buttons={[
          {
            label: "Get Appointment",
            className: "rounded-full btn btn-primary",
          },
          {
            label: "View Profile",
            className: "rounded-full btn btn-primary badge badge-outline",
          },
        ]}
      />

      <SkillSection />
      <About />
      <Schedule />
      <PatientSays />
      <NewsSection />
    </div>
  );
};

export default Home;
