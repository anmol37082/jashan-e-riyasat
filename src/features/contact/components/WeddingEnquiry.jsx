'use client';

import { useState } from 'react';
import styles from './WeddingEnquiry.module.css';

const GOOGLE_APPS_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbybLZov-imCcrxrFV1kM5kNXN1Pm7OZsUpi1vaNzfENtTXmLzG_xz2ZLiSaAmp-0m3Y7A/exec';

export default function WeddingEnquiry() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    eventDate: '',
    eventType: '',
    guestCount: '',
    budget: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(false);

    try {
      await fetch(GOOGLE_APPS_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(formData),
      });
      setSubmitted(true);
      setFormData({
        name: '',
        phone: '',
        email: '',
        eventDate: '',
        eventType: '',
        guestCount: '',
        budget: '',
        message: '',
      });
      setTimeout(() => setSubmitted(false), 5000);
    } catch {
      setSubmitError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className={styles.enquirySection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.overline}>Enquiry</span>
          <h2 className={styles.heading}>Plan Your Dream Wedding</h2>
          <p className={styles.subheading}>
            Share a few details and our team will get back to you within 24 hours.
          </p>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGrid}>
            <div className={styles.fieldGroup}>
              <label htmlFor="name" className={styles.label}>
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                className={styles.input}
                required
              />
            </div>

            <div className={styles.fieldGroup}>
              <label htmlFor="phone" className={styles.label}>
                Phone Number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+91 78891 08874"
                value={formData.phone}
                onChange={handleChange}
                className={styles.input}
                required
              />
            </div>

            <div className={styles.fieldGroup}>
              <label htmlFor="email" className={styles.label}>
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                className={styles.input}
              />
            </div>

            <div className={styles.fieldGroup}>
              <label htmlFor="eventDate" className={styles.label}>
                Event Date
              </label>
              <input
                id="eventDate"
                name="eventDate"
                type="date"
                value={formData.eventDate}
                onChange={handleChange}
                className={styles.input}
              />
            </div>

            <div className={styles.fieldGroup}>
              <label htmlFor="eventType" className={styles.label}>
                Event Type
              </label>
              <select
                id="eventType"
                name="eventType"
                value={formData.eventType}
                onChange={handleChange}
                className={styles.select}
              >
                <option value="" disabled>
                  Select event type
                </option>
                <option value="wedding">Wedding Ceremony</option>
                <option value="reception">Wedding Reception</option>
                <option value="engagement">Engagement</option>
                <option value="sangeet">Sangeet Night</option>
                <option value="destination">Destination Wedding</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className={styles.fieldGroup}>
              <label htmlFor="guestCount" className={styles.label}>
                Guest Count
              </label>
              <select
                id="guestCount"
                name="guestCount"
                value={formData.guestCount}
                onChange={handleChange}
                className={styles.select}
              >
                <option value="" disabled>
                  Expected guests
                </option>
                <option value="50-100">50 - 100</option>
                <option value="100-200">100 - 200</option>
                <option value="200-500">200 - 500</option>
                <option value="500+">500+</option>
              </select>
            </div>
          </div>

          <div className={styles.fieldGroupFull}>
            <label htmlFor="budget" className={styles.label}>
              Budget Range
            </label>
            <select
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className={styles.select}
            >
              <option value="" disabled>
                Select budget range
              </option>
              <option value="5-10">₹5 Lakh - ₹10 Lakh</option>
              <option value="10-25">₹10 Lakh - ₹25 Lakh</option>
              <option value="25-50">₹25 Lakh - ₹50 Lakh</option>
              <option value="50+">₹50 Lakh+</option>
            </select>
          </div>

          <div className={styles.fieldGroupFull}>
            <label htmlFor="message" className={styles.label}>
              Tell Us More
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Share your vision, theme, or any special requirements..."
              value={formData.message}
              onChange={handleChange}
              className={styles.textarea}
            />
          </div>

          <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
            {isSubmitting
              ? 'Sending...'
              : submitted
                ? 'Thank You - We Will Be in Touch'
                : 'Send Enquiry'}
          </button>
          {submitError && (
            <p role="alert">Enquiry could not be sent. Please try again.</p>
          )}
        </form>
      </div>
    </section>
  );
}
