import { useState } from "react";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import SendIcon from "@mui/icons-material/Send";
import styles from "./MetaAiPage.module.scss";

const initialMessages = [
  { id: 1, from: "bot", text: "Salut! Cu ce te pot ajuta azi?" }
];

const MetaAiPage = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [draft, setDraft] = useState("");

  const sendMessage = () => {
    if (!draft.trim()) return;

    const userMessage = { id: messages.length + 1, from: "user", text: draft.trim() };
    const botReply = { id: messages.length + 2, from: "bot", text: "Îmi pare rău, nu pot răspunde încă la asta." };

    setMessages([...messages, userMessage, botReply]);
    setDraft("");
  };

  return (
    <div className={styles.metaAiPage}>
      <div className={styles.header}>
        <div className={styles.botIcon}>
          <SmartToyIcon />
        </div>
        <h1>Meta AI</h1>
      </div>

      <div className={styles.chatBox}>
        {messages.map((message) => (
          <div
            key={message.id}
            className={`${styles.bubble} ${message.from === "user" ? styles.userBubble : styles.botBubble}`}
          >
            {message.text}
          </div>
        ))}
      </div>

      <div className={styles.composer}>
        <input
          type="text"
          placeholder="Trimite un mesaj lui Meta AI"
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") sendMessage();
          }}
        />
        <button onClick={sendMessage} aria-label="Trimite mesajul">
          <SendIcon fontSize="small" />
        </button>
      </div>
    </div>
  );
};

export default MetaAiPage;
