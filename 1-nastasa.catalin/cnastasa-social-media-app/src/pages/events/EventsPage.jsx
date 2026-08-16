import styles from "./EventsPage.module.scss";
import PlaceIcon from "@mui/icons-material/Place";
import GroupIcon from "@mui/icons-material/Group";

const events = [
  { id: 1, day: "14", month: "Sept", title: "Meci Rapid București", location: "Stadionul Giulești", going: 12, color: "linear-gradient(135deg, #7b1fa2, #ba68c8)" },
  { id: 2, day: "21", month: "Sept", title: "Ziua Politehnicii", location: "Universitatea Politehnica București", going: 34, color: "linear-gradient(135deg, #1565c0, #42a5f5)" },
  { id: 3, day: "05", month: "Oct", title: "Drumeție la Cascada Bigăr", location: "Caraș-Severin", going: 8, color: "linear-gradient(135deg, #2e7d32, #66bb6a)" },
  { id: 4, day: "12", month: "Oct", title: "Revanșa la Laser Tag", location: "Lasertag București", going: 6, color: "linear-gradient(135deg, #ef6c00, #ffa726)" }
];

const EventsPage = () => {
  return (
    <div className={styles.eventsPage}>
      <h1>Evenimente</h1>
      <p>Evenimentele tale viitoare.</p>

      <div className={styles.placeholderGrid}>
        {events.map((event) => (
          <div key={event.id} className={styles.eventCard}>
            <div className={styles.eventThumbnail} style={{ background: event.color }}>
              <span className={styles.eventDay}>{event.day}</span>
              <span className={styles.eventMonth}>{event.month}</span>
            </div>
            <div className={styles.eventInfo}>
              <h3>{event.title}</h3>
              <p><PlaceIcon fontSize="inherit" /> {event.location}</p>
              <p><GroupIcon fontSize="inherit" /> {event.going} participanți</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsPage;
