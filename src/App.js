import BuatPesan from "./components/BuatPesan";
import PesanList from "./components/PesanList";
import { useState } from "react";

function App() {
  const nama = "Andi Syafrianda";
  const [pesan, setPesan] = useState("");

  return (
    <div>
      <h1>Tugas React</h1>
      <BuatPesan setPesan={setPesan} pesan={pesan} />
      <PesanList nama={nama} pesan={pesan} />
    </div>
  );
}

export default App;
