import React from "react";
import Link from "next/link";
import Image from "next/image";
import GifIMG from "../assets/images/gif.gif";
import BannerIMG from "../assets/images/banner.jpeg";
import HandShake from "../assets/images/handshake.png";
import Sales from "../assets/images/sales.png";
import DNALogo from "../assets/images/dna.png";
import styles from "../styles/Home.module.css";
const Banner = () => {
  return (
    // <div>
    //    <div className="">
    //         <Image
    //           src={BannerIMG}
    //           alt="Captain"
    //           width={780}
    //           height={300}
    //           layout="responsive"
    //         />
    //       </div>
    <div className="container">
      <div className="contentSection row">
        <div className="col-md-6">
          <div>
            <h1>Interested in joining the 3landers ecosystem?</h1>
            <h6>
              Learn all about the DNA, Biomes and Ship Building from our
              community made dashboard. In this dashboard we will explore
              3landers on chain activity.
            </h6>
            <div className="mt-3">
              <span>
                <a
                  href="https://3landersnft.com"
                  className="notion-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Website
                </a>
              </span>
              <span> | </span>
              <span>
                <a
                  href="https://twitter.com/3LandersNFT"
                  className="notion-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
              </span>
              <span> | </span>
              <span>
                <a
                  href="http://discord.gg/3Landers"
                  className="notion-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Discord
                </a>
              </span>
              <span> | </span>
              <span>
                <a
                  href="https://opensea.io/collection/3landers"
                  className="notion-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Opensea
                </a>
              </span>
              <span> | </span>
            </div>
          </div>
        </div>
        <div className="col-md-6 ">
          <Image src={BannerIMG} alt="Captain" width={650} height={300} />
        </div>
      </div>

      <div className="container mb-5 px-5">
        <div className="row justify-content-center">
          <div className="row mt-3 text-center text-dark">
            <div className="col-md-4">
             <Link href="/holders" passHref>
                <Image
                  src={HandShake}
                  alt="icon"
                  className="cursor-pointer"
                  width={100}
                  height={100}
                />
              </Link>
              <div>
                <h5 className="font-weight-bold mt-4">Holders</h5>
              </div>
            </div>
            <div className="col-md-4 ">
              <Link href="/sales" passHref>
                <Image
                  src={Sales}
                  className="ms-2 cursor-pointer"
                  alt="icon"
                  width={100}
                  height={100}
                />
              </Link>
              <div>
                <h5 className="font-weight-bold mt-4">Sales</h5>
              </div>
            </div>
            <div className="col-md-4">
             <Link href="/traits" passHref>
                <Image
                  src={DNALogo}
                  className="cursor-pointer"
                  alt="icon"
                  width={100}
                  height={100}
                />
              </Link>
              <div>
                <h5 className="font-weight-bold mt-4">Traits</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Banner;
