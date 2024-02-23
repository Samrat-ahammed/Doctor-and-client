const Banner = () => {
  return (
    <div>
      <div
        className="container min-h-screen mx-auto hero"
        style={{
          backgroundImage: "url(https://i.ibb.co/0ys8SP8/back.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="flex items-center justify-between px-4 py-5">
          <div className="text-center text-neutral-content">
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
              <p className="w-1/2 mx-auto mb-5 font-bold text-center text-black ">
                Transforming Lives, One Diagnosis at a Time: Your Gateway to
                Exceptional HealthcareUnveiling a Path to Optimal Health: Your
                Dedicated Team for Holistic Care and Healing
              </p>
              <div className="flex justify-center gap-4">
                <button className="rounded-full btn btn-primary">
                  Get Appointment
                </button>
                <button className="rounded-full btn btn-primary badge badge-outline">
                  View Profile
                </button>
              </div>
            </div>
          </div>
          {/* <div className="w-1/3 ">
            <img
              className="w-full"
              src="https://i.ibb.co/MfD3110/pexels-pixabay-40568.jpg"
              alt=""
            />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Banner;
