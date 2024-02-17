// import { FcRating } from "react-icons/fc";

const About = () => {
  return (
    <div className="">
      <div className="container mx-auto">
        <div className="flex lg:flex-row">
          <div className="w-1/2">
            <img
              src="https://i.ibb.co/tBS94nb/paediatric.webp"
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <div className="absolute -mt-10 ml-10 w-1/3 p-8 shadow-lg bg-white rounded-lg">
              <div
                className="flex
             "
              >
                <div>
                  <div className="flex justify-between text-center items-center gap-4 mb-5">
                    <h1 className="text-blue-950 font-bold underline">
                      About a Doctor
                    </h1>
                    <h1 className="text-black font-bold underline text-center items-center flex justify-center gap-2 ">
                      Rating:{" "}
                      <div className="rating">
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                          checked
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                        />
                      </div>
                    </h1>
                  </div>
                  <div className="flex justify-center items-center">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Praesentium excepturi.
                      <h1 className="font-bold text-xl mt-4">+8801784254829</h1>
                    </p>
                  </div>
                </div>
                <div></div>
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-xl font-bold">About Me</h1>
            <p className="text-3xl font-bold mb-5">
              <span className="text-blue-900 font-bold underline">
                Provident
              </span>{" "}
              cupiditate voluptatem et in. Quaerationem quasi
            </p>
            <p className="font-bold text-sm mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores alias iusto libero corrupti odit porro itaque fugit
              ipsa sint perspiciatis vero ad omnis, vitae, tenetur sequi culpa
              molestiae nulla provident.
            </p>
            <button className="btn btn-primary rounded-full mb-52">
              Let.s Talk
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
