import { FaHeartbeat } from "react-icons/fa";

const SkillSection = () => {
  return (
    <div className="container mx-auto space-y-6">
      <div className="w-1/2 mx-auto space-y-6 text-center">
        <h1 className="text-3xl font-bold">
          My skill <span className="text-blue-900 underline">depends</span> on
          work.
        </h1>
        <p className="text-sm font-bold">
          Your Journey to Well-being Starts Here: Unparalleled Care, Unmatched
          Compassion.Healing Hands, Caring Hearts: Nurturing Your Health with
          Precision and Empathy.
        </p>
      </div>
      <div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-9 ">
          <div className="items-center px-5 py-8 mx-auto space-y-5 text-center bg-indigo-500 rounded-sm">
            <div className="font-bold text-8xl">
              <FaHeartbeat className="items-center mx-auto" />
            </div>
            <div>
              <p className="text-2xl font-bold">Patient Safety</p>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing</p>
            </div>
          </div>
          <div className="items-center px-5 py-8 mx-auto space-y-5 text-center bg-purple-400 rounded-sm">
            <div className="font-bold text-8xl">
              <FaHeartbeat className="items-center mx-auto" />
            </div>
            <div>
              <p className="text-2xl font-bold">Patient Safety</p>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing</p>
            </div>
          </div>
          <div className="items-center px-5 py-8 mx-auto space-y-5 text-center bg-pink-500 rounded-sm">
            <div className="font-bold text-8xl">
              <FaHeartbeat className="items-center mx-auto" />
            </div>
            <div>
              <p className="text-2xl font-bold">Patient Safety</p>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing</p>
            </div>
          </div>
          <div className="items-center px-5 py-8 mx-auto space-y-5 text-center rounded-sm bg-sky-500">
            <div className="font-bold text-8xl">
              <FaHeartbeat className="items-center mx-auto" />
            </div>
            <div>
              <p className="text-2xl font-bold">Patient Safety</p>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillSection;
