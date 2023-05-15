import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { increment } from '../slices/counterSlice';

export default function CounterBox() {
  const counter = useSelector((state)=>(state.counter.value))
  const dispatch = useDispatch();
  return (
    <div>
        <h3>{counter}</h3>
        <button onClick={()=>{dispatch(increment())}}>
            +1
        </button>
    </div>
  )
}
