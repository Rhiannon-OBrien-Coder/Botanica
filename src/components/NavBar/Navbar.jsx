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
          <div>
            <ul>
              <li>Botanica</li>
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
            {localStorage.token ? (
              <>
                <Link to={'/profile'}><button>Account</button></Link>
                <Link to={'/'}onClick={handleSignout}><button>Sign Out</button></Link>
              </>
            ) : (
                <Link to={'/login'} className="nav-link"><button>Login</button></Link>
            )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar