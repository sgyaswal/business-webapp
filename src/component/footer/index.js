import React from 'react';
import styles from './footer.module.css'; // Import the CSS module

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>© Copyright Skill Enterprise 2023. All rights reserved.</p>
      <p>Registered in India</p>
      <p>VAT Number: 332811133</p>
    </footer>
  );
};

export default Footer;