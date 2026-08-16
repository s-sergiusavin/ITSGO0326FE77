import { Link, NavLink, useNavigate } from "react-router-dom";
import styles from "./Navigation.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../redux/selectors";
import { toggleLogin } from "../redux/slices/authSlice";
import { useEffect, useState } from "react";

import Diversity2Icon from "@mui/icons-material/Diversity2";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import TryIcon from "@mui/icons-material/Try";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

const Navigation = () => {
  const user = useSelector(selectUser);
  const isLoggedIn = user.isAuthenticated;
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState(0);
  const [messages, setMessages] = useState([]);
  const [showMessagePreview, setShowMessagePreview] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    const handleNewNotification = (event) => {
      const senderName = event.detail?.senderName || "New contact";
      const senderPicture = event.detail?.senderPicture || "";
      const message = event.detail?.message || "New message";

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + Math.random(),
          senderName,
          senderPicture,
          message,
        },
      ]);
      setNotifications((prev) => prev + 1);
    };

    window.addEventListener("new-message-notification", handleNewNotification);

    return () => {
      window.removeEventListener(
        "new-message-notification",
        handleNewNotification,
      );
    };
  }, []);

  const toggleAuth = () => {
    dispatch(toggleLogin());
    isLoggedIn ? navigate("/auth") : navigate("/");
  };

  const handleMessagesClick = () => {
    setShowMessagePreview((prev) => !prev);
    if (notifications > 0) {
      setNotifications(0);
    }
  };

  const handleRemoveMessage = (id) => {
    setMessages((prev) => {
      const nextMessages = prev.filter((message) => message.id !== id);

      setNotifications((currentCount) => Math.max(0, currentCount - 1));

      if (nextMessages.length === 0) {
        setShowMessagePreview(false);
      }

      return nextMessages;
    });
  };

  return (
    <header>
      <Link to="/">
        <div className={styles.logo}>
          <Diversity2Icon />
          <span className={styles.logoText}>My social media</span>
        </div>
      </Link>

      <nav>
        <ul className={styles.menu}>
          {isLoggedIn && (
            <div className={styles.altMenu}>
              <div className={styles.menu1}>
                <li className={styles.notifications}>
                  <NotificationsActiveIcon />
                  {notifications > 0 && (
                    <span className={styles.notificationCount}>
                      {notifications}
                    </span>
                  )}
                </li>
                <li className={styles.messages} onClick={handleMessagesClick}>
                  <TryIcon />
                  {notifications > 0 && (
                    <span className={styles.notificationCount}>
                      {notifications}
                    </span>
                  )}
                  {showMessagePreview && messages.length > 0 && (
                    <div className={styles.messagePreview}>
                      {messages.map((message) => (
                        <div
                          key={message.id}
                          className={styles.messagePreviewItem}
                        >
                          <div className={styles.messagePreviewHeader}>
                            <img
                              src={message.senderPicture}
                              alt={message.senderName}
                              className={styles.messagePreviewImage}
                            />
                            <span>{message.senderName}</span>
                          </div>
                          <div className={styles.messagePreviewBody}>
                            <p>{message.message}</p>
                            <button
                              type="button"
                              className={styles.removeMessageBtn}
                              onClick={(event) => {
                                event.stopPropagation();
                                handleRemoveMessage(message.id);
                              }}
                            >
                              <RemoveCircleIcon />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </li>
                <li className={styles.videos}>
                  <PlayCircleFilledIcon />
                </li>
              </div>

              <div className={styles.menu2}>
                <li className={styles.menuItem}>
                  <NavLink to="/profile/:id"> My Profile</NavLink>
                </li>
              </div>
            </div>
          )}
          <li className={styles.menuItem} onClick={toggleAuth}>
            <NavLink to="/auth"> {isLoggedIn ? "Logout" : "Login"}</NavLink>
          </li>
          <li>{user.email}</li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
