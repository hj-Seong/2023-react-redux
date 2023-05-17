// 툴킷에서 제공하는 thunk 미들웨어 기능 사용
// thunk를 이용하여 작성하는 여러가지 방법
// 1. 비동기 함수를 사용
// 2. 여러개의 액션을 순서대로 사용

// 1초 뒤에 숫자값을 증가시키는 슬라이스,

import { createSlice } from '@reduxjs/toolkit'

export const thunkSlice = createSlice({
    name :"thunk",
    initialState : {
        value :4,
    },
    reducers : {
        addValue : (state)=>{
            state.value +=1;
        },
    }
})

export const { addValue } = thunkSlice.actions;
export default thunkSlice.reducer