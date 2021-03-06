
export const Footer:React.FC = () => {
  return (
    <>
      <footer className="relative bg-gray-800 pt-8 pb-6">
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
          style={{ height: "80px", transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-gray-800 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl font-semibold text-gray-200">
                Let's keep in touch!
              </h4>
              <h5 className="text-lg mt-0 mb-2 text-gray-200">
                Find us on any of these platforms.
              </h5>
              <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="flex items-center">
                <a
                  className={
                    (true
                      ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
                      : "text-gray-800 hover:text-gray-600") +
                    " pr-6 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  }
                  href="https://www.facebook.com/codefornepal"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <i
                    className={
                      (true
                        ? "lg:text-gray-300 text-gray-500"
                        : "text-gray-500") +
                      " fab fa-facebook text-lg leading-lg "
                    }
                  />
                  <span className="lg:hidden inline-block ml-2">Share</span>
                </a>
              </li>

              <li className="flex items-center">
                <a
                  className={
                    (true
                      ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
                      : "text-gray-800 hover:text-gray-600") +
                    " pr-6 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  }
                  href="https://twitter.com/codefornepal"
                  target="_blank"
                  rel="noreferrer noopener"

                >
                  <i
                    className={
                      (true
                        ? "lg:text-gray-300 text-gray-500"
                        : "text-gray-500") +
                      " fab fa-twitter text-lg leading-lg "
                    }
                  />
                  <span className="lg:hidden inline-block ml-2">Tweet</span>
                </a>
              </li>

              <li className="flex items-center">
                <a
                  className={
                    (true
                      ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
                      : "text-gray-800 hover:text-gray-600") +
                    " pr-6 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  }
                  href="https://github.com/code4Nepal"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <i
                    className={
                      (true
                        ? "lg:text-gray-300 text-gray-500"
                        : "text-gray-500") +
                      " fab fa-github text-lg leading-lg "
                    }
                  />
                  <span className="lg:hidden inline-block ml-2">Star</span>
                </a>
              </li>

              {/* <li className="flex items-center">
                <button
                  className={
                    (true
                      ? "bg-white text-gray-800 active:bg-gray-100"
                      : "bg-pink-500 text-white active:bg-pink-600") +
                    " text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3"
                  }
                  type="button"
                  style={{ transition: "all .15s ease" }}
                >
                  <i className="far fa-check-circle"></i> Apply
                </button>
              </li> */}
            </ul>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block uppercase text-white text-sm font-semibold mb-2">
                    Useful Links
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a className="text-gray-200 hover:text-gray-400 font-semibold block pb-2 text-sm"
                         href="https://codefornepal.org/#about">About Us
                      </a>
                    </li>
                    <li>
                      <a className="text-gray-200 hover:text-gray-400 font-semibold block pb-2 text-sm"
                         href="https://codefornepal.org/blog/">Blog
                      </a>
                    </li>
                    <li>
                      <a className="text-gray-200 hover:text-gray-400 font-semibold block pb-2 text-sm"
                         href="https://github.com/code4Nepal">Github
                      </a>
                    </li>
                    
                  </ul>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <span className="block uppercase text-white text-sm font-semibold mb-2">
                    Other Resources
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a className="text-gray-200 hover:text-gray-400  font-semibold block pb-2 text-sm"
                         href="https://codefornepal.org/#about">Contact Us
                      </a>
                    </li>
                  </ul>

                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-gray-200 font-semibold py-1">
                Copyright © {new Date().getFullYear()}{" "}
                <a
                  href="https://codefornepal.org"
                  className="text-gray-200 hover:text-gray-900"
                >
                  Code for Nepal
                </a>.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
