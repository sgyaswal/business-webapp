"use client";

import Image from "next/image";
import Header from "../../component/header";
import styles from "./about.module.css";

const ImageContainer = ({
  src,
  alt,
  width,
  height,
  className,
  title,
  text,
}) => {
  return (
    <div className={`image_container_${className}`}>
      <img src={src} alt={alt} width={width} height={height} />
      <h3>${title}</h3>
      <p>${text}</p>
    </div>
  );
};

const About = () => {
  return (
    <div>
      <Header />
      <div class="image_container">
        <Image
          src="/assets/Crow-Orchard-EV-Station-53-retouched-scaled-1.jpg"
          alt="Contact Image"
          layout="responsive"
          width={1000}
          height={150}
        />
      </div>
      <div className={styles.ContentContainer}>
        <p className={styles.aboutUs}>ABOUT US</p>
        <p className={styles.content}>
          Skill Enterprise is the independent forecourt operator in the UK. It
          has partnering and operating under the BP, Shell, Texaco and Jet fuel
          brands. Skill Enterprise intends to continue to offer its customers
          premium fuel brands couple with an attractive, competitive and
          expanding forecourt shop for today's cost-conscious consumers. Our key
          objective is to make all visits to a Skill Enterprise forecourt as
          pleasurable as possible. We aim to provide our customers with high
          levels of service, good quality, competitively price fuels and, of
          course, a convenient and competitive shopping experience. Our shops
          will provide customers with an exceptional product range and 'food to
          go' offer from top name brands, ongoing value promotions and a
          shopping environment to match any of the multiples. Explore the rest
          of our site to learn more about what we have to offer, and get in
          touch with any questions.
        </p>
        <p className={styles.about_tag}>Skill Enterprise is here for you.</p>
        <div className={styles.linkWrapper}>
          <a href="/contact" className={styles.getTouch}>
            Get in Touch
          </a>{" "}
        </div>{" "}
      </div>
      <div className="feature_desc">
        <ImageContainer
          src="/assets/1293751237.svg"
          alt="some_img"
          height={10}
          width={10}
          className="handshake"
          title="idk"
          text="lorem ipsum"
        />
        ;
      </div>
    </div>
  );
};

export default About;
