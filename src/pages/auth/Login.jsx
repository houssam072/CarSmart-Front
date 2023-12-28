import React, { useContext, useState } from 'react'
import './auth.css'
import axios from 'axios';
import {User} from '../auth/context';
import { useNavigate , Link} from "react-router-dom";





export default function Login() {
  const nav = useNavigate();
  const userNow = useContext(User)
  const [form, setForm] = useState({
    username : '',
    password : '',
  });

  // handleChange
  function handleChange(e){
    setForm({...form, [e.target.name]: e.target.value});
  }

  async function loginSubmit(e){
    e.preventDefault();
    try {
      let res = await axios.post('http://127.0.0.1:8000/users/login/', form)
      const token = res.data.access
      const refreshToken = res.data.refresh
      console.log('login token',token);
      console.log('login refresh',refreshToken);
      userNow.setToken(token)
      userNow.setRefreshToken(refreshToken)
      nav('/')
      
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='authForm '>
        <div className="container pd-l">
            <div className="form-auth">
                <form onSubmit={loginSubmit} method="post">

                    <div className="form-group mb-3">
                      <h1>Login</h1> 
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="username">User Name:</label>
                        <input onChange={handleChange} className='form-control' type="text" name="username" value={form.value} id="username" placeholder='Enter Your Name...' />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="password">Password:</label>
                        <input onChange={handleChange} className='form-control' type="password" name="password" value={form.value} id="password" placeholder='Enter Your Password...' />
                    </div>
                    <div className="form-group mb-3">
                        <input type="submit" value="Sign up" className="btn btn-primary btn-block"/>
                    </div>

                    <div className="form-group">
                      <p>if you have an account <span><Link to = '/register'>Create Account</Link></span></p>

                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}