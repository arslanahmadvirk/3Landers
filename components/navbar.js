import React from "react";
import Image from "next/image";
import Link from "next/link";
import navlogo from "../assets/images/landers1.png";
import opensea from '../assets/images/opensea1.png'

const Navbar = () => {
  return (
    <nav className=" w-100 p-1 px-2 navbar navv navbar-expand-lg navbar-light position-fixed top-0 start-0">
      <div className="container-fluid">
        <Link href="/" passHref>
          <div className="navbarBrand">
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
          <ul className="navbar-nav navItems text-center px-3">
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
          <div className="social-media order-lg-last">
            <p className="mb-0 d-flex">
              <a
                href="https://3landersnft.com"
                className="d-flex align-items-center justify-content-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                <i className="bi bi-browser-edge"></i>
                </span>
              </a>
              <a
                href="https://twitter.com/3LandersNFT"
                className="d-flex align-items-center justify-content-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                <i className="bi bi-twitter"></i>
                </span>
              </a>
              <a
                href="https://discord.com/invite/3Landers"
                className="d-flex align-items-center justify-content-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                <i className="bi bi-discord"></i>
                </span>
              </a>
              <a
                href="https://opensea.io/collection/3landers"
                className="d-flex align-items-center justify-content-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="mt-1">
                <Image src={opensea} alt="Brand" width={40} height={40} />
                </span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
