import React from "react";
import Heading from "../components/common/Heading";
import CommonHeading from "../components/common/CommonHeading";
import { contact } from "../components/data/Data";
import emailjs from '@emailjs/browser'


export default function Contact() {

  const sendMail = {
    serviceId:'service_ahuq9iq',
    templateId:'template_8ik209d',
    public_key:'vrhLFfhlGifjvjNwx'
  }

  const sendEmail = (e) => {
    e.preventDefault();
    alert("Send Email");
  
    const formData = {
      email_from: e.target.email_from.value,
      message: e.target.message.value,
      user_name: e.target.user_name.value,
      subject: e.target.subject.value,
      // Add other form fields as needed
    };
  
    emailjs.send(sendMail.serviceId, sendMail.templateId, formData, sendMail.public_key)
      .then((response) => {
        console.log('Email sent successfully:', response);
        // Reset form fields after successful sending
        e.target.reset();
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  };
  
  return (
    <>
      <Heading heading="Contact" title="Home" subtitle="Contact" />

      <div className="container-xxl py-5">
        <div className="container">
          <CommonHeading
            heading="Contact Us"
            subtitle="Contact "
            title="For Any Query"
          />
          <div className="row g-4">
            <div className="col-12">
              <div className="row gy-4">
                {contact.map((item, index) => (
                  <div className="col-md-4" key={index}>
                    <h6 className="section-title text-start text-primary text-uppercase">
                      {item.title}
                    </h6>
                    <p>
                      {item.icon}
                      {item.email}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-md-6 wow fadeIn" data-wow-delay="0.1s">
              <iframe
                className="position-relative rounded w-100 h-100"
                title="Grand watergate locations"
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d484.42692093424074!2d100.53662253469466!3d13.753806901815384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTPCsDQ1JzEzLjciTiAxMDDCsDMyJzEzLjAiRQ!5e0!3m2!1sth!2sth!4v1712041361655!5m2!1sth!2sth"
                frameBorder="0"
                style={{ minHeight: "350px", border: "0" }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"></iframe>
            </div>
            <div className="col-md-6">
              <div className="wow fadeInUp" data-wow-delay="0.2s">
                <form
                onSubmit={sendEmail}
                >
                  <div className="row g-3">
                    <div className="col-md-6">
                      
                      {/* Name input */}

                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          name="user_name"
                          placeholder="Your Name"
                          required
                        />
                        <label htmlFor="name">Your Name</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          name="email_from"
                          placeholder="Your Email"
                          required
                        />
                        <label htmlFor="email">Your Email</label>
                      </div>
                    </div>
                    <div className="col-12">

                      {/* Subject Input */}

                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="subject"
                          name="subject"
                          placeholder="Subject"
                          required
                        />
                        <label htmlFor="subject">Subject</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <textarea
                          className="form-control"
                          placeholder="Leave a message here"
                          id="message"
                          name="message"
                          style={{ height: "150px" }}
                          required
                          ></textarea>
                        <label htmlFor="message">Message</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button
                        className="btn btn-primary w-100 py-3"
                        type="submit">
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
