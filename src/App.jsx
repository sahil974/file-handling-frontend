import axios from "axios"
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom";
import UserContext from "./Context/UserContext";

function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [avatar, setAvatar] = useState(null)

  const { addUser } = useContext(UserContext)

  const navigate = useNavigate()

  const handleSubmit = async () => {
    try {

      const formData = new FormData()
      formData.append("name", name)
      formData.append("email", email)
      formData.append("password", password)
      formData.append("avatar", avatar)

      console.log(formData)
      const response = await axios.post('http://localhost:8080/api/v1/user/register', formData)
      const tempUser = {
        name: response.data.data.name,
        email: response.data.data.email,
        avatar: response.data.data.avatar
      }

      addUser(tempUser)
      console.log(response);
      localStorage.setItem("token", response.data.token)

      navigate('/dashboard')
    } catch (error) {
      console.log("Error while post request");
    }
  }
  return (
    <div className="flex justify-center items-center flex-col h-screen bg-gray-400">

      <h3 className=" p-5 m-5 text-3xl">File handling</h3>
      <div className="flex flex-col gap-3 justify-items-start items-center">

        <div>
          <label htmlFor="name">Name :  </label>
          <input
            className="focus:outline-none"
            type="text" value={name} placeholder="Enter your Name" onChange={(e) => { setName(e.target.value) }} />

        </div>

        <div>
          <label htmlFor="email">Email :  </label>
          <input
            className="focus:outline-none"
            type="email" placeholder="Enter Your Email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
        </div>

        <div>
          <label htmlFor="password">Password :   </label>
          <input type="password" value={password} placeholder="Enter the Password" onChange={(e) => { setPassword(e.target.value) }} />

        </div>

        <div>
          <label htmlFor="avatar">Profile Picture  :   </label>
          <input type="file" onChange={(e) => { setAvatar(e.target.files[0]) }} />

        </div>

      </div>
      <button onClick={handleSubmit}>Submit</button>


    </div>
  )
}

export default App
