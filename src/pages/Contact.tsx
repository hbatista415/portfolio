import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !message) {
      alert("Please fill out all fields");
      return;
    }

    alert("Message sent!");
  };

  return (
    <div>
      {/* FORM */}
      <form onSubmit={handleSubmit}>
        <h2>Contact</h2>

        <input
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <textarea
          placeholder="Message"
          onChange={(e) => setMessage(e.target.value)}
        />

        <button type="submit">Send</button>
      </form>

      {/* CONTACT CARD */}
      <div className="card">
        <h3>Contact Info</h3>

        <p>Email: hbatista415@gmail.com</p>

        <p>
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/hailey-batista-737861312"
            target="_blank"
            rel="noreferrer"
          >
            View Profile
          </a>
        </p>
      </div>
    </div>
  );
}