// 액션함수, 리듀서, state의 초기값

/** memo.js
 *  1. 메모 추가
 *  2. 메모 수정
 *  3. 메모 삭제
 *  state : [](여러개) / id, text, date(내용)
 *  action : "ADD_MEMO", "MODIFY_MEMO", "DELETE_MEMO"
 */

// state의 초기값
const initalState = [
    {
        id : 1,
        text :"메모입니다",
        date : "2023-05-12"
    },
    {
        id : 2,
        text :"두번째 메모입니다",
        date : "2023-05-12"
    },
]

// 액션 생성 함수
// addMemo는 메모의 값을 추가하기위해 함수를 통해 memo의 값을 가져옴
// : {text, date}을 가져와야함 >> dispatch사용때 확인!
export const addMemo = (memo) => ({type : "ADD_MEMO", payload : memo});

// 리듀서 
function memo(state=initalState, action) {
    switch (action.type) {
        case "ADD_MEMO":
            // 새로운 메모 작성
            const newMemo = {
                ...action.payload,
                id : 3
            }
            // 새로운 메모 리스트 만들어서
            const newMemoList = state.concat(newMemo)
            // 새로운 메모 리스트 return
            return newMemoList
        default :
            return state
    }
}

export default memo