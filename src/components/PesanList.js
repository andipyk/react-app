import Pesan from "./Pesan";

const PesanList = ({ nama, pesan }) => {
  return (
    <div>
      <Pesan nama={nama} pesan={pesan} />
    </div>
  );
};

export default PesanList;
