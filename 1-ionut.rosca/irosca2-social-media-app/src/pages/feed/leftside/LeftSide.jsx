import { useState } from "react";
import styles from "../../../styles/LeftSidebar.module.scss";

const initialEvents = [
  {
    id: 1,
    name: "Sunset Paw Walk",
    time: "Today • 18:30",
    location: "Central Park",
    going: 24,
    joined: true,
  },
  {
    id: 2,
    name: "Cat Café Meetup",
    time: "Fri • 19:00",
    location: "City Studio",
    going: 18,
    joined: false,
  },
  {
    id: 3,
    name: "Pet Portrait Workshop",
    time: "Sat • 11:00",
    location: "Creative Loft",
    going: 12,
    joined: false,
  },
];

export default function LeftSidebar() {
  const [events, setEvents] = useState(initialEvents);

  const toggleJoin = (id) => {
    setEvents((currentEvents) =>
      currentEvents.map((event) =>
        event.id === id
          ? {
              ...event,
              joined: !event.joined,
              going: event.joined ? event.going - 1 : event.going + 1,
            }
          : event
      )
    );
  };

  return (
    <div className={styles.sidebar}>
      <div className={styles.headerRow}>
        <span className={styles.badge}>Community</span>
        <span className={styles.miniLabel}>
          {events.filter((event) => event.joined).length} joined
        </span>
      </div>

      <h3>Upcoming events</h3>

      <div className={styles.eventList}>
        {events.map((event) => (
          <div
            key={event.id}
            className={`${styles.eventCard} ${event.joined ? styles.active : ""}`}
          >
            <div className={styles.eventTitleRow}>
              <strong>{event.name}</strong>
              <span className={styles.dot}></span>
            </div>

            <p>{event.time}</p>
            <small>{event.location}</small>

            <div className={styles.footerRow}>
              <span>{event.going} going</span>
              <button type="button" onClick={() => toggleJoin(event.id)}>
                {event.joined ? "Joined" : "Join event"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
