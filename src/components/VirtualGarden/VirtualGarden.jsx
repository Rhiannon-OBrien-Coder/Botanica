import React from "react";
import { Link } from "react-router-dom"

const VirtualGarden = () => {
  return (
    <>
      <h1>Virtual Garden</h1>
      {localStorage.token ? (
            <>
              <h1>Populate Virtual Garden</h1>
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

export default VirtualGarden;