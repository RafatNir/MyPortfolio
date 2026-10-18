import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Contact: shows my contact details and a form that captures the visitor's
// information, then redirects to the Home page on submit
export default function Contact() {
  const navigate = useNavigate();

  // Holds the current value of every form field
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });

  // Updates the matching field as the user types (matched by each input's name)
  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
  }

  // Captures the submitted data, then redirects the user to the Home page
  function handleSubmit(event) {
    event.preventDefault();
    console.log("Contact form submitted:", formData);
    navigate("/");
  }

  return (
    <section className="page-shell contact-grid">
      <div>
        <p className="eyebrow">Contact me</p>
        <h1>Let&apos;s start a conversation.</h1>
        <p className="lead">
          Have a project, opportunity, or question? Send a message and
          I&apos;ll get back to you.
        </p>
        <p>
          <strong>Email</strong>
          <br />
          rislam54@my.centennialcollege.ca
        </p>
        <p>
          <strong>Location</strong>
          <br />
          Toronto, Ontario
        </p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="firstName">First name</label>
        <input id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />

        <label htmlFor="lastName">Last name</label>
        <input id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />

        <label htmlFor="phone">Phone number</label>
        <input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} required />

        <label htmlFor="email">Email address</label>
        <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" value={formData.message} onChange={handleChange} required />

        <button className="button" type="submit">
          Send message
        </button>
      </form>
    </section>
  );
}