import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { logout } from '../../store/AccessTokenStore';
import { useNotification } from '../../contexts/NotificationContext';

const Navbar = () => {
  const { currentUser, isAuthLoaded } = useContext(AuthContext);
  const { notify } = useNotification();

  const showAuthLinks = currentUser && isAuthLoaded

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Instahack</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {showAuthLinks ? (
              <>
                <NavLink to="/" className="nav-link">Home</NavLink>
                <NavLink to="/feed" className="nav-link">Feed</NavLink>
                <NavLink to="/posts/create" className="nav-link">Add post</NavLink>
                <NavLink to="/profile" className="nav-link">Profile</NavLink>
                <button className="btn btn-danger" onClick={() => {
                  logout()

                }}>Logout</button>
              </>
            ) :
              (
                <>
                  <NavLink to="/" className="nav-link">Home</NavLink>
                  <NavLink to="/users/create" className="nav-link">Register</NavLink>
                  <NavLink to="/login" className="nav-link">Login</NavLink>
                </>
              )

            }
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
