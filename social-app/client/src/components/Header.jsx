import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const SAMPLE_NOTIFICATIONS = [
  { id: 1, text: "Jane Smith ți-a apreciat postarea", time: "2 min" },
  { id: 2, text: "John Doe a comentat la postarea ta", time: "15 min" },
  { id: 3, text: "Emily Johnson vrea să fie prietenă cu tine", time: "1 oră" },
];

export default function Header({ logoIcon = "bi-house-fill" }) {
  const [now, setNow] = useState(new Date());
  const [notifOpen, setNotifOpen] = useState(false);
  const [unread, setUnread] = useState(SAMPLE_NOTIFICATIONS.length);
  const notifRef = useRef(null);

  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (notifRef.current && !notifRef.current.contains(e.target)) {
        setNotifOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleNotifications = () => {
    setNotifOpen((open) => !open);
    if (!notifOpen) setUnread(0);
  };

  const time = now.toLocaleTimeString("ro-RO", { hour: "2-digit", minute: "2-digit" });

  return (
    <header>
      <div className="main-search">
        <Link to="/feed">
          <i className={`bi ${logoIcon} logo`}></i>
        </Link>
        <input type="search" className="search-input" placeholder="Search on social media" />
      </div>

      <nav className="main-navigation">
        <ul className="navigation">
          <li>
            <Link to="/feed" title="Feed">
              <i className="bi bi-house-fill nav-icons"></i>
            </Link>
          </li>
          <li>
            <Link to="/profile" title="Profil">
              <i className="bi bi-person-circle nav-icons"></i>
            </Link>
          </li>
        </ul>
      </nav>

      <div className="header-right">
        <ul className="links">
          <li>
            <Link to="/landing-page" title="Eveniment nou">
              <i className="bi bi-plus-circle-fill nav-icons"></i>
            </Link>
          </li>
          <li className="notif-wrap" ref={notifRef}>
            <a
              href="#"
              className="bell-icon"
              onClick={(e) => {
                e.preventDefault();
                toggleNotifications();
              }}
              title="Notificări"
            >
              <i className="bi bi-bell-fill nav-icons"></i>
              {unread > 0 && <span>{unread}</span>}
            </a>

            {notifOpen && (
              <div className="notif-dropdown win-panel">
                <div className="win-titlebar">
                  <span className="win-title">🔔 notificari.exe</span>
                </div>
                <ul className="notif-list">
                  {SAMPLE_NOTIFICATIONS.map((n) => (
                    <li key={n.id}>
                      <span>{n.text}</span>
                      <small>{n.time}</small>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        </ul>
        <div className="taskbar-clock">🕒 {time}</div>
      </div>
    </header>
  );
}
