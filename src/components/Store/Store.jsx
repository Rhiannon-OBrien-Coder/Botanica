import React from "react";
import { Link } from "react-router-dom"

const Store = (props) => {


  return (
    <>
      <h1>Store</h1>
      {localStorage.token ? (
            <>
              <h2>Plot Options:</h2>
              <div className="store-item"></div>
              <h2>Seeds:</h2>
              <div className="store-item"></div>
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

export default Store;