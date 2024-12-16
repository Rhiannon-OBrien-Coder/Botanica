import React from "react";
import { Link } from "react-router-dom"

const Home = (props) => {
  return (
    <>
      <h1>Botanica: The Virtual Plot</h1>
      <p>
        Earn your Green Cursor on Botanica! Buy and plant on your very on virtual plot.
      </p>
      {localStorage.token ? (
            <>
              <h1>Welcome to Botanica!</h1>
              <p>To get started, buy a plot and seeds in the store before planting.</p>
            </>
            ) : (
              <div>
                <button>
                  <Link to={'/login'}>Login</Link>
                </button>
                <button>
                  <Link to={'/signup'}>Create Account</Link>
                </button>
            </div>
            )}
    </>
  );
};

export default Home;