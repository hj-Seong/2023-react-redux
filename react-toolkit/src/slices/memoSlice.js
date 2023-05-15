// createSlice를 통해서 이름, 초기값, 리듀서작성
// action과 reducer export

import { createSlice } from '@reduxjs/toolkit'

// memoSlice에서 배열을 어떻게 업데이트 하는지 확인
export const memoSlice = createSlice({
    name: "memo",
    initialState : [
        {
            id :1,
            text : "메모입니다",
            date : "20-05-15"
        }
    ],
    reducers : {
        // 이전에 리덕스에서 쓰는 방법
        addMemoRedux : (state, action)=>{
            // 1. 새로운 메모
            const newMemo = {
                ...action.payload,
                id : id
            }
            id++;
            // 2. 새로운 메모가 있는 배열 생성
            const newMemoList = state.concat(newMemo)
            // 3. return 새로운 배열 전달
            return newMemoList;
        },
        // 값을 직접 수정해서 쓰는 방법
        addMemoToolkit : (state,action)=>{
            // 배열의 메소드중 push()
            // push()는 원본 배열에 값을 추가해서 사용한다
            const newMemo = {
                ...action.payload,
                id : id
            }
            state.push(newMemo)
        },
        // 이름은 다르지만 위와 동일한 메소드를 만들고
        // push가 잘 작동하는지 확인해보기
    }
})

// 화면에 업데이트 되는 변수가아닌,
// 코드안에서 사용할 변수
let id = 2;


export const { addMemoRedux, addMemoToolkit } = memoSlice.actions
export default memoSlice.reducer