import { useState } from "react";
import MyRoutes from "./components/MyRoutes";
import Login from "./components/Login";
import Home from "./components/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation,
} from "react-router-dom";

function App() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className="App">
      {/* <MyRoutes /> */}

      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/main">Main</Link>
                <p>{`isLogin: ${isLogin}`}</p>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          {/* {isLogin === false ? <Link to="/login">Login</Link> : <MyRoutes />} */}

          <Switch>
            <Route path="/main">
              {isLogin === false ? (
                <Link to="/login">Login</Link>
              ) : (
                <MyRoutes />
              )}
            </Route>
            <Route path="/login">
              <Login setIsLogin={setIsLogin} />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
    // <div className="App">
    //   <Router>
    //     <nav>
    //       <ul>
    //         <li>
    //           <Link to="/">Login</Link>
    //         </li>
    //         <li>
    //           <Link to="/main">Main</Link>
    //         </li>
    //       </ul>
    //     </nav>
    //     <Switch>
    //       <Route path="/" component={Login} />
    //       <Route path="/main" component={MyRoutes} />
    //       {/* <PrivateRoute path="/protected"> */}
    //       {/* <MyRoutes /> */}
    //       {/* </PrivateRoute> */}
    //     </Switch>
    //   </Router>
    // </div>
  );
}

// function useAuth() {
//   return useContext(authContext);
// }

export default App;
