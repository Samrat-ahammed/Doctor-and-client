import { FaRegCalendarAlt } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";
import { IoMdArrowForward } from "react-icons/io";

const NewsSection = () => {
  return (
    <div className="space-y-6 container mx-auto">
      <div className="mb-14">
        {" "}
        <h1 className="text-3xl font-bold text-center">
          Let,s see Our{" "}
          <span className="text-blue-600 font-bold underline">latest</span> Says
        </h1>
      </div>

      <div className="flex justify-between gap-4">
        {/* left side  */}
        <div className="w-1/2 space-y-6">
          <div className="">
            <img
              className="rounded-lg h-full w-full"
              src="https://i.ibb.co/yYxwXPt/1583952355-1997-jpg.webp"
              alt=""
            />
          </div>
          <div className="space-y-6">
            <div className="flex justify-between">
              <h1 className="flex justify-center text-center items-center gap-2 text-xl font-bold">
                <RxAvatar />
                by mario cavira
              </h1>
              <h1 className="flex justify-center text-center items-center gap-2 text-xl font-bold">
                <FaRegCalendarAlt />
                01/12/2021
              </h1>
            </div>
            <h1 className="font-bold text-4xl">
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
        <div className="w-1/2 space-y-6">
          <div className="flex justify-between">
            <h3 className="underline font-semibold">Latest News</h3>
            <a className="underline font-semibold flex justify-center text-center items-center gap-2">
              View All <IoMdArrowForward />
            </a>
          </div>

          {/* card.....  */}
          <div className="shadow-lg py-4 px-4 rounded-lg">
            <div className="flex items-center gap-6">
              <img
                className="w-1/3 rounded-lg"
                src="https://i.ibb.co/HYzdM5R/doctor.jpg"
                alt=""
              />
              <div className="w-1/2 text-2xl font-semibold space-y-4">
                <h4>
                  Empowering Health, Where Compassionate Care Meets Cutting-Edge
                  Medicine
                  <br /> Inspiring Wellness
                </h4>
                <h4 className="underline font-semibold flex text-center text-red-500 badge badge-outline items-center gap-2">
                  Reed More <IoMdArrowForward />
                </h4>
              </div>
            </div>
          </div>
          <div className="shadow-lg py-4 px-4 rounded-lg">
            <div className="flex items-center gap-6">
              <img
                className="w-1/3 rounded-lg"
                src="https://i.ibb.co/HHbDDSX/doct3.webp"
                alt=""
              />
              <div className="w-1/2 text-2xl font-semibold space-y-4">
                <h4>
                  Empowering Health, Where Compassionate Care Meets Cutting-Edge
                  Medicine
                  <br /> Inspiring Wellness
                </h4>
                <h4 className="underline font-semibold flex text-center text-red-500 badge badge-outline items-center gap-2">
                  Reed More <IoMdArrowForward />
                </h4>
              </div>
            </div>
          </div>
          <div className="shadow-lg py-4 px-4 rounded-lg">
            <div className="flex items-center gap-6">
              <img
                className="w-1/3 rounded-lg"
                src="https://i.ibb.co/HYzdM5R/doctor.jpg"
                alt=""
              />
              <div className="w-1/2 text-2xl font-semibold space-y-4">
                <h4>
                  Empowering Health, Where Compassionate Care Meets Cutting-Edge
                  Medicine
                  <br /> Inspiring Wellness
                </h4>
                <h4 className="underline font-semibold flex text-center text-red-500 badge badge-outline items-center gap-2">
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
