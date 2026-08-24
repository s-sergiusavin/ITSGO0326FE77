export default function Modal({ title, onClose, children, maxWidth }) {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal-window win-panel"
        style={maxWidth ? { maxWidth } : undefined}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="win-titlebar">
          <span className="win-title">{title}</span>
          <span className="win-controls">
            <span onClick={onClose} style={{ cursor: "pointer" }}>
              ×
            </span>
          </span>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
}
