
// Here we import createContext so that we can define
// what we will call the Context created in this file
import {createContext, useState} from 'react'
// import axios from 'axios'

// Define our Context, we will import this anywhere where
// we need to access our context.
export const UserContext = createContext()

export const UserProvider = (props) => {
  // Here we can define state just like we would if this were
  // a normal component.
  const [user, setUser] = useState({
    email: 'ben@email.com',
    user_id: 1
  })

  // We can also create functions and pass them down. Note here
  // I've commented out the axios call because we do not have a
  // server running in this example but if we did have a server
  // this is how my auth would look on the frontend.
  const handleLogin = (email, password) => {
    alert(`Login Email: ${email}, Password: ${password}`)
    // axios.post('/auth/login', {email, password})
    // .then((res) => {
    //   setUser(res.data)
    // })
    // .catch(err => console.log(err))
  }

  // We've done the same thing with the register
  const handleRegister = (email, password) => {
    alert(`Register Email: ${email}, Password: ${password}`)
    // axios.post('/auth/register', {email, password})
    // .then(res => {
    //   setUser(res.data)
    // }).catch(err => console.log(err))
  }

  return (
    // Here we create our provider by saying UserContext.Provider
    // and giving it a value object with all the values we want to pass down on it.
    <UserContext.Provider value={{
      test: 'hello world',
      testTwo: "Something",
      user,
      setUser,
      handleLogin,
      handleRegister
    }}>
      {/* Remember to render the children on your props so our
      App actually shows up! */}
      {props.children}
    </UserContext.Provider>
  )
}
// check out index.js to see how we wrap our provider around
// the app.