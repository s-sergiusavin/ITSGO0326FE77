import "./EditProfileModal.module.scss";

export default function EditProfileModal({ onClose }) {
  return (
    <div className="modalBackdrop">
      <div className="modalCard">
        <h3>Edit Profile</h3>

        <label>Name</label>
        <input type="text" />

        <label>Bio</label>
        <textarea />

        <div className="modalActions">
          <button className="saveBtn">Save</button>
          <button className="cancelBtn" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
}
