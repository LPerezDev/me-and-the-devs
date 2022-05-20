import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { AuthContext } from "../context/auth.context";

function Navbar() {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <h1 style={{ color: '#125841', fontWeight: '700' }}>Me & The Devs</h1>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-link">
                <Link to="/articles" className="navLink">
                  Articles
                </Link>
              </li>
              {isLoggedIn && (
                <>
                <li className="nav-item">
                  <Link to={`/profile/${user._id}`} className="nav-link">
                    My Profile
                  </Link>
                </li>
                <li className="nav-item">            
                <Link to="/edit" className="nav-link">
                    Edit Your Profile
                  </Link>
                </li>
                <li className="nav-link">
                  <Link to="/" onClick={logOutUser} className="navLink">Logout</Link>
                </li>
                </>
              )}

              {!isLoggedIn && (
                <>
                  <li className="nav-item">
                  <Link to="/signup" className="navLink">
                    Sign Up
                  </Link>
                  </li>
                  <li className="nav-item">
                  <Link to="/login" className="navLink">
                    Login
                  </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
