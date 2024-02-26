import { CiPill } from "react-icons/ci";
import Banner from "../Shared/Banner";
import "./style.css";
import {
  FaArrowAltCircleRight,
  FaBriefcaseMedical,
  FaHeart,
  FaStethoscope,
} from "react-icons/fa";
import { Link } from "react-router-dom";
const colors = [
  "bg-gradient-to-r from-purple-400 to-blue-500",
  "bg-gradient-to-r from-green-400 to-yellow-500",
  "bg-gradient-to-r from-red-400 to-purple-500",
  "bg-gradient-to-r from-yellow-400 to-indigo-500",
];

const icons = [CiPill, FaHeart, FaBriefcaseMedical, FaStethoscope];

const Advice = () => (
  <div className="">
    <Banner backgroundImg={"https://i.ibb.co/KhPKt6J/6249427.jpg"} />
    <h2 className="container mx-auto mt-20 text-4xl font-bold text-amber-900">
      Select A Category
    </h2>

    {/* card..........  */}
    <div className="container grid gap-4 mx-auto mt-8 md:grid-cols-2 lg:grid-cols-2">
      {colors.map((color, index) => {
        const Icon = icons[index % icons.length];
        return (
          <div
            key={index}
            className={`card ${color} text-slate-600 font-semibold shadow-lg`}
          >
            <div className="flex">
              {" "}
              <div className="card-body">
                <Icon className="text-purple-100 text-7xl" />
                <h2 className="text-2xl font-bold text-black">
                  Radiation Therapy
                </h2>
                <p> Medications used to treat bacterial infections.</p>
                <div className="justify-end card-actions">
                  <Link
                    to={"/doctors"}
                    className="text-white btn badge badge-outline"
                  >
                    Booking <FaArrowAltCircleRight className="text-2xl" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

export default Advice;
