import React from "react";
import Link from "next/link";
import Image from "next/image";
import GifIMG from "../assets/images/campfire.gif";
import styles from "../styles/Home.module.css";
const Holders = () => {
  return (
    <div className="container mb-5">
      <div className="col-md-10 mx-auto contentSection row">
        <div className="col-md-5 mt-4 mx-auto">
          <div>
            <h1>Holders</h1>
            <h6>
              Tracking 3landers holders since pre-sale mint date February 19,
              2022. Explore unique holders, top holders, new holders and other
              holder related stats.
            </h6>
          </div>
        </div>
        <div className="col-md-7 text-center">
          <Image src={GifIMG} alt="Captain" width={450} height={250} layout='responsive'/>
        </div>
      </div>
      <div className="container text-center">
        <div className="row">
          <div className="col-md-4 embbedStyle text-center">
            <iframe
              src="https://dune.com/embeds/446387/848432/86dbaca6-296c-4414-994c-cdc8ef384de2"
              height="300"
              width="300"
              title="Unique Holders"
            ></iframe>
          </div>
          <div className="col-md-4 embbedStyle text-center">
            <iframe
              src="https://dune.com/embeds/446387/848433/5b69b906-ed78-46c4-9956-dd8f5ffe4d0f"
              height="300"
              width="300"
              title="Unique Holders Ratio"
            ></iframe>
          </div>
          <div className="col-md-4 embbedStyle text-center">
            <iframe
              src="https://dune.com/embeds/453683/861992/92545284-9c40-4f62-b9ee-4d898b2846fa"
              height="300"
              width="300"
              title="Most Owned"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="mt-4">
         <div className="embbedStyle text-center activeHolders">
            <iframe
              src="https://dune.com/embeds/454235/863043/83991e01-176f-484d-a035-3ff572aad737"
              width="1000"
              height="400"
              title="Active Holders"
            ></iframe>
          </div>
      </div>

      <div className="container text-center mt-4">
        <div className="row">
          <div className="col-md-6 embbedStyle activeHolders">
            <iframe
              src="https://dune.com/embeds/445132/845939/30baeb87-fe07-40c1-9a94-c7583686b883"
              height="300"
              width="500"
              title="Top 10 Holders"
            ></iframe>
          </div>
          <div className="col-md-6 embbedStyle activeHolders">
            <iframe
              src="https://dune.com/embeds/445132/845941/b3bb61a6-3e54-4436-b67d-adf82da71ac9"
              height="300"
              width="500"
              title="Top 10 Holders PiChart"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="mt-4">
         <div className="embbedStyle text-center activeHolders">
            <iframe
              src="https://dune.com/embeds/1111175/1898633/0e53df16-adbe-470f-9e55-e71fc0c54945"
              width="1000"
              height="350"
              title="Active Holders"
            ></iframe>
          </div>
      </div>
    </div>
  );
};

export default Holders;
