import CartButton from "../ui/CartButton";

const Navbar = () => {
  return (
    <div className=" bg-base-100 shadow-sm">
      <div className="navbar container mx-auto px-5 lg:px-10 py-5">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Products</a>
              </li>
              <li>
                <a>Features</a>
              </li>
              <li>
                <a>Pricing</a>
              </li>
              <li>
                <a>Testimonials</a>
              </li>
              <li>
                <a>FAQ</a>
              </li>
              <div className="divider my-1"></div>
              <div className="flex items-center justify-center gap-2 mb-1">
                <a className="pl-2 font-semibold">Login</a>
                <button className="btn custom-btn  font-semibold rounded-full w-fit">
                  Get Started
                </button>
              </div>
            </ul>
          </div>
          <a className="btn btn-ghost text-3xl font-extrabold gradient-text">
            DigiTools
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-4 xl:gap-6 px-1 font-semibold text-lg dark-text">
            <li>
              <a>Products</a>
            </li>
            <li>
              <a>Features</a>
            </li>
            <li>
              <a>Pricing</a>
            </li>
            <li>
              <a>Testimonials</a>
            </li>
            <li>
              <a>FAQ</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {/* Cart Button Component */}
          <CartButton />
          <div className="hidden lg:flex items-center">
            <a className="text-lg font-semibold px-4">Login</a>
            <button className="btn custom-btn text-lg font-semibold rounded-full px-6 py-7">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
