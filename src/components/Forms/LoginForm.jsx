import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as userService from '../../services/userService'
import * as shedService from '../../services/shedService'

const LoginForm = (props) => {
  const navigate = useNavigate();
  const [message, setMessage] = useState(['']);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const updateMessage = (msg) => {
    setMessage(msg);
  };

  const handleChange = (e) => {
    updateMessage('');
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await userService.signin(formData)
      console.log(user)
      const userData = await userService.getUserData(user.id)
      const shedData = await shedService.show()
      props.setShed(shedData)
      props.setUser(user)
      props.setUserData(userData)
      if (user) {
        navigate('/');
      }
    } catch (err) {
      updateMessage(err.message);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <p>{message}</p>
      <form>
        <div>
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" placeholder="Enter your email" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" placeholder="Enter your password" onChange={handleChange} />
        </div>
        <Link to="/">
          <button type="submit" onClick={handleSubmit}>Login</button>
        </Link>
      </form>
      <p>
        If you do not have an account, then <Link to={"/signup"}>Create your account</Link> to get started.
      </p>
    </div>
  );
};

export default LoginForm;