import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import { addValue } from '../slices/thunkSlice';

export default function ThunkBox() {
  const thunkCounter = useSelector((state)=>(state.thunkCounter))
  
  const dispatch = useDispatch();

  return (
    <div>
        <h3>{thunkCounter.value}</h3>
        <button onClick={()=>{dispatch(addValue())}}
        >
            +1
        </button>
    </div>
  )
}
