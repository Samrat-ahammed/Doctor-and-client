import { FaRegCalendarAlt } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";
import { IoMdArrowForward } from "react-icons/io";

const NewsSection = () => {
  return (
    <div className="container mx-auto space-y-6">
      <div className="mb-14">
        {" "}
        <h1 className="text-3xl font-bold text-center">
          Let,s see Our{" "}
          <span className="font-bold text-blue-600 underline">latest</span> Says
        </h1>
      </div>

      <div className="justify-between gap-4 lg:flex">
        {/* left side  */}
        <div className="space-y-6 lg:w-1/2">
          <div className="">
            <img
              className="w-full h-full rounded-lg"
              src="https://i.ibb.co/yYxwXPt/1583952355-1997-jpg.webp"
              alt=""
            />
          </div>
          <div className="space-y-6">
            <div className="flex justify-between">
              <h1 className="flex items-center justify-center gap-2 text-xl font-bold text-center">
                <RxAvatar />
                by mario cavira
              </h1>
              <h1 className="flex items-center justify-center gap-2 text-xl font-bold text-center">
                <FaRegCalendarAlt />
                01/12/2021
              </h1>
            </div>
            <h1 className="text-4xl font-bold">
              Join me for a respectfully Fight for <br /> COVID misinformation
            </h1>
            <p>
              Compassionate Care, Tailored to You: Your Path to a Healthier
              Tomorrow Begins Now These phrases aim to convey a sense of trust,
              compassion, expertise, and dedication to patient well-being, which
              are essential elements of a doctors website banner. Feel free to
              modify them to better fit the specific tone and branding of your
              website.
            </p>
          </div>
        </div>

        {/* right side  */}
        <div className="space-y-6 lg:w-1/2">
          <div className="flex justify-between">
            <h3 className="font-semibold underline">Latest News</h3>
            <a className="flex items-center justify-center gap-2 font-semibold text-center underline">
              View All <IoMdArrowForward />
            </a>
          </div>

          {/* card.....  */}
          <div className="px-4 py-4 rounded-lg shadow-lg">
            <div className="flex items-center gap-6">
              <img
                className="w-1/3 rounded-lg"
                src="https://i.ibb.co/HYzdM5R/doctor.jpg"
                alt=""
              />
              <div className="w-1/2 space-y-4 text-2xl font-semibold">
                <h4>
                  Empowering Health, Where Compassionate Care Meets Cutting-Edge
                  Medicine
                  <br /> Inspiring Wellness
                </h4>
                <h4 className="flex items-center gap-2 font-semibold text-center text-red-500 underline badge badge-outline">
                  Reed More <IoMdArrowForward />
                </h4>
              </div>
            </div>
          </div>
          <div className="px-4 py-4 rounded-lg shadow-lg">
            <div className="flex items-center gap-6">
              <img
                className="w-1/3 rounded-lg"
                src="https://i.ibb.co/HHbDDSX/doct3.webp"
                alt=""
              />
              <div className="w-1/2 space-y-4 text-2xl font-semibold">
                <h4>
                  Empowering Health, Where Compassionate Care Meets Cutting-Edge
                  Medicine
                  <br /> Inspiring Wellness
                </h4>
                <h4 className="flex items-center gap-2 font-semibold text-center text-red-500 underline badge badge-outline">
                  Reed More <IoMdArrowForward />
                </h4>
              </div>
            </div>
          </div>
          <div className="px-4 py-4 rounded-lg shadow-lg">
            <div className="flex items-center gap-6">
              <img
                className="w-1/3 rounded-lg"
                src="https://i.ibb.co/HYzdM5R/doctor.jpg"
                alt=""
              />
              <div className="w-1/2 space-y-4 text-2xl font-semibold">
                <h4>
                  Empowering Health, Where Compassionate Care Meets Cutting-Edge
                  Medicine
                  <br /> Inspiring Wellness
                </h4>
                <h4 className="flex items-center gap-2 font-semibold text-center text-red-500 underline badge badge-outline">
                  Reed More <IoMdArrowForward />
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
