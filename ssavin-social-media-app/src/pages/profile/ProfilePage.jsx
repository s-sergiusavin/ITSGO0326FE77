import { useParams } from "react-router-dom";

const ProfilePage = () => {
    const id = useParams().id;
    return (
        <div>
            <h1>Profile Page {id}</h1>
        </div>
    );
}

export default ProfilePage;