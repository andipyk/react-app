const Pesan = ({ nama, pesan }) => {
  return (
    <div>
      <h2>Nama: {nama}</h2>
      <p>Pesan: {pesan}</p>
      <button>Hapus</button>
    </div>
  );
};

export default Pesan;
