import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    axios.post('/api/contact', formData)
      .then(response => alert('Message sent!'))
      .catch(error => console.error('Error sending message:', error));
  };

  return (
    <div>
      <Navbar />
      <main>
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name:</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} />
          </div>
          <div>
            <label>Email:</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} />
          </div>
          <div>
            <label>Message:</label>
            <textarea name="message" value={formData.message} onChange={handleChange}></textarea>
          </div>
          <button type="submit">Send</button>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
