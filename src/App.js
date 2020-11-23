import { useState, useEffect } from "react";
import List from "./components/List";
// import "./styles.css";

function App() {
  const API_URL = "https://jsonplaceholder.typicode.com/users";
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();

    setMyData(data);
    // console.log(myData[0]);
  };

  const deleteListItem = (id) => {
    setMyData(myData.filter((value) => value.id !== id));
  };

  const [myData, setMyData] = useState([]);

  return (
    <div className="App">
      <List />
      <ol>
        {myData.map((v) => (
          <li>
            {v.name}
            <button onClick={() => deleteListItem(v.id)}>x</button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default App;
