import React, { useState } from 'react'
import './auth.css'
import axios from 'axios';
import { useNavigate , Link} from "react-router-dom";



export default function Register() {
    const [form, setForm] = useState({
        username : '',
        email : '',
        password : '',
    });
    const [successMsg, setSuccessMsg] = useState('');
    const nav = useNavigate();


    function handleChange(e){
        setForm({...form, [e.target.name]: e.target.value})
    }

    async function rigisterSubmit(e){
        e.preventDefault();
        try {
            await axios.post('http://127.0.0.1:8000/users/register/', form)
            setSuccessMsg('Rigister Successful')
            setTimeout(() => {
                nav('/login')
            }, 1000)
        } catch (error) {
            console.log(error);
        }
    }


  return (
    <div className='authForm '>
        <div className="container pd-l">
            <div className="form-auth">
                <form onSubmit={rigisterSubmit} method="post">

                    <div className="form-group mb-2">
                        <h1>Rigister</h1> 
                        {successMsg && <div style={{ color: 'blue' }}>{successMsg}</div>}

                    </div>
                    <div className="form-group mb-2">
                        <label htmlFor="username">User Name:</label>
                        <input onChange={handleChange} className='form-control' type="text" name="username" value={form.value} id="username" placeholder='Enter Your Name...' />
                    </div>
                    <div className="form-group mb-2">
                        <label htmlFor="email">Email:</label>
                        <input onChange={handleChange} className='form-control' type="email" name="email" value={form.value} id="email" placeholder='Enter Your Email...' />
                    </div>
                    <div className="form-group mb-2">
                        <label htmlFor="password">Password:</label>
                        <input onChange={handleChange} className='form-control' type="password" name="password" value={form.value} id="password" placeholder='Enter Your Password...' />
                    </div>
                    <div className="form-group mb-2">
                        <input type="submit" value="Sign up" className="btn btn-primary btn-block"/>
                    </div>
                    <div className="form-group mb-2">
                        <p>if you have an account <span><Link to = '/login'>Login</Link></span></p>
                    </div>

                </form>
            </div>
        </div>
    </div>
  )
}