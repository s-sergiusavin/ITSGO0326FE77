import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/landing-page.css";

export default function Landing() {
  const [name, setName] = useState("");
  const [booked, setBooked] = useState(false);

  const handleBook = () => {
    if (!name.trim()) return;
    setBooked(true);
  };

  const [contact, setContact] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setContact((prev) => ({ ...prev, [name]: value }));
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (!contact.name.trim() || !contact.email.trim() || !contact.message.trim()) return;
    setSent(true);
  };

  return (
    <div className="landing-page">
      
      <Link to="/feed">
      
        <img src="/assets/back.png" alt="" className="back-image" />
  
      </Link>

      <div className="hero-window win-panel">
        <div className="win-titlebar">
          <span className="win-title">🎉 eveniment.exe — the-best-summer-party.jpg</span>
          <span className="win-controls">
            <span>_</span>
            <span>□</span>
            <span>×</span>
          </span>
        </div>

        <header>
          <h1>
            <span>The best summer party</span> 
          </h1>

          <p className="header-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto enim ipsam labore vero
            quo eaque cum architecto consequuntur voluptas nulla deserunt ex vel culpa velit non
            veritatis excepturi ea rerum, minus neque corporis incidunt? At eveniet quis eius
            iusto vitae. Provident, ea eaque iure et impedit odit pariatur porro! Incidunt!
          </p>

          <div className="form-container">
            <form onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="name">Enter your name</label>
              <input
                type="text"
                id="name"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <p>Example: Sergiu Sergiu</p>
              <input type="button" value={booked ? "Booked!" : "Book now"} onClick={handleBook} />
            </form>
          </div>
        </header>
      </div>

      <div className="call-to-action-window win-panel">
        <div className="win-titlebar">
          <span className="win-title">📋 detalii.txt</span>
          <span className="win-controls">
            <span>_</span>
            <span>□</span>
            <span>×</span>
          </span>
        </div>

        <section className="call-to-action">
          <div className="call-to-action-message">
            <h2>Enjoy the party</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus odio illo magnam
              ab at quod sunt alias eligendi perspiciatis aliquam officia, minus inventore velit
              ea quaerat soluta ipsum nobis reiciendis porro, totam aliquid quam dicta. Ea nihil
              quam corporis, dolorum porro unde sit omnis, dolor aspernatur ratione deserunt? Est,
              odio ab, molestias magni illo corrupti quisquam sunt dignissimos ullam porro eum
              voluptatum modi ducimus, asperiores qui dolorem sequi.
            </p>
            <img src="/assets/post2.webp" alt="" />
          </div>
        </section>
      </div>

      <div className="contact-window win-panel">
        <div className="win-titlebar">
          <span className="win-title">✉️ contact.exe — mesaj-nou.txt</span>
          <span className="win-controls">
            <span>_</span>
            <span>□</span>
            <span>×</span>
          </span>
        </div>

        <section className="contact-section">
          <div className="contact-form-container">
            <h2>Ai o întrebare?</h2>
            <p className="contact-subtitle">Trimite-ne un mesaj și îți răspundem cât mai repede.</p>

            <form onSubmit={handleContactSubmit}>
              <label htmlFor="contact-name">Nume</label>
              <input
                type="text"
                id="contact-name"
                name="name"
                placeholder="Numele tău"
                value={contact.name}
                onChange={handleContactChange}
              />

              <label htmlFor="contact-email">Email</label>
              <input
                type="email"
                id="contact-email"
                name="email"
                placeholder="adresa@exemplu.com"
                value={contact.email}
                onChange={handleContactChange}
              />

              <label htmlFor="contact-message">Mesaj</label>
              <textarea
                id="contact-message"
                name="message"
                placeholder="Scrie mesajul tău aici..."
                rows={4}
                value={contact.message}
                onChange={handleContactChange}
              />

              <input type="submit" value={sent ? "Mesaj trimis!" : "Trimite mesajul"} />
              {sent && <p className="contact-success">Mulțumim! Te contactăm în curând.</p>}
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}
