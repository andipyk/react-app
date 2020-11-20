const BuatPesan = ({ pesan, setPesan }) => {
  const pesanHandler = (e) => {
    setPesan(e.target.value);
  };

  const simpanHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form>
        <textarea onChange={pesanHandler} cols="30" rows="5"></textarea>
        <button onClick={simpanHandler}>Simpan</button>
      </form>
    </div>
  );
};

export default BuatPesan;
