import React from "react";
import Link from "next/link";
import Image from "next/image";
import GifIMG from "../assets/images/sales.png";
import styles from "../styles/Home.module.css";
const Sales = () => {
  return (
    <div className="container mb-5">
      <div className="contentSection row featuresDiv">
        <div className="col-md-6 mt-0 mt-4">
          <div>
            <h1>Sales</h1>
            <h6>
            3landers secondary sales from NFT Marketplaces broken down by Floor Price, Top Sales,
            Daily Sales, 24hr sales, Min Sales, Max Sales, etc.
            </h6>
          </div>
        </div>
        <div className="col-md-6 text-center">
          <Image src={GifIMG} alt="Captain" width={250} height={250} />
        </div>
      </div>
      <div className="container text-center">
        <div className="row">
          <div className="col-md-4 embbedStyle">
            <iframe
              src="https://dune.com/embeds/445102/845889/3e56f657-0ebf-4c07-9f3b-920375da2ec7"
              height="300"
              width="300"
              title="Floor Price"
            ></iframe>
          </div>
          <div className="col-md-4 embbedStyle">
            <iframe
              src="https://dune.com/embeds/445609/846832/51c71940-dfc7-4001-8167-7ffd5c39c9aa"
              height="300"
              width="300"
              title="Sales Last 24 Hours"
            ></iframe>
          </div>
          <div className="col-md-4 embbedStyle">
            <iframe
              src="https://dune.com/embeds/446364/848385/32ed3351-1a20-4ba9-af24-9a7d28acfdfb"
              height="300"
              width="300"
              title="OpenSea Sales Scatter Chart"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="mt-4">
         <div className="embbedStyle text-center activeHolders">
            <iframe
              src="https://dune.com/embeds/446364/848384/0252db9a-72ec-4970-b9d5-079ee983e88b"
              width="1000"
              height="300"
              title="OpenSea Sales Table"
            ></iframe>
          </div>
      </div>

      <div className="container text-center mt-4">
        <div className="row">
          <div className="col-md-6 embbedStyle">
            <iframe
              src="https://dune.com/embeds/448197/851593/822271c4-d209-4f0b-a122-865f4074bdc3"
              height="300"
              width="300"
              title="Min Sale 24hr"
            ></iframe>
          </div>
          <div className="col-md-6 embbedStyle">
            <iframe
              src="https://dune.com/embeds/448197/851596/80aa918d-6d33-483f-b12e-f860b38f178c"
              height="300"
              width="300"
              title="Max Sale 24hr"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sales;
