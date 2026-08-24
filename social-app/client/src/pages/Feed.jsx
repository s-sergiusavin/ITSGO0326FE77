import { useEffect, useMemo, useState } from "react";
import Header from "../components/Header.jsx";
import PostCard from "../components/PostCard.jsx";
import PostComposer from "../components/PostComposer.jsx";
import Lightbox from "../components/Lightbox.jsx";
import Toast from "../components/Toast.jsx";
import "../styles/feed.css";

const CATEGORIES = [
  { value: "news", label: "📰 Noutăți" },
  { value: "tech", label: "💻 Tech Talk" },
  { value: "gaming", label: "🎮 Gaming Zone" },
  { value: "design", label: "🎨 Design Lab" },
];

const RANDOM_AUTHORS = [
  { name: "Alexandra Ionescu", avatar: "https://i.pravatar.cc/80?img=5" },
  { name: "Mihai Popescu", avatar: "https://i.pravatar.cc/80?img=13" },
  { name: "Elena Dumitrescu", avatar: "https://i.pravatar.cc/80?img=9" },
  { name: "Andrei Vasilescu", avatar: "https://i.pravatar.cc/80?img=14" },
  { name: "Maria Constantin", avatar: "https://i.pravatar.cc/80?img=20" },
  { name: "Cristian Marin", avatar: "https://i.pravatar.cc/80?img=33" },
  { name: "Ioana Radu", avatar: "https://i.pravatar.cc/80?img=26" },
  { name: "Bogdan Stancu", avatar: "https://i.pravatar.cc/80?img=15" },
];

export default function Feed() {
  const [posts, setPosts] = useState([]);
  const [friends, setFriends] = useState([]);
  const [trending, setTrending] = useState([]);
  const [addedFriends, setAddedFriends] = useState({});
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");
  const [activeCategory, setActiveCategory] = useState(null);
  const [lightboxImage, setLightboxImage] = useState(null);
  const [lightboxTitle, setLightboxTitle] = useState("");
  const [toast, setToast] = useState(null);

  useEffect(() => {
    fetch("/api/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch(() =>
        setErrorMsg("Nu am putut contacta serverul (rulează pe portul 4000?)"),
      )
      .finally(() => setLoading(false));
    fetch("/api/trending")
      .then((res) => res.json())
      .then(setTrending)
      .catch(() => {});
    fetch("/api/friends")
      .then((res) => res.json())
      .then(setFriends)
      .catch(() => {});
  }, []);

  const showToast = (message) => {
    setToast(message);
    clearTimeout(showToast._t);
    showToast._t = setTimeout(() => setToast(null), 2800);
  };

  const handleLike = async (id, liked) => {
    const delta = liked ? 1 : -1;
    setPosts((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, likes: Math.max(0, p.likes + delta) } : p,
      ),
    );
    try {
      await fetch(`/api/posts/${id}/like`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ delta }),
      });
    } catch {
      /* optimistic update stays even if the request fails in this demo */
    }
  };

  const handleComment = async (id, text) => {
    const optimisticComment = {
      id: Date.now(),
      user: "You",
      avatar: "https://i.pravatar.cc/60?img=8",
      text,
      emoji: "",
    };
    setPosts((prev) =>
      prev.map((p) =>
        p.id === id
          ? { ...p, comments: [...p.comments, optimisticComment] }
          : p,
      ),
    );
    try {
      await fetch(`/api/posts/${id}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text, user: "You" }),
      });
    } catch {
      /* optimistic update stays even if the request fails in this demo */
    }
  };

  const handleClose = (id) => {
    setPosts((prev) => prev.filter((p) => p.id !== id));
    showToast("🗑 Postare ascunsă din feed");
  };

  const handleShare = (post) => {
    showToast(
      `🔗 Link copiat pentru: "${post.title.slice(0, 40)}${post.title.length > 40 ? "…" : ""}"`,
    );
  };

  const handleNewPost = async (draft) => {
    const identity =
      RANDOM_AUTHORS[Math.floor(Math.random() * RANDOM_AUTHORS.length)];
    const optimistic = {
      id: Date.now(),
      author: identity.name,
      avatar: identity.avatar,
      date: new Date().toLocaleDateString("ro-RO"),
      image: `https://loremflickr.com/800/450/${draft.category || "abstract"}?lock=${Date.now()}`,
      category: draft.category,
      title: draft.title,
      description: draft.description,
      likes: 0,
      comments: [],
    };
    setPosts((prev) => [optimistic, ...prev]);
    showToast("✅ Postare publicată!");
    try {
      await fetch("/api/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...draft,
          author: identity.name,
          avatar: identity.avatar,
        }),
      });
    } catch {
      /* optimistic post stays even if the request fails in this demo */
    }
  };

  const toggleAddFriend = (id, name) => {
    setAddedFriends((prev) => {
      const next = { ...prev, [id]: !prev[id] };
      showToast(
        next[id] ? `✅ Cerere trimisă către ${name}` : "Cerere anulată",
      );
      return next;
    });
  };

  const visiblePosts = useMemo(
    () =>
      activeCategory
        ? posts.filter((p) => p.category === activeCategory)
        : posts,
    [posts, activeCategory],
  );

  return (
    <div className="feed-page">
      <Header logoIcon="bi-newspaper" />

      <main>
        <aside className="left-content">
          <div className="win-panel" style={{ marginBottom: "1rem" }}>
            <div className="win-titlebar">
              <span className="win-title">📂 categorii</span>
            </div>
            <div className="card-options">
              {CATEGORIES.map((c) => (
                <div
                  className={`card${activeCategory === c.value ? " card-active" : ""}`}
                  key={c.value}
                  onClick={() =>
                    setActiveCategory((prev) =>
                      prev === c.value ? null : c.value,
                    )
                  }
                >
                  <a href="#" onClick={(e) => e.preventDefault()}>
                    <h1>{c.label}</h1>
                  </a>
                </div>
              ))}
            </div>
          </div>
          {activeCategory && (
            <button
              type="button"
              className="btn-3d"
              style={{ width: "100%" }}
              onClick={() => setActiveCategory(null)}
            >
              ✕ Șterge filtrul
            </button>
          )}
        </aside>

        <section className="main-content">
          <div className="marquee-track" style={{ marginBottom: "1.5rem" }}>
            <span>
              ★ Pasionat de tech și programare. Construiește soluții digitale,
              experimentează cu tehnologii noi și scrie cod curat. Mereu în
              căutare de idei și proiecte interesante. ★
            </span>
          </div>

          <PostComposer onSubmit={handleNewPost} />

          {loading && (
            <p
              style={{
                textAlign: "center",
                color: "#fff",
                fontFamily: "var(--font-ui)",
              }}
            >
              Se încarcă postările…
            </p>
          )}
          {errorMsg && (
            <p
              style={{
                textAlign: "center",
                color: "#fff",
                fontFamily: "var(--font-ui)",
              }}
            >
              {errorMsg}
            </p>
          )}
          {!loading && !errorMsg && visiblePosts.length === 0 && (
            <p
              style={{
                textAlign: "center",
                color: "#fff",
                fontFamily: "var(--font-ui)",
              }}
            >
              Nicio postare în această categorie încă.
            </p>
          )}

          {visiblePosts.map((post) => (
            <PostCard
              key={post.id}
              post={post}
              onLike={handleLike}
              onComment={handleComment}
              onClose={handleClose}
              onOpenImage={(image, title) => {
                setLightboxImage(image);
                setLightboxTitle(title);
              }}
              onShare={handleShare}
            />
          ))}
        </section>

        <aside className="right-content-wrap">
          <div className="win-panel" style={{ marginBottom: "1rem" }}>
            <div className="win-titlebar">
              <span className="win-title">🔥 trending.exe</span>
            </div>
            <div className="right-content">
              {trending.length === 0 ? (
                <p className="empty-hint">Nimic trending momentan.</p>
              ) : (
                <ul className="trending-feed-list">
                  {trending.map((topic) => (
                    <li key={topic.id} className="trending-feed-item">
                      <span className="trending-feed-icon">
                        <i className={`bi ${topic.icon}`}></i>
                      </span>
                      <span>{topic.tag}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <div className="win-panel">
            <div className="win-titlebar">
              <span className="win-title">👥 persoane.exe</span>
            </div>
            <div className="right-content">
              {friends.length === 0 ? (
                <p className="empty-hint">Nicio sugestie momentan.</p>
              ) : (
                <ul className="suggested-people-list">
                  {friends.map((friend) => (
                    <li key={friend.id} className="suggested-friend-feed">
                      <img src={friend.avatar} alt="" />
                      <div className="friend-info">
                        <span>{friend.name}</span>
                        <small>{friend.since}</small>
                      </div>
                      <button
                        type="button"
                        className={`add-friend-btn${addedFriends[friend.id] ? " added" : ""}`}
                        onClick={() => toggleAddFriend(friend.id, friend.name)}
                      >
                        {addedFriends[friend.id] ? "✓ Trimis" : "Adaugă"}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </aside>
      </main>

      <Lightbox
        image={lightboxImage}
        title={lightboxTitle}
        onClose={() => setLightboxImage(null)}
      />
      <Toast message={toast} onDismiss={() => setToast(null)} />
    </div>
  );
}
