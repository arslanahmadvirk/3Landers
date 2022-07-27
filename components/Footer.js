import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";
const Footer = () => {
  return (
    <footer className={styles.footer}>
    <div
    >
      <h1>Powered by Dune Analytics</h1>
      <div className="col-md-6 mx-auto">
      <h6>View all 3landers and 3land world assets on any of the following marketplaces. (Opensea) (LooksRare) (X2Y2) 
       Keep in mind this is a community made dashboard and all the data may not be completely accurate.</h6>
       </div>
      <div className='mt-2 text-center'>
      <Image src="/dune.png" alt="Vercel Logo" width={40} height={40} />
      </div>
    </div>
  </footer> 
  );
};

export default Footer;
