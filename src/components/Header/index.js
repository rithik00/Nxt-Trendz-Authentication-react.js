// Write your JS code here
import './index.css'

import {Component} from 'react'

import {Link} from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <nav className="nav-container">
        <img
          className="logo-style"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
        />
        <div className="nav-items-container">
          <ul className="ul-container">
            <Link to="/">
              <li className="nav-item">Home</li>
            </Link>
            <Link to="/products">
              <li className="nav-item">Products</li>
            </Link>
            <Link to="/cart">
              <li className="nav-item">Cart</li>
            </Link>
          </ul>
          <button type="button" className="btn-style">
            Logout
          </button>
        </div>
      </nav>
    )
  }
}

export default Header
