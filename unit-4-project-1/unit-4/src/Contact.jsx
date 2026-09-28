import "./Contact.css";

function Contact() {
  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <p>We would love to hear from you!</p>

      <form>
        <input type="text" placeholder="Enter your name" />

        <input type="email" placeholder="Enter your email" />

        <textarea placeholder="Enter your message"></textarea>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
