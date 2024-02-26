import { Link } from "react-router-dom";
import "./style.css";

const LoginPage = () => {
  return (
    <div className="container flex justify-between shadow-inner">
      <div className="w-1/2">
        <img src="https://i.ibb.co/nPpt61z/doctoranimation.webp" alt="" />
      </div>
      <div className="w-1/2 m-auto">
        <div className="m-auto">
          <div className="flex-col lg:flex-row-reverse">
            <div className="w-full card shrink-0 bg-base-100">
              <h1 className="text-4xl font-bold text-center text-[#008000]">
                Login Now
              </h1>
              <form className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
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
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="mt-6 form-control">
                  {/* <button className="btn btn-primary">Login</button> */}
                  <button className="font-bold styled-button">Login</button>
                </div>
                <Link to={"/signIn"} className="mt-5 font-semibold">
                  New Here ? Please{" "}
                  <span className="text-blue-700 hover:underline">SignIn.</span>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
