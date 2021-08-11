import React from "react";
import Cart from '../components/Cart';
import ContactForm from '../components/ContactForm'

const Contact = () => {
  return (
    <section>
      <Cart />
      <div className="contact-form-wrapper">
      <h1 className="content-title">Have Any Questions?</h1>
        <div className="contact-wrapper">

          <div>
            <ContactForm />
          </div>
          
          <div className="contact-right">
            <p>Please don't hesitate to reach out if you have any questions! 
              We want to make sure each customer gets the best experience with us. 
              Go ahead and contact us via email, or social media! 
              We can't wait to hear from you!

              <br></br><span className="contact-text-space">Sincerely,</span><br></br>

              <span className="contact-text-space">Mamasita's Empanadas</span>
            </p>
          </div>

          <div className="contact-left">
            <iframe 
              title="Homebase"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d65270485.97241677!2d-100.41957212140922!3d-3.148897967792978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb09dff882a7809e1%3A0xb08d0a385dc8c7c7!2sAntarctica!5e0!3m2!1sen!2sus!4v1610573772300!5m2!1sen!2sus" 
              width="550" 
              height="400" 
              frameborder="0" 
              style={{border: 0}} 
              allowfullscreen="" 
              aria-hidden="false" 
              tabindex="0"
            ></iframe>
          </div>
        </div>

      </div>
        
    </section>
  );
};

export default Contact;