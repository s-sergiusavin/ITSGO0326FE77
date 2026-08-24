import { useState } from "react";
import Modal from "./Modal.jsx";

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

export default function AddPhotoModal({ onClose, onAdd }) {
  const [url, setUrl] = useState("");
  const [preview, setPreview] = useState("");
  const [saving, setSaving] = useState(false);

  const handleFile = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const dataUrl = await readFileAsDataUrl(file);
    setUrl(dataUrl);
    setPreview(dataUrl);
  };

  const handleUrlChange = (e) => {
    setUrl(e.target.value);
    setPreview(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!url.trim()) return;
    setSaving(true);
    await onAdd(url.trim());
    setSaving(false);
  };

  return (
    <Modal title="🖼 adaugă-poză.exe" onClose={onClose} maxWidth="24rem">
      <form className="add-photo-form" onSubmit={handleSubmit}>
        {preview && (
          <div className="add-photo-preview-wrap">
            <img src={preview} alt="" className="add-photo-preview" />
          </div>
        )}

        <label className="edit-field-label" htmlFor="photo-url">
          Link către imagine
        </label>
        <input
          id="photo-url"
          className="input-sunken"
          placeholder="https://…"
          value={url.startsWith("data:") ? "" : url}
          onChange={handleUrlChange}
        />

        <div className="add-photo-or">— sau —</div>

        <label className="btn-3d file-btn" style={{ textAlign: "center" }}>
          📁 Încarcă din calculator
          <input type="file" accept="image/*" onChange={handleFile} hidden />
        </label>

        <div className="edit-form-actions">
          <button type="button" className="btn-3d" onClick={onClose}>
            Anulează
          </button>
          <button type="submit" className="btn-3d accent" disabled={saving || !url.trim()}>
            {saving ? "Se adaugă…" : "Adaugă poza"}
          </button>
        </div>
      </form>
    </Modal>
  );
}
