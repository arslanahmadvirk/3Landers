import React from "react";
import Link from "next/link";
import Image from "next/image";
import GifIMG from "../assets/images/spiritglow.gif";
import Human from "../assets/images/DNAs/Human.jpeg"
import Ape from '../assets/images/DNAs/Ape.jpeg'
import Bot3L from '../assets/images/DNAs/3lbot.jpeg'
import Sealander from '../assets/images/DNAs/sealander.jpeg'
import Spirit from '../assets/images/DNAs/Spirit.png'
import Zombie from '../assets/images/DNAs/Zombie.png'
import Golem from '../assets/images/DNAs/Golem.png'
import Alien from '../assets/images/DNAs/Alien.png'
import Bubbly from '../assets/images/DNAs/Bubbly.jpeg'
import Cyborg from '../assets/images/DNAs/Cyborg.jpeg'
import Devil from '../assets/images/DNAs/Devil.jpeg'
import Meltie from '../assets/images/DNAs/meltie.jpeg'
import styles from "../styles/Home.module.css";
const Traits = () => {
  return (
    <div className="container mb-5">
      <div className="contentSection row col-md-10 mx-auto">
        <div className="col-md-5 mx-auto mt-0 mt-4">
          <div>
            <h1>Traits</h1>
            <h6>
            Breakdown sales by trait (12) to see the average sale price for each DNA.
             Explore Popular traits and sale history per trait.
            </h6>
          </div>
        </div>
        <div className="col-md-7 text-center">
          <Image src={GifIMG} alt="Captain" width={300} height={300}/>
        </div>
      </div>
      <div className="mt-4">
         <div className="embbedStyle text-center activeHolders">
            <iframe
              src="https://dune.com/embeds/466426/884229/f67583a4-2839-4233-bbbe-a9d6215d07a1"
              width={1000}
              height={300}
              title="Popular 3Landers"
            ></iframe>
          </div>
      </div>

      <div className="container mt-4 embbedStyle">
        <div className="row">
          <div className="col-md-3">
            <div>
            <Image src={Human} alt="Human" width={400} height={350} layout='responsive'/>
            </div>
          </div>
          <div className="col-md-3 text-center">
           <iframe
              src="https://dune.com/embeds/445102/845889/87d85979-11c8-4546-940a-62f861987070"
              height="200"
              width="200"
              title="Min Sale 24hr"
            ></iframe>
           </div>
           <div className="col-md-6 activeHolders text-center">
           <iframe
              src="https://dune.com/embeds/467155/885487/78e02f57-4a2e-4167-8c98-5eac0066cb09"
              height="200"
              width="600"
              title="Min Sale 24hr"
            ></iframe>
           </div>
        </div>
      </div>
      <div className="container mt-4 embbedStyle">
        <div className="row">
          <div className="col-md-3">
            <div>
            <Image src={Ape} alt="Human" width={400} height={350} layout='responsive'/>
            </div>
          </div>
          <div className="col-md-3 text-center">
           <iframe
              src="https://dune.com/embeds/445102/845889/87d85979-11c8-4546-940a-62f861987070"
              height="200"
              width="200"
              title="Min Sale 24hr"
            ></iframe>
           </div>
          <div className="col-md-6 activeHolders">
           <iframe
              src="https://dune.com/embeds/466668/884612/104abea1-f1f3-4dc7-8211-d1ebfe9d4f95"
              height="200"
              width="700"
              title="Min Sale 24hr"
            ></iframe>
           </div>
        </div>
      </div>
      <div className="container mt-4 embbedStyle">
        <div className="row">
          <div className="col-md-3">
            <div>
            <Image src={Bot3L} alt="Human" width={400} height={350} layout='responsive' />
            </div>
          </div>
          <div className="col-md-3 text-center">
           <iframe
              src="https://dune.com/embeds/445102/845889/87d85979-11c8-4546-940a-62f861987070"
              height="200"
              width="200"
              title="Min Sale 24hr"
            ></iframe>
           </div>
          <div className="col-md-6 activeHolders">
           <iframe
              src="https://dune.com/embeds/464136/880352/fd176e84-a54b-46b1-be13-58cd49c25a71"
              height="200"
              width="700"
              title="Min Sale 24hr"
            ></iframe>
           </div>
        </div>
      </div>
      <div className="container mt-4 embbedStyle">
        <div className="row">
          <div className="col-md-3">
            <div>
            <Image src={Sealander} alt="Human" width={400} height={350} layout='responsive' />
            </div>
          </div>
          <div className="col-md-3 text-center">
           <iframe
              src="https://dune.com/embeds/445102/845889/87d85979-11c8-4546-940a-62f861987070"
              height="200"
              width="200"
              title="Min Sale 24hr"
            ></iframe>
           </div>
          <div className="col-md-6 activeHolders">
           <iframe
              src="https://dune.com/embeds/448968/853289/8439fd31-92d2-4745-9504-279fcfb43793"
              height="200"
              width="700"
              title="Min Sale 24hr"
            ></iframe>
           </div>
        </div>
      </div>
      <div className="container mt-4 embbedStyle">
        <div className="row">
          <div className="col-md-3">
            <div>
            <Image src={Spirit} alt="Human" width={400} height={350} layout='responsive'/>
            </div>
          </div>
          <div className="col-md-3 text-center">
           <iframe
              src="https://dune.com/embeds/445102/845889/87d85979-11c8-4546-940a-62f861987070"
              height="200"
              width="200"
              title="Min Sale 24hr"
            ></iframe>
           </div>
          <div className="col-md-6 activeHolders">
           <iframe
              src="https://dune.com/embeds/448768/852910/7f344ee3-26c0-430e-871a-682e1d024ca7"
              height="200"
              width="700"
              title="Min Sale 24hr"
            ></iframe>
           </div>
        </div>
      </div>
      <div className="container mt-4 embbedStyle">
        <div className="row">
          <div className="col-md-3">
            <div>
            <Image src={Zombie} alt="Human" width={400} height={350} layout='responsive'/>
            </div>
          </div>
          <div className="col-md-3 text-center">
           <iframe
              src="https://dune.com/embeds/445102/845889/87d85979-11c8-4546-940a-62f861987070"
              height="200"
              width="200"
              title="Min Sale 24hr"
            ></iframe>
           </div>
          <div className="col-md-6 activeHolders">
           <iframe
              src="https://dune.com/embeds/448554/852466/3becf80c-b6e5-4150-8426-9aa73bb1dce0"
              height="200"
              width="700"
              title="Min Sale 24hr"
            ></iframe>
           </div>
        </div>
      </div>
      <div className="container mt-4 embbedStyle">
        <div className="row">
          <div className="col-md-3">
            <div>
            <Image src={Golem} alt="Human" width={400} height={350} layout='responsive' />
            </div>
          </div>
          <div className="col-md-3 text-center">
           <iframe
              src="https://dune.com/embeds/445102/845889/87d85979-11c8-4546-940a-62f861987070"
              height="200"
              width="200"
              title="Min Sale 24hr"
            ></iframe>
           </div>
          <div className="col-md-6 activeHolders">
           <iframe
              src="https://dune.com/embeds/445170/846122/94a61d34-eaaa-4e04-a52e-0a4c0dddfe63"
              height="200"
              width="700"
              title="Min Sale 24hr"
            ></iframe>
           </div>
        </div>
      </div>
      <div className="container mt-4 embbedStyle">
        <div className="row">
          <div className="col-md-3">
            <div>
            <Image src={Cyborg} alt="Human" width={400} height={350} layout='responsive' />
            </div>
          </div>
          <div className="col-md-3 text-center">
           <iframe
              src="https://dune.com/embeds/445102/845889/87d85979-11c8-4546-940a-62f861987070"
              height="200"
              width="200"
              title="Min Sale 24hr"
            ></iframe>
           </div>
          <div className="col-md-6 activeHolders">
           <iframe
              src="https://dune.com/embeds/445292/846232/8424f5da-c9ef-4cc6-b955-4946a9c91078"
              height="200"
              width="700"
              title="Min Sale 24hr"
            ></iframe>
           </div>
        </div>
      </div>
      <div className="container mt-4 embbedStyle">
        <div className="row">
          <div className="col-md-3">
            <div>
            <Image src={Alien} alt="Human" width={400} height={350} layout='responsive'/>
            </div>
          </div>
          <div className="col-md-3 text-center">
           <iframe
              src="https://dune.com/embeds/445102/845889/87d85979-11c8-4546-940a-62f861987070"
              height="200"
              width="200"
              title="Min Sale 24hr"
            ></iframe>
           </div>
          <div className="col-md-6 activeHolders">
           <iframe
              src="https://dune.com/embeds/449088/853527/35bf5164-e413-4326-97a6-7c6fb2d10928"
              height="200"
              width="700"
              title="Min Sale 24hr"
            ></iframe>
           </div>
        </div>
      </div>
      <div className="container mt-4 embbedStyle">
        <div className="row">
          <div className="col-md-3">
            <div>
            <Image src={Devil} alt="Human" width={400} height={350} layout='responsive'/>
            </div>
          </div>
          <div className="col-md-3 text-center">
           <iframe
              src="https://dune.com/embeds/445102/845889/87d85979-11c8-4546-940a-62f861987070"
              height="200"
              width="200"
              title="Min Sale 24hr"
            ></iframe>
           </div>
          <div className="col-md-6 activeHolders">
           <iframe
              src="https://dune.com/embeds/449093/853536/9f608893-04c5-4217-8971-b81bb6e9df6b"
              height="200"
              width="700"
              title="Min Sale 24hr"
            ></iframe>
           </div>
        </div>
      </div>
      <div className="container mt-4 embbedStyle">
        <div className="row">
          <div className="col-md-3">
            <div>
            <Image src={Meltie} alt="Human" width={400} height={350} layout='responsive' />
            </div>
          </div>
          <div className="col-md-3 text-center">
           <iframe
              src="https://dune.com/embeds/445102/845889/87d85979-11c8-4546-940a-62f861987070"
              height="200"
              width="200"
              title="Min Sale 24hr"
            ></iframe>
           </div>
          <div className="col-md-6 activeHolders">
           <iframe
              src="https://dune.com/embeds/449094/853539/48837c37-41eb-4ce8-b657-b661fac531d1"
              height="200"
              width="700"
              title="Min Sale 24hr"
            ></iframe>
           </div>
        </div>
      </div>
      <div className="container mt-4 embbedStyle">
        <div className="row">
          <div className="col-md-3">
            <div>
            <Image src={Bubbly} alt="Human" width={400} height={350} layout='responsive' />
            </div>
          </div>
          <div className="col-md-3 text-center">
           <iframe
              src="https://dune.com/embeds/445102/845889/87d85979-11c8-4546-940a-62f861987070"
              height="200"
              width="200"
              title="Min Sale 24hr"
            ></iframe>
           </div>
          <div className="col-md-6 activeHolders">
           <iframe
              src="https://dune.com/embeds/466563/884394/a3c99903-a393-4108-903b-7559871ad0a0"
              height="200"
              width="700"
              title="Min Sale 24hr"
            ></iframe>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Traits;
