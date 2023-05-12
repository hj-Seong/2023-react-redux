import React from 'react'
import { useSelector } from 'react-redux'

export default function MemoComp() {
  const memo = useSelector((state)=>(state.memo));
  console.log(memo)
  return (
    <div>
        <h2>
            MemoComp
        </h2>
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
