import "./globals.css";
import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <div className="navbar bg-base-100 shadow-lg">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
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
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 w-52"
              >
                <li>
                  <a href="/dispatch" className="active:bg-gray-300">
                    Dispatch
                  </a>
                </li>
                <li tabIndex={0}>
                  <a href="/delivery" className="active:bg-gray-300">
                    Delivery
                  </a>
                </li>
                <li>
                  <a href="/joblist" className="active:bg-gray-300">
                    Jobs
                  </a>
                </li>
              </ul>
            </div>
            <a
              href="/"
              className="normal-case text-2xl font-bold text-secondary  md:m-auto"
            >
              ēzēir
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <a href="/dispatch" className="active:bg-gray-300">
                  Dispatch
                </a>
              </li>
              <li tabIndex={0}>
                <a href="/delivery" className="active:bg-gray-300">
                  Delivery
                </a>
              </li>
              <li>
                <a href="/joblist" className="active:bg-gray-300">
                  Jobs
                </a>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <input
              type="text"
              placeholder="Search...."
              className="input w-full md:w-auto max-w-xs input-sm bg-base-200 rounded"
            />
          </div>
        </div>
        {children}
        <footer className="footer footer-center p-4 bg-base-300 text-base-content">
          <div>
            <p>© 2023 - All right reserved by ModelShop SO Coordinator</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
