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
    reducers : {}
})

export const {} = memoSlice.actions;
export default memoSlice.reducer