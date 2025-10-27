import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="not-found-page">
      <div className="container">
        <div className="not-found-content">
          <div className="error-code">404</div>
          <h1>Page Not Found</h1>
          <p>The page you're looking for doesn't exist or has been moved.</p>
          <div className="actions">
            <button
              onClick={() => navigate(-1)}
              className="btn 
btn-primary">
              ← Go Back
            </button>
            <Link to="/" className="btn btn-secondary">
              Go Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
