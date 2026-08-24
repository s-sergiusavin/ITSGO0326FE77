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

export default function EditProfileModal({ profile, onClose, onSave }) {
  const [name, setName] = useState(profile.name);
  const [bio, setBio] = useState(profile.bio);
  const [avatar, setAvatar] = useState(profile.avatar);
  const [cover, setCover] = useState(profile.cover);
  const [quickInfo, setQuickInfo] = useState(profile.quickInfo.join("\n"));
  const [about, setAbout] = useState(profile.about.join("\n"));
  const [saving, setSaving] = useState(false);

  const handleAvatarFile = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setAvatar(await readFileAsDataUrl(file));
  };

  const handleCoverFile = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setCover(await readFileAsDataUrl(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    await onSave({
      name: name.trim(),
      bio: bio.trim(),
      avatar,
      cover,
      quickInfo: quickInfo.split("\n").map((s) => s.trim()).filter(Boolean),
      about: about.split("\n").map((s) => s.trim()).filter(Boolean),
    });
    setSaving(false);
  };

  return (
    <Modal title="✎ editează-profil.exe" onClose={onClose} maxWidth="32rem">
      <form className="edit-profile-form" onSubmit={handleSubmit}>
        <div className="edit-avatars-row">
          <div className="edit-avatar-field">
            <img src={avatar} alt="" className="edit-avatar-preview" />
            <label className="btn-3d file-btn">
              Schimbă poza de profil
              <input type="file" accept="image/*" onChange={handleAvatarFile} hidden />
            </label>
          </div>
          <div className="edit-cover-field">
            <img src={cover} alt="" className="edit-cover-preview" />
            <label className="btn-3d file-btn">
              Schimbă coperta
              <input type="file" accept="image/*" onChange={handleCoverFile} hidden />
            </label>
          </div>
        </div>

        <label className="edit-field-label" htmlFor="edit-name">
          Nume
        </label>
        <input
          id="edit-name"
          className="input-sunken"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label className="edit-field-label" htmlFor="edit-bio">
          Bio
        </label>
        <textarea
          id="edit-bio"
          className="input-sunken"
          rows={2}
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />

        <label className="edit-field-label" htmlFor="edit-quickinfo">
          Quick Info (câte un rând)
        </label>
        <textarea
          id="edit-quickinfo"
          className="input-sunken"
          rows={3}
          value={quickInfo}
          onChange={(e) => setQuickInfo(e.target.value)}
        />

        <label className="edit-field-label" htmlFor="edit-about">
          Despre mine (câte un rând)
        </label>
        <textarea
          id="edit-about"
          className="input-sunken"
          rows={3}
          value={about}
          onChange={(e) => setAbout(e.target.value)}
        />

        <div className="edit-form-actions">
          <button type="button" className="btn-3d" onClick={onClose}>
            Anulează
          </button>
          <button type="submit" className="btn-3d accent" disabled={saving}>
            {saving ? "Se salvează…" : "Salvează profilul"}
          </button>
        </div>
      </form>
    </Modal>
  );
}
