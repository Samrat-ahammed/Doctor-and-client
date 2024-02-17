import { CiMedicalCross, CiMedicalCase } from "react-icons/ci";
import { FaHandHoldingMedical } from "react-icons/fa";
import {
  FaFileMedical,
  FaHouseMedicalFlag,
  FaTruckMedical,
} from "react-icons/fa6";
import { IoMdMedical } from "react-icons/io";

const Schedule = () => {
  return (
    <div className="container mx-auto">
      <div className="flex justify-between">
        <div className="w-1/2 space-y-5">
          <h3 className="font-bold">Schedule</h3>
          <h1 className="text-3xl font-bold">
            Let,s see my Schedule time! When i{" "}
            <span className="text-blue-600 font-bold underline">Free</span>
          </h1>
          <p className="font-bold">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque ut
            tenetur voluptatibus vel maiores odit dignissimos placeat! Cumque
            minima, veniam quis eaque fuga esse aut maiores reprehenderit id
            debitis recusandae.
          </p>
          <p className="font-bold">Medical Check-up review :</p>
          <div className="space-y-4">
            <div className="flex justify-around">
              <div className="font-bold flex items-center gap-2">
                <CiMedicalCross className="text-purple-700 text-3xl" />
                Symptomatology
              </div>
              <div className="font-bold flex items-center gap-2">
                <CiMedicalCase className="text-purple-700 text-3xl" />
                Immunization
              </div>
            </div>
            <div className="flex justify-around">
              <div className="font-bold flex items-center gap-2">
                <FaHandHoldingMedical className="text-purple-700 text-3xl" />
                Pharmacology
              </div>
              <div className="font-bold flex items-center gap-2">
                <FaFileMedical className="text-purple-700 text-3xl" />
                Pathology
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2 mb-24 ">
          <img
            className="w-full rounded-lg"
            src="https://i.ibb.co/6r62sKS/doctor.jpg"
            alt=""
          />
          <div className="w-3/2 px-6 py-3 shadow-xl border border-orange-500 rounded-lg absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
            <h1 className="text-center font-bold text-emerald-800 mb-5">
              Go to improvement
            </h1>
            <p className="font-bold text-center mb-3">
              Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit
            </p>

            <div className="flex justify-evenly font-bold text-sm">
              <p className="flex gap-3 items-center justify-center text-center text-purple-700">
                Genetics
                <FaHouseMedicalFlag />
              </p>
              <p className="flex gap-3 items-center justify-center text-center text-purple-700">
                Oncology
                <IoMdMedical />
              </p>
              <p className="flex gap-3 items-center justify-center text-center text-purple-700">
                Urology
                <FaTruckMedical />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
