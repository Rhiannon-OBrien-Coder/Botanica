import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import * as userService from '../../services/userService'

const SignUpForm = (props) => {
  const navigate = useNavigate();
  const [message, setMessage] = useState(['']);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const updateMessage = (msg) => {
    setMessage(msg);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const newUserResponse = await userService.signup(formData)
      const userData = await userService.getUserData(newUserResponse.id)
      props.setUser(newUserResponse.user)
      props.setUserData(userData)
      navigate('/')
    } catch (err) {
      updateMessage(err.message)
    }
  }

  return (
    <div>
      <h2>Create An Account</h2>
      <p>{message}</p>
      <form>
        <div>
          <label htmlFor="email">Email address</label>
          <input type="email" name="email" id="email" placeholder="Enter your email" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" placeholder="Enter your password" onChange={handleChange} />
        </div>
        <button type="submit" onClick={handleSubmit}>Create Account</button>
        <Link to="/">
          <button>Cancel</button>
        </Link>
      </form>
    </div>
  )
}

export default SignUpForm