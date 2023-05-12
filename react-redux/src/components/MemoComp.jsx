import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addMemo } from '../modules/memo';

export default function MemoComp() {
  const memo = useSelector((state)=>(state.memo));
  const [input, setInput] = useState("");
  
  const dispatch = useDispatch();

  const onAddMemo = () => { 
    dispatch( 
        addMemo(
                {
                    text : input, 
                    date :"2023-05-12"
                }
            )
        );
    setInput("");
    }

  return (
    <div>
        <h2>
            MemoComp
        </h2>
        {/** form으로 만들어서 submit으로 실행 */}
        <input type="text" 
            onChange={(e)=>{setInput(e.target.value)}} 
            value={input} />
        <button onClick={ onAddMemo }>
            메모추가
        </button>
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
