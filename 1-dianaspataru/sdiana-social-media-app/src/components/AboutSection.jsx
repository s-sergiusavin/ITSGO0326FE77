import "./AboutSection.module.scss";

export default function AboutSection({ user }) {
  return (
    <div className="profileGridDetails">
      <div className="detailsCard">
        <h3>Personal Information</h3>
        <div className="infoList">
          <div className="infoItem"><span>Name</span><p>{user.name}</p></div>
          <div className="infoItem"><span>Gender</span><p>{user.gender}</p></div>
          <div className="infoItem"><span>Birthdate</span><p>{user.birthdate}</p></div>
          <div className="infoItem"><span>Location</span><p>{user.location}</p></div>
        </div>
      </div>

      <div className="detailsCard hobbies">
        <h3>Hobbies & Interests</h3>
        <div className="infoList">
          <div className="infoItem"><span>My Hobbies</span><p>{user.hobbies}</p></div>
          <div className="infoItem"><span>Music</span><p>{user.music}</p></div>
          <div className="infoItem"><span>Movies</span><p>{user.movies}</p></div>
        </div>
      </div>

      <div className="detailsCard">
        <h3>Social Networks</h3>
        <div className="infoList">
          <div className="infoItem"><span>Facebook</span><p>{user.facebook}</p></div>
          <div className="infoItem"><span>Instagram</span><p>{user.instagram}</p></div>
          <div className="infoItem"><span>YouTube</span><p>{user.youtube}</p></div>
          <div className="infoItem"><span>LinkedIn</span><p>{user.linkedin}</p></div>
        </div>
      </div>
    </div>
  );
}
