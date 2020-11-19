import Pesan from "./components/Pesan";
import BuatPesan from "./components/BuatPesan";

function App() {
  return (
    <div>
      <h1>My React</h1>
      <Pesan nama="andi" pesan="halo gaes" />
      <Pesan nama="budi" pesan="yoi" />
      <Pesan nama="cristo" pesan="tess" />
    </div>
  );
}

export default App;
