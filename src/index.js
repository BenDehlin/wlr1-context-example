import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
// Here we import the UserProvider and wrap it around the
// App component. This is how we will be able to access the
// context values anywhere in the application.
import { UserProvider } from "./context/UserContext"

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>,
  document.getElementById("root")
)
reportWebVitals()
