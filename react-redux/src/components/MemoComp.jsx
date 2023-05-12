import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addMemo } from '../modules/memo';

export default function MemoComp() {
  const memo = useSelector((state)=>(state.memo));
  
  const dispatch = useDispatch();
  return (
    <div>
        <h2>
            MemoComp
        </h2>
        <button onClick={ ()=>{ dispatch( addMemo({text:"추가한 메모입니다", date :"2023-05-12"}) ) } }>메모추가</button>
        {
            memo.map((m)=>(
                <div key={m.id}>
                    <p>{m.id}</p>
                    <h4>{m.text}</h4>
                    <p>{m.date}</p>
                </div>
            ))
        }


    </div>
  )
}
