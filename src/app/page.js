"use client";

import Header from "../component/header";
import styles from "./page.module.css";
import Image from "next/image";

const Home = () => {
  return (
    <div>
      <Header />
      <div>
        <div className={styles.textContainer}>
          <p className={styles.welcome}>SKILL ENTERPRISE</p>
          <p className={styles.welcome}>WELCOMES YOU</p>
          <p className={styles.second}>Doing Business the Right Way</p>
          <p className={styles.third}>
            Since we started business Skill Enterprise has been proud to serve
            the Manchester and Sheffield community. We're committed to not only
            providing quality products and services but going above and beyond
            to ensure our customers are completely satisfied. We welcome you to
            look through our site to see all we have to offer.
          </p>
        </div>
        <div className={styles["image-container"]}>
          <Image
            src="/assets/power-the-future-cta-1800x600.jpg"
            alt="Contact Image"
            layout="responsive"
            width={1000}
            height={150}
            className={styles["contact-image"]}
          />
          <div className={styles["text-box"]}>
          <p className={styles.firstLine}>We Power The Future</p>
            <p className={styles["image-text"]}>MGF forecourts will be the place for high speed
            , ultra rapid top-up charging alongside a convenient retail and 'food to go' offering.</p>
          </div>
        </div>
      <div className={styles.partnerContainer}>
        <p className={styles.partnerWrapper1}>Partners & Brands</p>
        <p className={styles.partnerWrapper2}>MFG works with a number of carefully selected partners and brands to provide 
        customers with a unique fuel, expanding ultra-rapid electric vehicle (EV) changing and convenient forecourt 
        shop and 'food to go' experience.</p>
        <div className="partners_img_container">
          <div className={styles.first_col}>
          <Image
          src="/assets/power-the-future-cta-1800x600.jpg"
          alt="Contact Image"
          layout="responsive"
          width={10}
          height={50}
          className={styles["partners_image"]}
        />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Home;
