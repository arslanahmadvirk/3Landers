import React from "react";
import Link from "next/link";
import Image from "next/image";
import GifIMG from "../assets/images/sneaking.gif";
import bioms from '../assets/images/biomes.gif'
import styles from "../styles/Home.module.css";
const Sales = () => {
  return (
    <div className="container mb-5">
      <div className="contentSection row col-md-10 mx-auto">
        <div className="col-md-5 mx-auto mt-0 mt-4">
          <div>
            <h1>Sales</h1>
            <h6>
            3landers secondary sales from NFT Marketplaces broken down by Floor Price, Top Sales,
            Daily Sales, 24hr sales, Min Sales, Max Sales, etc.
            </h6>
          </div>
        </div>
        <div className="col-md-7 text-center">
          <Image src={GifIMG} alt="Captain" width={400} height={300}/>
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
      <div className="salesSection">
          <div>
            <h1> View all 3landers and 3land world</h1>
            <h6>
            View all 3landers and 3land world assets on any of the following marketplaces.
             (Opensea) (LooksRare) (X2Y2) Keep in mind this is a community 
             made dashboard and all the data may not be completely accurate.
            </h6>
          </div>
        <div className="embbedStyle text-center activeHolders mb-5">
            <iframe
              src="https://dune.com/embeds/1111586/1899667/75d95164-15e0-4847-90c8-a07435c36b58"
              width="1000"
              height="300"
              title="OpenSea Sales Table"
            ></iframe>
          </div>
          <h1> Biomes data coming soon!!</h1>
          <div>
          <Image src={bioms} alt="Captain" width={500} height={300}/>
          </div>

      </div>
     
    </div>
  );
};

export default Sales;
