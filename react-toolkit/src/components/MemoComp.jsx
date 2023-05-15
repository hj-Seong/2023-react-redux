import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { addMemoRedux } from '../slices/memoSlice';

export default function MemoComp() {
  const memo = useSelector((state)=>(state.memo));
  const dispatch = useDispatch()
  return (
    <div>
        {
            memo.map((m)=>(
                <div key={m.id}>
                    <h3>{m.text}</h3>
                    <p>{m.date}</p>
                </div>
            ))
        }
        <button onClick={()=>{dispatch( addMemoRedux({text:"추가", date :"2023-05-15"}) )}}>
            메모추가
        </button>
    </div>
  )
}
