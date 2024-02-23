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
      <div className="justify-between md:text-center lg:flex">
        <div className="space-y-5 lg:w-1/2">
          <h3 className="font-bold">Schedule</h3>
          <h1 className="text-3xl font-bold">
            Let,s see my Schedule time! When i{" "}
            <span className="font-bold text-blue-600 underline">Free</span>
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
              <div className="flex items-center gap-2 font-bold">
                <CiMedicalCross className="text-3xl text-purple-700" />
                Symptomatology
              </div>
              <div className="flex items-center gap-2 font-bold">
                <CiMedicalCase className="text-3xl text-purple-700" />
                Immunization
              </div>
            </div>
            <div className="flex justify-around">
              <div className="flex items-center gap-2 font-bold">
                <FaHandHoldingMedical className="text-3xl text-purple-700" />
                Pharmacology
              </div>
              <div className="flex items-center gap-2 font-bold">
                <FaFileMedical className="text-3xl text-purple-700" />
                Pathology
              </div>
            </div>
          </div>
        </div>
        <div className="mb-24 lg:w-1/2 md:mt-6 md:w-full">
          <img
            className="w-full rounded-lg"
            src="https://i.ibb.co/6r62sKS/doctor.jpg"
            alt=""
          />
          <div className="absolute px-6 py-3 transform -translate-x-1/2 -translate-y-1/2 bg-white border border-orange-500 rounded-lg shadow-xl top-1/2 left-1/2 lg:w-3/4 md:w-full sm:w-5/6 xs:w-11/12 sm:p-4">
            <h1 className="mb-5 text-lg font-bold text-center lg:text-xl text-emerald-800">
              Go to improvement
            </h1>
            <p className="mb-3 text-sm font-bold text-center lg:text-base">
              Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit
            </p>

            <div className="flex flex-col items-center justify-center text-sm font-bold sm:flex-row lg:text-base">
              <p className="flex items-center justify-center gap-3 mb-3 text-center text-purple-700 sm:mb-0">
                Genetics
                <FaHouseMedicalFlag />
              </p>
              <p className="flex items-center justify-center gap-3 mb-3 text-center text-purple-700 sm:mb-0">
                Oncology
                <IoMdMedical />
              </p>
              <p className="flex items-center justify-center gap-3 text-center text-purple-700">
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
