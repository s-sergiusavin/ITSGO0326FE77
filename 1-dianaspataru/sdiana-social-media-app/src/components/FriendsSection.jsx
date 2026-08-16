import "./FriendsSection.module.scss";
import MessageIcon from "@mui/icons-material/Message";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";

export default function FriendsSection({ friends }) {
  return (
    <div className="friendsSection">
      <div className="friendsHeader">
        <h3>Friends List</h3>
        <span>{friends.length} total friends</span>
      </div>

      <div className="friendsGrid">
        {friends.map(friend => (
          <div key={friend.id} className="friendCard">
            <img src={friend.avatar} alt={friend.name} className="friendAvatar" />

            <div className="friendInfo">
              <h4>{friend.name}</h4>
              <p className="friendRole">{friend.role}</p>
              <span className="mutualCount">{friend.mutual} mutual friends</span>
            </div>

            <div className="friendActions">
              <button className="msgBtn"><MessageIcon fontSize="small" /></button>
              <button className="removeBtn"><PersonRemoveIcon fontSize="small" /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
