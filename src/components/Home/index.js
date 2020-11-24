import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    document.getElementById("content").innerHTML =
      '<object type="type/html" data="home.html" ></object>';
  }, []);
  return (
    <div>
      <h2>home</h2>
      <div id="content"> </div>
    </div>
  );
};

export default Home;
