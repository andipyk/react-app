import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../../action";

const PrivatePage = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Private Page</h2>
      <h1>{counter}</h1>
      <button onClick={() => dispatch(increment())}>tambahkan</button>
      <button onClick={() => dispatch(decrement())}>kurangi</button>
    </div>
  );
};

export default PrivatePage;
