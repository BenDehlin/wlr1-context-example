import "./App.css"
// Here we bring in the useContext hook and the UserContext
// context so we can identify what context values we actually
// want to have access to here.
import { useContext, useState } from "react"
import { UserContext } from "./context/UserContext"

function App() {
  // Here we just have an example of some state we're tracking
  // for input fields in this component
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  // Here I can destructure all the values from our context
  // we want to be able to use. What I've brought in are the user
  // object, the setUser function and the handleLogin/handleRegister functions.
  const { user, setUser, handleLogin, handleRegister } = useContext(UserContext)
  return (
    <div className="App">
      {/* <h1>{user.email}</h1>
      <h2>{user.user_id}</h2>
      <button onClick={() => setUser({email: 'ben@gmail.com', user_id: 2})}>Change Email</button> */}
      <input value={email} onChange={(e) => setEmail(e.target.value)} />
      <input value={password} onChange={(e) => setPassword(e.target.value)} />
      {/* The Login button calls our handleLogin function that we
      brought in from our context. When that happens we have
      determined we need to pass in an email and password which
      we will get from the 2 input fields on this component. */}
      <button onClick={() => handleLogin(email, password)}>Login</button>
      {/* We also bring in our handleRegister function for
      the register button. This will also pass the email/password
      values from the input fields to be used in the axios
      call inside of our context. */}
      <button onClick={() => handleRegister(email, password)}>Register</button>
    </div>
  )
}

export default App
