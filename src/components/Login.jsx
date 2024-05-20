import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:8080/api/v1/user/login', { email, password })
            console.log(response);
            localStorage.setItem("token", response.data.token)
            navigate("/dashboard")
        } catch (error) {
            console.log("error in handle login", error);
        }
    }
    return (
        <div className='bg-gray-400 h-screen flex justify-center items-center'>
            <div className=' flex flex-col justify-center items-center gap-2'>
                <h1 className='text-4xl mb-4'>Login</h1>
                <div>
                    <label htmlFor="email">Email : </label>
                    <input
                        className='p-2 rounded focus:outline-none'
                        type='email' value={email} placeholder='Enter your emil' onChange={(e) => { setEmail(e.target.value) }} />

                </div>
                <div>
                    <label htmlFor="password">password : </label>
                    <input
                        className='p-2 rounded focus:outline-none'
                        type='password' value={password} placeholder='Enter your emil' onChange={(e) => { setPassword(e.target.value) }} />
                </div>

                <button onClick={handleLogin} className='bg-blue-300 p-2 rounded'>Login</button>
            </div>
        </div>
    )
}

export default Login