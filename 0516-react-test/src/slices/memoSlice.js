// 제공받은 슬라이스를 통해서
// 이름, 초기값, 리듀서 작성
import { createSlice } from '@reduxjs/toolkit'

export const memoSlice = createSlice({
    name : "memo",
    initialState : [
        {
            id :1,
            text : "메모입니다",
            date : "2023-05-17",
            isLike : false
        },
        {
            id :2,
            text : "두번째 메모입니다",
            date : "2023-05-17",
            isLike : true
        },
    ],
    reducers : {
        addMemo : (state, action)=>{
            // 값을 컴포넌트에서 들고올때는 action을 통해서 들고옴
            // action의 payload로 들고올 값 지정 : text값을 가져옴
            // id, date, isLike는 reducer에서 값 고정
            const newMemo = {
                text : action.payload,
                id : id,
                date : "2023-05-17",
                isLike : false
            }
            id++;

            // 리덕스 툴킷은 값에 직접 접근해서 수정해도 
            // 값이 업데이트가 된다
            // push()는 원본 배열에 바로 추가
            // concat()은 원본은 그대로 있고 return 값에 추가
            state.push(newMemo);
        },
        deleteMemo : (state, action)=>{
            // action.payload : 배열의 인덱스의 값
            state.splice(action.payload, 1)
        },
    }
})

// 코드안에서 변수로 쓸 값
let id = 3;

export const { addMemo, deleteMemo } = memoSlice.actions;
export default memoSlice.reducer