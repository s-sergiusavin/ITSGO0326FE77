import { useEffect, useMemo, useState } from "react";
import Header from "../components/Header.jsx";
import Lightbox from "../components/Lightbox.jsx";
import Toast from "../components/Toast.jsx";
import EditProfileModal from "../components/EditProfileModal.jsx";
import AddPhotoModal from "../components/AddPhotoModal.jsx";
import "../styles/profile.css";

const TABS = [
  { id: "timeline", label: "🗂 Cronologie" },
  { id: "about", label: "ℹ️ Despre" },
  { id: "photos", label: "🖼 Fotografii" },
  { id: "friends", label: "👥 Prieteni" },
];

export default function Profile() {
  const [profile, setProfile] = useState(null);
  const [friends, setFriends] = useState([]);
  const [trending, setTrending] = useState([]);
  const [posts, setPosts] = useState([]);
  const [activeTab, setActiveTab] = useState("timeline");
  const [editProfileOpen, setEditProfileOpen] = useState(false);
  const [addPhotoOpen, setAddPhotoOpen] = useState(false);
  const [addedFriends, setAddedFriends] = useState({});
  const [lightboxImage, setLightboxImage] = useState(null);
  const [toast, setToast] = useState(null);
  const [onlineCount, setOnlineCount] = useState(3);

  useEffect(() => {
    fetch("/api/profile")
      .then((res) => res.json())
      .then(setProfile);
    fetch("/api/friends").then((res) => res.json()).then(setFriends);
    fetch("/api/trending").then((res) => res.json()).then(setTrending);
    fetch("/api/posts").then((res) => res.json()).then(setPosts);
  }, []);

  // simulate a little "who's online" life on the sidebar
  useEffect(() => {
    const t = setInterval(() => {
      setOnlineCount((c) => Math.max(1, c + (Math.random() > 0.5 ? 1 : -1)));
    }, 4000);
    return () => clearInterval(t);
  }, []);

  const showToast = (message) => {
    setToast(message);
    clearTimeout(showToast._t);
    showToast._t = setTimeout(() => setToast(null), 2600);
  };

  const myPosts = useMemo(
    () => posts.filter((p) => profile && p.author === profile.name),
    [posts, profile]
  );

  const saveProfile = async (payload) => {
    try {
      const res = await fetch("/api/profile", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const updated = await res.json();
      setProfile(updated);
      showToast("✅ Profil actualizat");
    } catch {
      setProfile((p) => ({ ...p, ...payload }));
      showToast("⚠ Salvat local (serverul nu a răspuns)");
    } finally {
      setEditProfileOpen(false);
    }
  };

  const addPhoto = async (url) => {
    try {
      const res = await fetch("/api/profile/photos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });
      const updated = await res.json();
      setProfile(updated);
      showToast("✅ Poză adăugată");
    } catch {
      setProfile((p) => ({ ...p, gallery: [url, ...(p.gallery || [])] }));
      showToast("⚠ Adăugat local (serverul nu a răspuns)");
    } finally {
      setAddPhotoOpen(false);
    }
  };

  const removePhoto = async (index) => {
    setProfile((p) => ({ ...p, gallery: p.gallery.filter((_, i) => i !== index) }));
    showToast("🗑 Poză ștearsă");
    try {
      await fetch(`/api/profile/photos/${index}`, { method: "DELETE" });
    } catch {
      /* optimistic removal stays even if the request fails in this demo */
    }
  };

  const toggleAddFriend = (id, name) => {
    setAddedFriends((prev) => {
      const next = { ...prev, [id]: !prev[id] };
      showToast(next[id] ? `✅ Cerere trimisă către ${name}` : "Cerere anulată");
      return next;
    });
  };

  if (!profile) {
    return (
      <div className="profile-page">
        <Header logoIcon="bi-luggage-fill" />
        <p style={{ paddingTop: "6rem", textAlign: "center", color: "#fff", fontFamily: "var(--font-ui)" }}>
          Se încarcă profilul…
        </p>
      </div>
    );
  }

  return (
    <div className="profile-page">
      <Header logoIcon="bi-luggage-fill" />

      <main>
        <aside className="left-content">
          <div className="quick-info-card-left">
            <h2>Quick Info</h2>
            <div className="user-quick-info">
              <ul>
                {profile.quickInfo.map((item, i) => (
                  <li key={i}>
                    {i === 0 && <i className="bi bi-map"></i>}
                    {i === 1 && <i className="bi bi-bicycle"></i>}
                    {" " + item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="favorite-groups">
            <div className="user-favorite-groups">
              <h3>Grupuri favorite</h3>
              <ul>
                {profile.favoriteGroups.map((group, i) => (
                  <li key={i}>
                    <i
                      className={
                        i === 1 ? "bi bi-people-fill" : i === 2 ? "bi bi-phone-fill" : "bi bi-code-slash"
                      }
                    ></i>{" "}
                    {group}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>

        <section className="main-content">
          <div className="profile-card">
            <div className="profile-header-card">
              <div className="cover-photo">
                <img
                  src={profile.cover}
                  alt=""
                  onError={(e) => {
                    e.target.src = "https://picsum.photos/seed/cover-fallback/1200/300";
                  }}
                />
              </div>
            </div>

            <div className="profile-info-container">
              <div className="profile-avatar-circle">
                <img src={profile.avatar} alt="" />
              </div>
              <h2 className="user-name">{profile.name}</h2>
              <p className="user-bio">{profile.bio}</p>

              <button
                type="button"
                className="btn-3d edit-profile-btn"
                onClick={() => setEditProfileOpen(true)}
              >
                ✎ Editează profilul
              </button>

              <div className="profile-stats-bar">
                <button
                  type="button"
                  className={`stat-btn${activeTab === "timeline" ? " active" : ""}`}
                  onClick={() => setActiveTab("timeline")}
                >
                  <strong>{myPosts.length}</strong>
                  <span>postări</span>
                </button>
                <button
                  type="button"
                  className={`stat-btn${activeTab === "friends" ? " active" : ""}`}
                  onClick={() => setActiveTab("friends")}
                >
                  <strong>{profile.stats?.friends ?? friends.length}</strong>
                  <span>prieteni</span>
                </button>
                <button
                  type="button"
                  className={`stat-btn${activeTab === "photos" ? " active" : ""}`}
                  onClick={() => setActiveTab("photos")}
                >
                  <strong>{profile.gallery?.length ?? 0}</strong>
                  <span>foto</span>
                </button>
              </div>
            </div>
          </div>

          <div className="win-panel profile-tabs-window">
            <div className="win-titlebar">
              <span className="win-title">📁 {profile.name.split(" ")[0].toLowerCase()}-profil.exe</span>
              <span className="win-controls">
                <span>_</span>
                <span>□</span>
                <span>×</span>
              </span>
            </div>

            <div className="profile-tab-bar">
              {TABS.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  className={`profile-tab-btn${activeTab === t.id ? " active" : ""}`}
                  onClick={() => setActiveTab(t.id)}
                >
                  {t.label}
                </button>
              ))}
            </div>

            <div className="profile-tab-content">
              {activeTab === "timeline" && (
                <div className="timeline-tab">
                  {myPosts.length === 0 ? (
                    <p className="empty-hint">
                      Nicio postare încă. Mergi la <a href="/feed">Feed</a> ca să publici prima ta
                      postare!
                    </p>
                  ) : (
                    myPosts.map((post) => (
                      <div className="timeline-item" key={post.id}>
                        <img
                          src={post.image}
                          alt=""
                          className="timeline-thumb"
                          onClick={() => setLightboxImage(post.image)}
                          onError={(e) => {
                            e.target.src = `https://picsum.photos/seed/post-fallback-${post.id}/300/300`;
                          }}
                        />
                        <div>
                          <strong>{post.title}</strong>
                          <p>{post.description}</p>
                          <span className="timeline-meta">
                            {post.date} · {post.likes} aprecieri · {post.comments.length} comentarii
                          </span>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              )}

              {activeTab === "about" && (
                <div className="about-tab">
                  <ul>
                    {profile.about.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              {activeTab === "photos" && (
                <div className="photos-tab">
                  <button type="button" className="btn-3d add-photo-btn" onClick={() => setAddPhotoOpen(true)}>
                    + Adaugă poză
                  </button>
                  <div className="photo-grid">
                    {(profile.gallery ?? []).map((src, i) => (
                      <div className="photo-grid-item" key={i}>
                        <button type="button" onClick={() => setLightboxImage(src)}>
                          <img
                            src={src}
                            alt=""
                            onError={(e) => {
                              e.target.src = `https://picsum.photos/seed/gallery-fallback-${i}/500/500`;
                            }}
                          />
                        </button>
                        <button
                          type="button"
                          className="photo-remove-btn"
                          title="Șterge poza"
                          onClick={() => removePhoto(i)}
                        >
                          ×
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "friends" && (
                <ul className="friends-tab-list">
                  {friends.map((friend) => (
                    <li key={friend.id} className="friends-tab-item">
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
        </section>

        <aside className="right-content">
          <div className="user-card-right">
            <div className="suggestions-friends">
              <h3>
                Prieteni sugerați <span className="online-dot">🟢 {onlineCount} online</span>
              </h3>
              <ul>
                {friends.slice(0, 3).map((friend) => (
                  <li key={friend.id}>
                    <div className="suggested-friend">
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
                        {addedFriends[friend.id] ? "✓" : "Adaugă"}
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
              <button type="button" className="see-all-btn" onClick={() => setActiveTab("friends")}>
                Vezi toți prietenii →
              </button>
            </div>
          </div>

          <div className="trending-topics">
            <h3>Trending Topics</h3>
            <div className="info-trending-topics">
              <ul>
                {trending.map((topic) => (
                  <div className="info-trendings" key={topic.id}>
                    <div className="icon-trending">
                      <span>
                        <i className={`bi ${topic.icon}`}></i>
                      </span>
                    </div>
                    <p>{topic.tag}</p>
                  </div>
                ))}
              </ul>
            </div>
          </div>
        </aside>
      </main>

      {editProfileOpen && (
        <EditProfileModal
          profile={profile}
          onClose={() => setEditProfileOpen(false)}
          onSave={saveProfile}
        />
      )}
      {addPhotoOpen && <AddPhotoModal onClose={() => setAddPhotoOpen(false)} onAdd={addPhoto} />}

      <Lightbox image={lightboxImage} title="fotografie.jpg" onClose={() => setLightboxImage(null)} />
      <Toast message={toast} onDismiss={() => setToast(null)} />
    </div>
  );
}
