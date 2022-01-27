import { BrowserRouter, Route, Switch } from "react-router-dom";

//styles
import "./App.css";

// components
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import SingleUser from "./pages/Users/SingleUser";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/user/:login">
            <SingleUser />
          </Route>
          <Route path="/*">
            <NotFound />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
