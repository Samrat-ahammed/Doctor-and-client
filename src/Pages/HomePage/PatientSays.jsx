import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Import css files

const PatientSays = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="space-y-6 container">
      <h1 className="text-3xl font-bold text-center">
        Let,s see What{" "}
        <span className="text-blue-600 font-bold underline">Patient</span> Says
      </h1>
      <div>
        {" "}
        <Slider {...settings} className="text-3xl">
          <div>
            <h3>
              Your journey to optimal health starts here. Explore our range of
              services designed to support your wellness goals.
            </h3>
          </div>
          <div>
            <h3>
              At [Doctors Name], we re dedicated to providing exceptional
              healthcare that.s as individual as you are. Welcome to a practice
              that cares
            </h3>
          </div>
          <div>
            <h3>
              Experience healthcare that goes beyond the ordinary. Trust
              [Doctors Name] for a personalized approach to your well-being.
            </h3>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default PatientSays;
