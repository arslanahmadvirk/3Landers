import React from "react";
import Image from "next/image";
import Link from "next/link";
import navlogo from "../assets/images/Eyes.gif";
import opensea from '../assets/images/opensea1.png'
import { useRouter } from 'next/router'

const Navbar = () => {

    const router = useRouter();
    const currentRoute = router.pathname;

  return (
    <nav className=" w-100 p-1 px-2 navbar navv navbar-expand-lg navbar-light position-fixed top-0 start-0">
      <div className="container-fluid">
        <Link href="/" passHref>
          <div className="navbarBrand">
            <Image src={navlogo} alt="Brand" width={60} height={60} />
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
              <button
                    type="button"
                    className={currentRoute === "/" ? "btn-active btn" : "btn-nonactive btn" }
                    data-bs-toggle="collapse"
                    data-bs-target=".navbar-collapse.show"
                  >
                    Home
                  </button>
              </a>
            </Link>
            <Link href="/holders" passHref>
              <a className="nav-link">
              <button
                    type="button"
                    className={currentRoute === "/holders" ? "btn-active btn" : "btn-nonactive btn" }
                    data-bs-toggle="collapse"
                    data-bs-target=".navbar-collapse.show"
                  >
                    Holders
                  </button>
              </a>
            </Link>
            <Link href="/sales" passHref>
              <a className="nav-link">
              <button
                    type="button"
                    className={currentRoute === "/sales" ? "btn-active btn" : "btn-nonactive btn" }
                    data-bs-toggle="collapse"
                    data-bs-target=".navbar-collapse.show"
                  >
                    Sales
                  </button>
              </a>
            </Link>

            <Link href="/traits" passHref>
              <a className="nav-link">
              <button
                    type="button"
                    className={currentRoute === "/traits" ? "btn-active btn" : "btn-nonactive btn" }
                    data-bs-toggle="collapse"
                    data-bs-target=".navbar-collapse.show"
                  >
                    Traits
                  </button>
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
