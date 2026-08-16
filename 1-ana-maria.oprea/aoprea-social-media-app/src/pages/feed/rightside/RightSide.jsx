import styles from "./RightSide.module.scss";
import friendPicture from "../../../assets/photo.jpg";
import friendPicture2 from "../../../assets/friend_profile.webp";
import { useState } from "react";

import SendIcon from "@mui/icons-material/Send";

const RightSide = ({ collapsed, onToggleCollapse }) => {
  const [openMessages, setOpenMessages] = useState([false, false, false]);
  const [followed, setFollowed] = useState([false, false, false]);
  const stories = [
    { img: friendPicture, name: "Alexandra" },
    { img: friendPicture, name: "Mircea" },
    { img: friendPicture, name: "Ioana" },
    { img: friendPicture, name: "Maria" },
    { img: friendPicture, name: "Andreea" },
    { img: friendPicture, name: "Corina" },
  ];

  const clickedFriend = (index) => {
    setOpenMessages((prev) => {
      const updated = [...prev];
      updated[index] = !updated[index];
      return updated;
    });
  };

  const toggleFollow = (index) => {
    setFollowed((prev) => {
      const updated = [...prev];
      updated[index] = !updated[index];
      return updated;
    });
  };

  const friends = ["Alexandra", "Mircea", "Ioana", "Andrei", "Maria", "Paul"];
  const [statuses] = useState(() =>
    Array.from(
      { length: friends.length },
      () => Math.floor(Math.random() * 3) + 1,
    ),
  );
  const [messageInputs, setMessageInputs] = useState({});

  const handleSendMessage = (index) => {
    const trimmedValue = (messageInputs[index] ?? "").trim();

    if (!trimmedValue) {
      return;
    }

    window.dispatchEvent(
      new CustomEvent("new-message-notification", {
        detail: {
          message: trimmedValue,
          senderName: friends[index] || "New contact",
          senderPicture: friendPicture2,
        },
      }),
    );
    setMessageInputs((prev) => ({ ...prev, [index]: "" }));
  };

  return (
    <div className={`${styles.messages} ${collapsed ? styles.collapsed : ""}`}>
      <div className={styles.toggleRow}>
        <button
          type="button"
          className={styles.collapseButton}
          onClick={onToggleCollapse}
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {collapsed ? "›" : "‹"}
        </button>
      </div>

      {!collapsed && (
        <>
          <h3>Stories</h3>
          <div className={styles.stories}>
            <ul>
              {stories.map((story, index) => (
                <li key={index} className={styles.storyItem}>
                  <img
                    src={story.img}
                    alt={story.name}
                    className={styles.friendPicture}
                  />
                  <span className={styles.storyName}>{story.name}</span>
                </li>
              ))}
            </ul>
          </div>

          <h3>Messages</h3>
          <ul className={styles.messenger}>
            {friends.map((name, index) => (
              <li key={index}>
                <div
                  className={styles.friend}
                  onClick={() => clickedFriend(index)}
                >
                  <div className={styles.pictureStatus}>
                    <img
                      src={friendPicture2}
                      alt=""
                      className={styles.friendPicture}
                    />

                    <span
                      className={`${styles.status} ${styles[`_${statuses[index]}`]}`}
                    ></span>
                  </div>

                  <span className={styles.name}>{name}</span>
                </div>

                <div
                  className={`${styles.sendMessage} ${
                    openMessages[index] ? styles.clicked : ""
                  }`}
                >
                  <input
                    type="text"
                    placeholder="Type message"
                    className="messageContent"
                    value={messageInputs[index] ?? ""}
                    onChange={(event) =>
                      setMessageInputs((prev) => ({
                        ...prev,
                        [index]: event.target.value,
                      }))
                    }
                  />
                  <button
                    className={styles.messageSendBtn}
                    onClick={() => handleSendMessage(index)}
                  >
                    <SendIcon />
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <h3>Suggested</h3>
          <ul className={styles.suggested}>
            {["Alexandra", "Mircea", "Ioana", "Elena"].map((name, index) => (
              <li key={index}>
                <div className={styles.friend}>
                  <div className={styles.friendProfile}>
                    <div className={styles.pictureStatus}>
                      <img
                        src={friendPicture2}
                        alt=""
                        className={styles.friendPicture}
                      />
                    </div>
                    <span className={styles.name}>{name}</span>
                  </div>

                  <button
                    className={`${styles.follow} ${
                      followed[index] ? styles.following : ""
                    }`}
                    onClick={() => toggleFollow(index)}
                  >
                    {followed[index] ? "Following" : "Follow"}
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default RightSide;
