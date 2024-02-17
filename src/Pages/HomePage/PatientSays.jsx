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
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-center">
        Let,s see What{" "}
        <span className="text-blue-600 font-bold underline">Patient</span> Says
      </h1>
      <div
        className="flex"
        style={{
          backgroundImage: "url(https://i.ibb.co/0ys8SP8/back.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="w-1/2 bg-gradient-to-r from-indigo-600">
          <Slider
            {...settings}
            className="text-3xl mb-24 px-8 py-24 text-center font-semibold text-white"
          >
            <div className="min-h-80">
              <h3>
                Your journey to optimal health starts here. Explore our range of
                services designed to support your wellness goals.
              </h3>
            </div>
            <div>
              <h3>
                At [Doctors Name], dedicated to providing exceptional healthcare
                as individual as you are. Welcome to a practice that cares
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
        <div className="w-1/2 text-center my-auto italic">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-indigo-500 text-white py-3 rounded-lg">
            Client Says
          </h1>
        </div>
      </div>
    </div>
  );
};

export default PatientSays;
