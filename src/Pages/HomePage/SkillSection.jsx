import { FaHeartbeat } from "react-icons/fa";

const SkillSection = () => {
  return (
    <div className="space-y-6 container mx-auto">
      <div className="w-1/2 mx-auto text-center space-y-6">
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
        <div className="grid grid-cols-4 gap-9">
          <div className="bg-indigo-500 text-center items-center mx-auto px-5 py-8 rounded-sm space-y-5">
            <div className="font-bold text-8xl">
              <FaHeartbeat className="items-center mx-auto" />
            </div>
            <div>
              <p className="font-bold text-2xl">Patient Safety</p>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing</p>
            </div>
          </div>
          <div className="bg-purple-400 text-center items-center mx-auto px-5 py-8 rounded-sm space-y-5">
            <div className="font-bold text-8xl">
              <FaHeartbeat className="items-center mx-auto" />
            </div>
            <div>
              <p className="font-bold text-2xl">Patient Safety</p>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing</p>
            </div>
          </div>
          <div className="bg-pink-500 text-center items-center mx-auto px-5 py-8 rounded-sm space-y-5">
            <div className="font-bold text-8xl">
              <FaHeartbeat className="items-center mx-auto" />
            </div>
            <div>
              <p className="font-bold text-2xl">Patient Safety</p>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing</p>
            </div>
          </div>
          <div className="bg-sky-500 text-center items-center mx-auto px-5 py-8 rounded-sm space-y-5">
            <div className="font-bold text-8xl">
              <FaHeartbeat className="items-center mx-auto" />
            </div>
            <div>
              <p className="font-bold text-2xl">Patient Safety</p>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillSection;
