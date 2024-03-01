import { Link } from "react-router-dom";
import Banner from "../../Shared/Banner";
import { IoSearchCircleSharp } from "react-icons/io5";
import "./style.css";

const Doctors = () => {
  const scrollToMiddle = () => {
    window.scrollTo({
      top: document.body.scrollHeight / 2.5,
      behavior: "smooth",
    });
  };

  return (
    <div className="container mx-auto mb-24 space-y-8">
      <div className="mb-32">
        <Banner
          backgroundImg={
            "https://i.ibb.co/SyR3z7W/pexels-artem-podrez-5878516.jpg"
          }
          headline={"Before we continue,"}
          subheadline2={
            "Please choose a doctor who you'd like to consult with."
          }
          title={"Please select a doctor from the list below to proceed!"}
          opacityClass={"hero-overlay bg-opacity-40"}
          buttons={[
            {
              label: `See Doctor....`,
              className: "rounded-full btn btn-accent",
              onClick: scrollToMiddle,
            },
          ]}
        />
      </div>
      <h2 className="container mx-auto text-4xl font-bold text-amber-900">
        Select Your Doctor
      </h2>

      {/* filter section ..  */}
      <div className="space-y-3">
        <div className="flex justify-between">
          <label className="flex items-center gap-2 input input-bordered">
            <input type="text" className="grow" placeholder="Search" />

            <IoSearchCircleSharp className="text-3xl text-blue-600" />
          </label>

          <div className="items-end space-y-2 text-end">
            <h2 className="container mx-auto text-xl font-bold text-slate-300">
              Department Search
            </h2>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="m-1 text-white underline btn btn-info"
              >
                Select Your department
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-4">
        <div id="card-container" className="mt-4">
          <div
            className="profile-img"
            style={{
              backgroundImage:
                'url("https://images.unsplash.com/photo-1504933350103-e840ede978d4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=564&q=80")',
            }}
          ></div>
          <h1 className="mt-6 text-xl dr-Name">Dr.Mahadi Hasan</h1>
          <div className="mt-8 description">
            Maddie is a front end web developer in New York. She has worked in
            the field for 10 years now. Check out her projects in the links
            below. She is available for hire as well.
          </div>
          <div className="social">
            <a>MBBS</a>
            <a>BSC</a>
            <a>MSC</a>
          </div>
          <Link
            to={"/doctorsDetails"}
            className="flex items-center justify-center font-semibold text-center dR-button"
          >
            <Link
              to={"//doctorsDetails"}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Hire Me
            </Link>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Doctors;
