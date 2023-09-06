"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './contact.module.css'; // Import the CSS module
import Header from '../../component/header';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (you can send data to a server here or perform client-side validation)
    console.log(formData);
    // Reset the form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      address: '',
      subject: '',
      message: '',
    });
  };

  return (
    <div className={styles['page-container']}>
      <Header />
      <div>
        <Image
          src="/assets/contact-banner.jpg"
          alt="Contact Image"
          layout="responsive"
          width={1000}
          height={150}
          className={styles['contact-image']}
        />
      </div>

      {/* Get in Touch Details */}
      <div className={styles['get-in-touch']}>
        <div className={styles['address-form']}>
          <h3>Get in Touch</h3>
          <p>Address: 123 Main Street</p>
          <p>Email: contact@example.com</p>
          <p>Phone: +1 123-456-7890</p>
        </div>

        {/* Contact Us Form */}
        <div className={styles['contact-form']}>
          <form className={styles['contact-form']} onSubmit={handleSubmit}>
            <div className={styles['form-name']}>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles['form-mail']}>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles['form-phone']}>
              <label htmlFor="phone">Phone:</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles['form-address']}>
              <label htmlFor="address">Address:</label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
              />
            </div>
            <div className={styles['form-subject']}>
              <label htmlFor="subject">Subject:</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles['form-msg']}>
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                required
              ></textarea>
            </div>
            <div className={styles['form-submit-btn']}>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;


