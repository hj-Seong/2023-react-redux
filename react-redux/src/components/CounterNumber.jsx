import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { increaseNumber } from '../modules/counterNumber';

export default function CounterNumber() {
  const counterNumber = useSelector((state)=>(state.counterNumber));

  const dispatch = useDispatch();
  return (
    <div>
        <p>counterNumber의 (state)객체에서 값을 가져와서 출력</p>
        <h3>{counterNumber.count}</h3>
        <button onClick={()=>{ dispatch( increaseNumber() ) }}>
            +{counterNumber.num}
        </button>
        {/** 액션 함수와 reducer에 내용을 추가해서 버튼이 실행되게 */}
        <button >
            -{counterNumber.num}
        </button>
    </div>
  )
}
