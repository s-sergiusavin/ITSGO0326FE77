export default function Lightbox({ image, title, onClose }) {
  if (!image) return null;

  return (
    <div className="lightbox-backdrop" onClick={onClose}>
      <div className="lightbox-window win-panel" onClick={(e) => e.stopPropagation()}>
        <div className="win-titlebar">
          <span className="win-title">🖼 {title || "imagine.jpg"}</span>
          <span className="win-controls">
            <span onClick={onClose} style={{ cursor: "pointer" }}>
              ×
            </span>
          </span>
        </div>
        <div className="lightbox-body">
          <img src={image} alt={title || ""} />
        </div>
      </div>
    </div>
  );
}
