import React, { useState } from 'react';
import axios from 'axios';
import './ContactPage.scss';

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
        await axios.post(`${process.env.REACT_APP_API_URL}/api/contact`, {
            name,
            email,
            message
          });
      alert('Message sent! We will get back to you shortly 🍷');
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      alert('Failed to send message.');
    }
  };

  return (
    <div className='contact'>
      <main className='contact__form'>
        <form className='contact__form--input' onSubmit={handleSubmit}>
          <h1>CONTACT US</h1>
          <div>
            <label>Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder='Name'
            />
          </div>
          <div>
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder='email@address.com'
            />
          </div>
          <div>
            <label>Send us a message </label>
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              placeholder='We would love to hear from you!'
            />
          </div>
          <button type="submit">SEND</button>
        </form>
      </main>
    </div>
  );
};

export default ContactPage;
