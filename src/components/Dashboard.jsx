import React, { useContext, useEffect } from 'react'
import UserContext from '../Context/UserContext'
import { useState } from 'react'
import axios from 'axios'

const Dashboard = () => {
    // const { user } = useContext(UserContext)
    // console.log(user);
    const [user, setUser] = useState()

    const getUser = async (token) => {
        try {
            const response = await axios.get('http://localhost:8080/api/v1/user/getUserByToken', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            setUser(response.data.payload)

        } catch (error) {
            console.log("Error in getUser", error);
        }
    }

    useEffect(() => {
        const token = localStorage.getItem('token')
        getUser(token)
    }, [])

    const logoutUser = () => {
        localStorage.removeItem('token')
        setUser()
    }

    return (
        <div>
            <div>Dashboard</div>
            {user ? (
                <div>
                    <button
                        className='bg-blue-500 p-2 m-5'

                        onClick={logoutUser}>Logout</button>
                    <p>Name : {user.name}</p>
                    <p>Email: {user.email}</p>
                    <img src={user.avatar} alt="img" />

                </div>
            ) : (
                <div>No User found</div>
            )}
        </div>
    )
}

export default Dashboard