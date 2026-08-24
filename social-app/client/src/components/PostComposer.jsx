import { useState } from "react";

const CATEGORIES = [
  { value: "news", label: "📰 Noutăți" },
  { value: "tech", label: "💻 Tech Talk" },
  { value: "gaming", label: "🎮 Gaming" },
  { value: "design", label: "🎨 Design" },
];

export default function PostComposer({ onSubmit }) {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("news");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    onSubmit({ title: title.trim(), description: description.trim(), category });
    setTitle("");
    setDescription("");
    setCategory("news");
    setOpen(false);
  };

  return (
    <div className="win-panel composer-window">
      <div className="win-titlebar">
        <span className="win-title">✏️ postare-noua.txt</span>
        <span className="win-controls">
          <span onClick={() => setOpen((o) => !o)} style={{ cursor: "pointer" }}>
            {open ? "▾" : "▸"}
          </span>
        </span>
      </div>

      {!open ? (
        <button type="button" className="composer-prompt" onClick={() => setOpen(true)}>
          ✎ Ce ai pe suflet, Andrei?
        </button>
      ) : (
        <form className="composer-form" onSubmit={handleSubmit}>
          <input
            type="text"
            className="input-sunken"
            placeholder="Titlul postării"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            autoFocus
          />
          <textarea
            className="input-sunken"
            placeholder="Ce vrei să distribui?"
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <div className="composer-footer">
            <select
              className="input-sunken composer-category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              {CATEGORIES.map((c) => (
                <option key={c.value} value={c.value}>
                  {c.label}
                </option>
              ))}
            </select>
            <div className="composer-buttons">
              <button type="button" className="btn-3d" onClick={() => setOpen(false)}>
                Anulează
              </button>
              <button type="submit" className="btn-3d accent" disabled={!title.trim()}>
                Postează
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
