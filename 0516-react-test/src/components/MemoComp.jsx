import React from 'react'
import { useSelector } from 'react-redux'

export default function MemoComp() {
  const memolist = useSelector((state)=>(state.memo))
  return (
    <div>
        <h2>메모장입니다</h2>
        {
            memolist.map((memo)=>(
                <div>
                    <h3>{memo.text}</h3>
                    <span>{memo.date}</span>
                    <button>{memo.isLike ? "찜완료" : "찜하기"}</button>
                    <button>X</button>
                </div>
            ))
        }
    </div>
  )
}
