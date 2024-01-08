import { useDispatch, useSelector } from "react-redux";
import {
  counterSelector,
  decrement,
  incrementByAmount,
} from "../../redux/features/counter.slice";

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector(counterSelector);

  return (
    <div>
      <button
        aria-label="Increment value"
        onClick={() => dispatch(incrementByAmount(2))}
      >
        Increment
      </button>
      <span>{count}</span>
      <button
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
    </div>
  );
};

export default Counter;
