import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const SignInPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="bg-[#7a9ad5]">
      <div className="container flex justify-between shadow-inner">
        <div className="w-1/2">
          <img src="https://i.ibb.co/Smt1WYS/6.jpg" alt="" />
        </div>
        <div className="w-1/2 m-auto ">
          <div className="m-auto">
            <div className="flex-col lg:flex-row-reverse">
              <div className="w-full card shrink-0 bg-[#7a9ad5] shadow-xl">
                <h1 className="text-4xl font-bold text-center text-[#008000]">
                  Login Now
                </h1>
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                  <div className="form-control">
                    <label className="label">
                      <span className="font-semibold label-text">
                        First Name
                      </span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Your email"
                      className="bg-white input"
                      {...register("firstName")}
                    />
                    <p>{errors.firstName?.message}</p>
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="font-semibold label-text">
                        Last Name
                      </span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Your email"
                      className="bg-white input"
                      {...register("lastName")}
                    />
                    <p>{errors.lastName?.message}</p>
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="font-semibold label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      placeholder="Enter Your email"
                      className="bg-white input"
                      {...register("email")}
                    />
                    <p>{errors.email?.message}</p>
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input
                      type="password"
                      placeholder="password"
                      className="input input-bordered"
                      required
                      {...register("password")}
                    />
                  </div>
                  <p>{errors.password?.message}</p>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Confirm Password</span>
                    </label>
                    <input
                      type="password"
                      placeholder="password"
                      className="input input-bordered"
                      required
                      {...register("confirmPassword")}
                    />
                    <p>{errors.confirmPassword?.message}</p>

                    <label className="label">
                      <a href="#" className="label-text-alt link link-hover">
                        Forgot password?
                      </a>
                    </label>
                  </div>
                  <input
                    {...register("imgUrl")}
                    type="file"
                    className="w-full max-w-xs file-input file-input-bordered file-input-accent"
                  />
                  <p>{errors.imgUrl?.message}</p>
                  <div className="mt-6 form-control">
                    {/* <button className="btn btn-primary">Login</button> */}
                    <button type="submit" className="font-bold styled-button">
                      Login
                    </button>
                  </div>
                  <Link to={"/login"} className="mt-5 font-semibold">
                    Already Have An Account ?{" "}
                    <span className="text-blue-700 hover:underline">Login</span>
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
