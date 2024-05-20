import React, { useState } from 'react'
import UserContext from './UserContext'

function UserContextProvider({ children }) {
    const [user, setUser] = useState()
    const [age, setAge] = useState(15)

    const addUser = (data) => {
        const userData = {
            name: data.name,
            email: data.email,
            avatar: data.avatar
        }
        console.log("hiii");

        setUser(userData)
    }

    return (
        <UserContext.Provider value={{ user, addUser, age, setUser }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider