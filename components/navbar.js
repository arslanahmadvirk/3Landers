import React from "react";
import Image from "next/image";
import Link from "next/link";
import navlogo from "../assets/images/landers1.png";

const Navbar = () => {

  return (
    <nav className=" w-100 p-1 px-2 navbar navv navbar-expand-lg navbar-light position-fixed top-0 start-0">
      <div className="container-fluid">
        <Link href="/" passHref>
          <div className="navbarBrand fw-bold">
            <Image src={navlogo} alt="Brand" width={160} height={50} />
          </div>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="bi bi-list"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav navItems text-center">
          <Link href="/" passHref>
              <a className="nav-link">
                <li
                  className="nav-item"
                  data-bs-toggle="collapse"
                  data-bs-target=".navbar-collapse.show"
                >
                  Home
                </li>
              </a>
            </Link>
            <Link href="/holders" passHref>
              <a className="nav-link">
                <li
                  className="nav-item"
                  data-bs-toggle="collapse"
                  data-bs-target=".navbar-collapse.show"
                >
                  Holders
                </li>
              </a>
            </Link>
            <Link href="/sales" passHref>
              <a className="nav-link">
                <li
                  className="nav-item"
                  data-bs-toggle="collapse"
                  data-bs-target=".navbar-collapse.show"
                >
                  Sales
                </li>
              </a>
            </Link>

            <Link href="/traits" passHref>
              <a className="nav-link">
                <li
                  className="nav-item"
                  data-bs-toggle="collapse"
                  data-bs-target=".navbar-collapse.show"
                >
                 Traits
                </li>
              </a>
            </Link>
          </ul>
            {/* <div className="navbar-nav text-center">
              <Link href="/login">
                <a className="nav-link">
                  <button
                    type="button"
                    className="btn "
                    data-bs-toggle="collapse"
                    data-bs-target=".navbar-collapse.show"
                  >
                    Login
                  </button>
                </a>
              </Link>
              <Link href="/signup">
                <a className="nav-link">
                  <button
                    type="button"
                    className="btn "
                    data-bs-toggle="collapse"
                    data-bs-target=".navbar-collapse.show"
                  >
                    Sign Up
                  </button>
                </a>
              </Link>
            </div> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
