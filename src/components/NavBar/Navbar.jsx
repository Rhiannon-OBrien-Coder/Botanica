import { Link } from "react-router-dom"
import * as userService from '../../services/userService'

const NavBar = () => {
  const handleSignout = () => {
    userService.signout()
    props.setUser(null)
    props.setUserData(null)
  }

  return (
    <>
      <nav>
        <div>
          <p>Botanica</p>
          <div>
            <ul>
              <li>
                <Link to={'/'} className="nav-link">Home</Link>
              </li>
              <li>
                <Link to={'/store'} className="nav-link">Store</Link>
              </li>
              <li>
                <Link to={'/virtual-garden'} className="nav-link">Virtual Garden</Link>
              </li>
              <li>
                <Link to={'/faq'} className="nav-link">FAQ</Link>
              </li>
            </ul>
            {localStorage.token ? (
              <>
                <button>
                  <Link to={'/profile'} className="nav-link">Account</Link>
                </button>
                <button>
                  <Link to={'/'} className="nav-link" onClick={handleSignout}>Sign Out</Link>
                </button>
              </>
            ) : (
              <button>
                <Link to={'/login'} className="nav-link">Login</Link>
              </button>
            )}
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar