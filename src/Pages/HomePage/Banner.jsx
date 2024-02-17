const Banner = () => {
  return (
    <div>
      <div
        className="hero min-h-screen container mx-auto"
        style={{
          backgroundImage: "url(https://i.ibb.co/0ys8SP8/back.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="flex justify-between px-4 py-5 items-center">
          <div className="text-neutral-content w-1/2">
            <div className="">
              <h1 className="text-2xl font-bold text-black">
                Your Trusted Partner in Comprehensive Care
              </h1>
              <p className="mb-5 text-4xl font-bold leading-tight">
                <span className="text-blue-900 underline">
                  Where Compassion
                </span>{" "}
                Elevating <br /> Lives Personalized
                <br />
                <span className="text-blue-900 underline">Excellence</span>
              </p>
              <p className="text-black font-bold mb-5">
                Transforming Lives, One Diagnosis at a Time: Your Gateway to
                Exceptional HealthcareUnveiling a Path to Optimal Health: Your
                Dedicated Team for Holistic Care and Healing
              </p>
              <div className="flex gap-4">
                <button className="btn btn-primary rounded-full">
                  Get Appointment
                </button>
                <button className="btn btn-primary badge badge-outline rounded-full">
                  View Profile
                </button>
              </div>
            </div>
          </div>
          <div className="w-1/3 ">
            <img
              className="w-full"
              src="https://i.ibb.co/kDBp3HJ/pngwing-com.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
