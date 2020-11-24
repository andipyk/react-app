import { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import MyRoutes from "../MyRoutes";

const Login = ({ setIsLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [typeInput, setTypeInput] = useState("password");
  const [showPass, setShowPass] = useState(false);

  // ##########################

  // let history = useHistory();
  // let location = useLocation();
  // let auth = useAuth();

  // let { from } = location.state || { from: { pathname: "/" } };
  // let login = () => {
  //   auth.signin(() => {
  //     history.replace(from);
  //   });
  // };

  // ##########################

  const submitHandler = (e) => {
    e.preventDefault();

    if (!(username === "andi" && password === "andi123")) {
      return alert("password salah");
    }
    setIsLogin(true);
    // <Redirect to="/main" />;

    alert("password benar");

    // isLogin(true);
    // history.push("/users");
  };

  const showPassword = (e) => {
    e.preventDefault();

    setShowPass(!showPass);

    showPass === true ? setTypeInput("text") : setTypeInput("password");
  };

  return (
    <form>
      Username
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />{" "}
      <br />
      Password
      <input
        type={typeInput}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />{" "}
      <button onClick={showPassword}>Show</button>
      <br />
      <button onClick={submitHandler}>Login</button>
    </form>
  );
};

export default Login;
