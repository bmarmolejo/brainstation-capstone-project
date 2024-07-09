import React from 'react';
import './ContactPage.scss';

const ContactPage = () => {

  return (
    <div className='contact'>
        <main>
            <h1>Contact Us</h1>
            <form>
                <div>
                    <label>Name</label>
                    <input type="text" required placeholder='Name'/>
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" required placeholder='abc@yourmail.com'/>
                </div>
                <div>
                    <label>Send us a message </label>
                    <input type="text" required placeholder='We would love to hear from you!'/>
                </div>
                <button>Send</button>
            </form>
        </main>
    </div>
  )
}

export default ContactPage;