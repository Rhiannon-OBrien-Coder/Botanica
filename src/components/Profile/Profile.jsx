import React from "react";
import { Link } from "react-router-dom"

const Profile = () => {
  return (
    <>
      <h1>Profile</h1>
      {localStorage.token ? (
            <>
              <h2>Enter profile info here</h2>
            </>
            ) : (
              <div>
                <h3>Thank you for your interest in Botanica!</h3>
                <p>Please <Link to={'/signup'}>create an account</Link> to get started.</p>
              </div>
            )}
    </>
  );
};

export default Profile;