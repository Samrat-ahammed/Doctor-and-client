import { Link, NavLink } from "react-router-dom";
import logo from "../.././assets/logo2.jpeg";

const Navbar = () => {
  const navItem = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/advice"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Advice
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/work"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/work"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Schedule
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/work"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Reviews
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/work"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Blogs
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="container mx-auto">
      <div className="container fixed navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItem}
            </ul>
          </div>
          <a className="text-xl btn btn-ghost">Wellness</a>
        </div>
        <div className="hidden navbar-center lg:flex">
          <ul className="px-1 font-bold menu menu-horizontal">{navItem}</ul>
        </div>
        <div className="navbar-end">
          <Link
            to={"/login"}
            className="text-white rounded-full btn btn-accent"
          >
            Let,s Talk
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
