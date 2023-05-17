import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addMemo, deleteMemo, likeMemoRedux, likeMemoToolkit } from '../slices/memoSlice';

export default function MemoComp() {
  const memolist = useSelector((state)=>(state.memo))
  const [input, setInput] = useState("");

  const dispatch = useDispatch();
  return (
    <div>
        <h2>메모장입니다</h2>
        <input type="text" 
            value={input} 
            onChange={(e)=>{setInput(e.target.value)}}/>
        <button onClick={()=>{dispatch(addMemo(input))}}>
            추가
        </button>
        {
            memolist.map((memo,index)=>(
                <div key={memo.id}>
                    <h3>{memo.text}</h3>
                    <span>{memo.date}</span>
                    <button onClick={()=>{dispatch(likeMemoRedux(memo.id))}}>
                        {memo.isLike ? "찜완료" : "찜하기"}
                    </button>
                    <button onClick={()=>{dispatch(likeMemoToolkit({index, memo}))}}>
                        {memo.isLike ? "찜완료" : "찜하기"}
                    </button>
                    <button 
                    onClick={()=>{dispatch(deleteMemo(index))}}>
                        X
                    </button>
                </div>
            ))
        }
    </div>
  )
}
