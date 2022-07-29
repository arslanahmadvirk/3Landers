import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import opensea from "../assets/images/opensea1.png";
import dunelogo from "../assets/images/dunelogo.png";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <div className="row">
          <div className="col-md-6 mt-1">
          <h1>Powered by</h1>
          </div>
          <div className="col-md-6 text-center">
          <Image src={dunelogo} alt="Vercel Logo" width={110} height={35} />
          </div>
        </div>
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
    </footer>
  );
};

export default Footer;
