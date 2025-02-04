import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { useNotification } from '../../contexts/NotificationContext';

const Profile = () => {
  const { notify } = useNotification();
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="container mt-5">
      <div className="card bg-app-primary text-white">
        <div className="card-body text-center p-5">
          <img src={'https://via.placeholder.com/150'} alt="User Avatar" className="rounded-circle mb-3" width="150" height="150" />
          <h3 className="card-title">{currentUser.name}</h3>
          <h5 className="card-title">{currentUser.email}</h5>
          <p className="card-text">aksbdkajndad</p>
          <p className="card-text"><small className="text-muted">,ajshkdjasjds</small></p>
        </div>
      </div>

      <div className="mt-4 text-center">
        <button onClick={() => notify("This is a success message", "error")} className="btn btn-success mx-2">Success</button>
        <Link to="/gallery" className="btn btn-primary mx-2">Photo Gallery</Link>
        <Link to="/likes" className="btn btn-secondary mx-2">Likes</Link>
        <Link to="/" className="btn btn-danger mx-2">Home</Link>
      </div>
    </div>

  );
};

export default Profile;
