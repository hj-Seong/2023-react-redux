import { createSlice } from '@reduxjs/toolkit'

// 날씨API를 통해서 값을 가져옴, >> 비동기 함수
// loading은 fetchAPI를 사용할때 걸리는 시간동안 true
// startLoading, endLoading, getWeather(가져온 값을 할당)

// >> 값이 바로바로 바뀌는 것은 reducer에 바로작성
// >> 값을 서버에서 받아오는 경우 시간이걸리므로 thunk에 작성
export const weatherSlice = createSlice({
    name: "weather",
    initialState : {
        weather : null,
        loading : false
    },
    reducers : {
        startLoading : (state)=>{ state.loading = true },
        endLoading : (state)=>{ state.loading = false },
        getWeather : (state, action)=>{ 
            // action.payload는 날씨API에서 받아온 값
            state.weather = action.payload
        }
    }
})

// thunk를 사용한 액션생성함수 작성



export const { startLoading, endLoading, getWeather } =weatherSlice.actions
export default weatherSlice.reducer