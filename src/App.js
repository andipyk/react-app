import logo from "./logo.svg";
import "./App.css";
import PrivatePage from "./pages/PrivatePage";
import { signin } from "./action";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const isLogged = useSelector((state) => state.isLogged);
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <div className="public">
        <h1>Tugas 07 - Redux</h1>
        <p>Semoga semua tugas bisa kelar :)</p>
        <button onClick={() => dispatch(signin())}>
          {isLogged ? "Logout" : "Login"}
        </button>
        {isLogged && <PrivatePage />}
      </div>
    </div>
  );
}

export default App;
