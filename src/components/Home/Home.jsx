import React from "react";
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <>
      <h1>Botanica: The Virtual Plot</h1>
      <p>
        Earn your Green Cursor on Botanica! Buy and plant on your very on virtual plot.
      </p>
      <div>
        <button>
          <Link to={'/login'}>Login</Link>
        </button>
        <button>
          <Link to={'/signup'}>Create Account</Link>
        </button>
      </div>
    </>
  );
};

export default Home;