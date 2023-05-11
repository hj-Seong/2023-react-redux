import React from 'react'
// 리듀서에 있는 값을 꺼내서 사용 : useSelector
// 리듀서에 있는 값을 수정 : useDispatch
import { useDispatch, useSelector } from "react-redux"

export default function CounterBox() {
  //useSelector로 값 가져오기
  // state는 modules의 index.js에서 작성한 rootReducer
  // state.counter는 rootReducer안에 객체로 묶인 counter 
  //    >> counter를 속성이름으로 사용
  // reducer 함수만 전달해도 useSelector에서 자동으로 state를 뽑아줌
  const counter = useSelector((state)=>(state.counter));

  return (
    <div>{counter}</div>
  )
}
