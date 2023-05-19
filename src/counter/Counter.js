import React from 'react'
import "./Counter.css"
import {useSelector, useDispatch} from "react-redux"
import { counterAction } from '../store'

function Counter() {
  const dispatch = useDispatch()
    const count = useSelector((state)=>{
        return state.counter;
    })
    const show = useSelector((state) => {
      return state.show;
    });
    const Incremend = (amount) => {
      dispatch(counterAction.incremend(amount));
    };
    const Decremend = () => {
      dispatch(counterAction.decremend());
    };
    const toggle = () => {
      dispatch(counterAction.toggle());
    };
  return (
    <div className="counter">
      <h1>Redux Counter</h1>
      {show && <div className="value">Counter value {count}</div>}
      <div>
        <button onClick={Decremend}>Decrement</button>
        <button
          onClick={() => {
            Incremend(5);
          }}
        >
          Increment5
        </button>
        <button
          onClick={() => {
            Incremend(1);
          }}
        >
          Increment
        </button>
      </div>
      <button onClick={toggle}>Toogle Counter</button>
    </div>
  );
}

export default Counter