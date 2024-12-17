import React from "react";
import { Link } from "react-router-dom"

const VirtualPlot = () => {
  return (
    <>
      <h1>Virtual Plot</h1>
      {localStorage.token ? (
            <>
              <h1>Enter plot info here</h1>
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

export default VirtualPlot;