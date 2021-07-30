import {createContext, useEffect, useState} from "react"
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import firebase from "firebase";
import { firebaseConfig } from "./config";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import RepresentativeSearch from "./Components/RepresentativeSearch";
import SignUp from "./Components/SignUp";
import SignIn from "./Components/SignIn";
import Home from "./Components/Home";
import UserProfile from "./Components/UserProfile";

if(!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export const UserContext = createContext(undefined)

function App() {
  const [user, setUser] = useState(undefined) //from authentication
  const [userProfile, setUserProfile] = useState(undefined) // from database

useEffect(() => {
  firebase.auth().onAuthStateChanged(authenticatedUser => {
    authenticatedUser ? setUser(authenticatedUser) : setUser(undefined)
  })
})

useEffect(() => {
  setUserProfile(JSON.parse(localStorage.getItem("user")))
}, [])


useEffect(() => {
  if(user !== undefined) {
    fetch(`https://representative-finder-mb-api.web.app/users/${user?.email}`)
    .then(response => response.json())
    .then(json => {
    console.log('user json -->', json)
    setUserProfile(json.data)
    localStorage.setItem("user", JSON.stringify(json.data))
    })
    .catch(error => alert(error))
  }
}, [user])

  return (
    <Router>
    <div>
      <UserContext.Provider value={{userProfile}}>
      <Header user={user} userProfile={userProfile} setUser={setUser} userProfile = {userProfile}/>
      <div>
      <Switch>
        <Route path="/signin">
          <SignIn setUser={setUser}/>
        </Route>
        <Route path="/signup">
          <SignUp setUser={setUser}/>
        </Route>
        <Route path="/search">
          {user?<RepresentativeSearch user={user}/>
          :<SignIn setUser={setUser}/>
          
          }
        </Route>
        <Route path="/user-profile">
          <UserProfile user={user} userProfile={userProfile} setUser={setUser} setUserProfile={setUserProfile}/>
        </Route>
      
      <Route path="/">
        <Home/>
      </Route>
      </Switch>
      </div>
      <Footer />
      </UserContext.Provider>
    </div>
    </Router>
  );
}

export default App;
