// import { FcRating } from "react-icons/fc";

const About = () => {
  return (
    <div className="">
      <div className="container mx-auto">
        <div className="md:flex-col lg:flex lg:flex-row">
          <div className="md:w-full lg:w-1/2">
            <img
              src="https://i.ibb.co/tBS94nb/paediatric.webp"
              className="rounded-lg shadow-2xl md:w-full md:mb-3 lg:max-w-sm"
            />
            <div className="p-8 bg-white rounded-lg shadow-lg lg:ml-10 lg:w-1/3 lg:-mt-10 lg:absolute">
              <div className="flex">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-5 text-center">
                    <h1 className="font-bold underline text-blue-950">
                      About a Doctor
                    </h1>
                    <h1 className="flex items-center justify-center gap-2 font-bold text-center text-black underline ">
                      Rating:{" "}
                      <div className="rating">
                        <input
                          type="radio"
                          name="rating-2"
                          className="bg-orange-400 mask mask-star-2"
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="bg-orange-400 mask mask-star-2"
                          checked
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="bg-orange-400 mask mask-star-2"
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="bg-orange-400 mask mask-star-2"
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="bg-orange-400 mask mask-star-2"
                        />
                      </div>
                    </h1>
                  </div>
                  <div className="flex items-center justify-center">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Praesentium excepturi.
                      <h1 className="mt-4 text-xl font-bold">+8801784254829</h1>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:text-center md:mt-8">
            <h1 className="text-xl font-bold">About Me</h1>
            <p className="mb-5 text-3xl font-bold">
              <span className="font-bold text-blue-900 underline">
                Provident
              </span>{" "}
              cupiditate voluptatem et in. Quaerationem quasi
            </p>
            <p className="mb-5 text-sm font-bold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores alias iusto libero corrupti odit porro itaque fugit
              ipsa sint perspiciatis vero ad omnis, vitae, tenetur sequi culpa
              molestiae nulla provident.
            </p>
            <button className="rounded-full btn btn-primary md:5 lg:mb-52">
              Let.s Talk
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
