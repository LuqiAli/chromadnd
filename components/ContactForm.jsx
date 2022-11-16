import React from "react";

const ContactForm = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [cname, setCname] = useState("");
  const [hear, setHear] = useState("");
  const [message, setMessage] = useState("");

  const values = { fname, lname, email, cname, hear, message };

  const resetValues = () => {
    setFname("");
    setLname("");
    setEmail("");
    setCname("");
    setHear("");
    setMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      if (!res.ok) {
        resetValues();
      }
    } catch (err) {
      console.log(err);
    }

    // console.log(values);
  };

  return (
    <form className="contact-form">
      <div className="contact-form-row1 form-item">
        {/* <label for="fname">First Name</label> */}
        <input
          type="text"
          id="fname"
          name="fname"
          placeholder="First name"
          value={fname}
          onChange={(e) => setFname(e.target.value)}
          required
        />
        {/* <label for="lname">Last Name</label> */}
        <input
          type="text"
          id="lname"
          name="lname"
          placeholder="Last name"
          value={lname}
          onChange={(e) => setLname(e.target.value)}
          required
        />
      </div>
      <div className="contact-form-row2 form-item">
        {/* <label for="email">Email</label> */}
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        {/* <label for="cname">Company Name</label> */}
        <input
          type="text"
          id="cname"
          name="cname"
          placeholder="Company Name"
          value={cname}
          onChange={(e) => setCname(e.target.value)}
          required
        />
      </div>
      <div className="contact-form-row3 form-item">
        {/* <label for="hear">How did you hear about us?</label> */}
        <input
          type="text"
          id="hear"
          name="hear"
          placeholder="How did you hear about us?"
          value={hear}
          onChange={(e) => setHear(e.target.value)}
          required
        />
      </div>
      <div className="contact-form-row4 form-item">
        <label htmlFor="message">Your message</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
      </div>
      <button
        onClick={(e) => handleSubmit(e)}
        type="submit"
        className="contact-form-submit"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
