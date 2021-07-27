import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import RepresentativeSearch from "./Components/RepresentativeSearch";
import SignUp from "./Components/SignUp";
import SignIn from "./Components/SignIn";

function App() {
  return (
    <Router>
    <div>
      <Header />
      <div>
      <Switch>
        <Route path="/signin">
          <SignIn />
        </Route>
        <Route path="/signup">
          <SignUp/>
        </Route>
        <Route path="/">
      <RepresentativeSearch />
      </Route>
      </Switch>
      </div>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
