import { useState } from "react";

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <div className="contact">
      <div className="container">
        <h1>Contact Us</h1>
        {isSubmitted ? (
          <div className="submit-response">
            <h2>Thank You!!</h2>
            <p>Your message has been sent.</p>
            <button
              onClick={() => {
                setIsSubmitted(false);
              }}
              className="send-msg"
            >
              Send Another Message
            </button>
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              e.target.reset();
              setIsSubmitted(true);
            }}
          >
            <input
              type="text"
              placeholder="Name"
              name="username"
              autoComplete="off"
              required
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              autoComplete="off"
              required
            />
            <textarea
              placeholder="Type your message here.."
              name="message"
              rows={"8"}
              cols={"50"}
              required
            ></textarea>
            <button className="submit-btn">Send Message</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Contact;
