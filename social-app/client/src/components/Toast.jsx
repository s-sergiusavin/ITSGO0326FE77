export default function Toast({ message, actionLabel, onAction, onDismiss }) {
  if (!message) return null;

  return (
    <div className="retro-toast win-panel">
      <span>{message}</span>
      {actionLabel && (
        <button type="button" className="btn-3d" onClick={onAction}>
          {actionLabel}
        </button>
      )}
      <button type="button" className="toast-close" onClick={onDismiss} title="Închide">
        ×
      </button>
    </div>
  );
}
