import { GrServicePlay } from "react-icons/gr";
import { MdEmojiEmotions } from "react-icons/md";
import { GiLifeSupport } from "react-icons/gi";
import { RiCustomerService2Fill } from "react-icons/ri";

import "./buttonStyle.css";
const DoctorDetails = () => {
  return (
    <div className="container mx-auto">
      <div>
        <div
          className="container py-24 mx-auto text-6xl font-bold text-center transition-colors duration-300"
          style={{
            backgroundImage: `url("https://i.ibb.co/PCkv5c6/24281.jpg")`,
          }}
        >
          <span className="px-3 py-2 text-white rounded-lg bg-gradient-to-l from-purple-800">
            Radiation Therapy
          </span>
        </div>

        {/* Profile card .. */}

        <div className="container flex mx-auto mt-24 ">
          {/* left side  */}
          <div className="w-3/5 space-y-4">
            <h1 className="px-3 py-1 mx-1 text-2xl font-bold text-blue-800 rounded-tr-md rounded-tl-md outline outline-offset-2 outline-purple-800">
              Dr.Mahadi Hasan
            </h1>

            <img
              className="w-full bg-red-500 rounded-br-md"
              src="https://i.ibb.co/jzH7CwN/doctoreprofile.jpg"
              alt=""
            />
          </div>

          {/* right side  */}
          <div className="w-1/3 px-5 space-y-4">
            <h1 className="px-2 mx-2 font-bold outline outline-offset-2 outline-black">
              CARE SERVICES
            </h1>
            <div className="flex ">
              <h1 className="px-2 font-bold text-red-500">BBA</h1>
              <h1 className="px-2 font-bold text-red-500">BBA</h1>
              <h1 className="px-2 font-bold text-red-500">BBA</h1>
            </div>

            {/* Accordion...  */}
            <div className="space-y-4 ">
              <div className="text-white collapse bg-gradient-to-r from-purple-800">
                <input type="radio" name="my-accordion-1" defaultChecked />
                <div className="text-xl font-medium collapse-title ">
                  What symptoms are you experiencing?
                </div>
                <div className="collapse-content">
                  <p>hello</p>
                </div>
              </div>
              <div className="collapse bg-gradient-to-br from-red-400 to-yellow-400">
                <input type="radio" name="my-accordion-1" />
                <div className="text-xl font-medium collapse-title">
                  When did your symptoms first start?
                </div>
                <div className="collapse-content">
                  <p>hello</p>
                </div>
              </div>
              <div className="collapse bg-gradient-to-br from-pink-500 to-blue-400">
                <input type="radio" name="my-accordion-1" />
                <div className="text-xl font-medium collapse-title">
                  Have you experienced similar symptoms in the past?
                </div>
                <div className="collapse-content">
                  <p>hello</p>
                </div>
              </div>
              <div className="collapse bg-gradient-to-br from-pink-200 to-red-300">
                <input type="radio" name="my-accordion-1" />
                <div className="text-xl font-medium collapse-title">
                  Do you have any medical conditions or allergies?
                </div>
                <div className="collapse-content">
                  <p>hello</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* button side .. */}
      <div className="mt-5 space-y-4 rounded-bl-md rounded-br-md outline outline-offset-2 outline-purple-800">
        <h1 className="px-3 py-1 mx-1 text-2xl font-bold text-blue-800 ">
          About Me
        </h1>
        <div className="rounded-bl-md rounded-tl-md rounded-br-md outline outline-offset-2 outline-purple-800"></div>
        <p className="p-4 font-semibold shadow-xl">
          ---- In the vast expanse of the cosmos, where stars twinkle like
          distant beacons of hope, lies a universe teeming with wonder and
          mystery. Each twinkling light in the night sky tells a story of cosmic
          proportions, from the birth of stars in fiery nurseries to the
          graceful dance of galaxies across the cosmic stage. Amidst this
          celestial ballet, Earth stands as a solitary oasis of life, adorned
          with breathtaking landscapes and bustling with the rich tapestry of
          existence.
        </p>
      </div>
      <div className="flex mx-10 mt-12 gap-7">
        {/* Personal Care */}
        <div>
          <h2 className="flex items-center gap-2 text-2xl font-bold text-center text-blue-500">
            <MdEmojiEmotions className="text-6" /> Personal Care
          </h2>
          <div className="mx-2 mt-5 space-y-3">
            <p className="flex items-center gap-2 font-semibold hover:text-blue-400">
              <GrServicePlay />
              foundation of self-love and wellness
            </p>
            <p className="flex items-center gap-2 font-semibold hover:text-blue-400">
              <GrServicePlay />
              foundation of self-love and wellness
            </p>
            <p className="flex items-center gap-2 font-semibold hover:text-blue-400">
              <GrServicePlay />
              foundation of self-love and wellness
            </p>
            <p className="flex items-center gap-2 font-semibold hover:text-blue-400">
              <GrServicePlay />
              foundation of self-love and wellness
            </p>
            <p className="flex items-center gap-2 font-semibold hover:text-blue-400">
              <GrServicePlay />
              foundation of self-love and wellness
            </p>
          </div>
        </div>
        {/* lifestyle Service  */}
        <div>
          <h2 className="flex items-center gap-2 text-2xl font-bold text-blue-500">
            <GiLifeSupport /> Lifestyle Service
          </h2>
          <div className="mx-2 mt-5 space-y-3">
            <p className="flex items-center gap-2 font-semibold hover:text-blue-400">
              <GrServicePlay />
              foundation of self-love and wellness
            </p>
            <p className="flex items-center gap-2 font-semibold hover:text-blue-400">
              <GrServicePlay />
              foundation of self-love and wellness
            </p>
            <p className="flex items-center gap-2 font-semibold hover:text-blue-400">
              <GrServicePlay />
              foundation of self-love and wellness
            </p>
            <p className="flex items-center gap-2 font-semibold hover:text-blue-400">
              <GrServicePlay />
              foundation of self-love and wellness
            </p>
            <p className="flex items-center gap-2 font-semibold hover:text-blue-400">
              <GrServicePlay />
              foundation of self-love and wellness
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-end justify-end">
        <button
          type="button"
          className="flex px-4 py-3 mx-5 text-white transition-transform transform bg-blue-600 rounded-md shadow-lg outline-none focus:ring-4 active:scale-x-75"
        >
          <span className="mr-2">Book Appointment</span>
          <RiCustomerService2Fill className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default DoctorDetails;
