import { useState } from "react";
import styles from "../../../styles/RightSideBar.module.scss";

const initialReminders = [
  { id: 1, title: "Purrfect brunch", time: "Today • 11:00", done: true },
  { id: 2, title: "Playdate at the park", time: "Today • 17:00", done: false },
  { id: 3, title: "Vet check reminder", time: "Tomorrow • 09:30", done: false },
];

export default function RightSidebar() {
  const [reminders, setReminders] = useState(initialReminders);
  const [newReminder, setNewReminder] = useState("");

  const toggleReminder = (id) => {
    setReminders((currentReminders) =>
      currentReminders.map((reminder) =>
        reminder.id === id
          ? { ...reminder, done: !reminder.done }
          : reminder
      )
    );
  };

  const addReminder = () => {
    const reminderText = newReminder.trim();

    if (!reminderText) {
      return;
    }

    setReminders((currentReminders) => [
      {
        id: Date.now(),
        title: reminderText,
        time: "New plan",
        done: false,
      },
      ...currentReminders,
    ]);
    setNewReminder("");
  };

  return (
    <div className={styles.sidebar}>
      <div className={styles.headerRow}>
        <span className={styles.badge}>Planner</span>
        <span className={styles.miniLabel}>
          {reminders.filter((reminder) => reminder.done).length} done
        </span>
      </div>

      <h3>Agenda for today</h3>

      <div className={styles.reminderList}>
        {reminders.map((reminder) => (
          <div
            key={reminder.id}
            className={`${styles.taskCard} ${reminder.done ? styles.done : ""}`}
          >
            <div className={styles.taskText}>
              <strong>{reminder.title}</strong>
              <span>{reminder.time}</span>
            </div>

            <button type="button" onClick={() => toggleReminder(reminder.id)}>
              {reminder.done ? "Done" : "Mark done"}
            </button>
          </div>
        ))}
      </div>

      <div className={styles.inputRow}>
        <input
          type="text"
          value={newReminder}
          onChange={(event) => setNewReminder(event.target.value)}
          placeholder="Add a reminder"
        />
        <button type="button" onClick={addReminder}>
          Add
        </button>
      </div>
    </div>
  );
}