import { createSlice } from "@reduxjs/toolkit";

// PHP 세션과 같음
export const userSlice = createSlice({
    // 초기값
    name: "user",
    initialState: {
        displayName: "",
        uid: "",
        accessToken: "",
    },
    reducers: {
        // 로그인 하면 값 넣기
        loginUser: (state, action) => {
            state.displayName = action.payload.displayName;
            state.uid = action.payload.uid;
            state.accessToken = action.payload.accessToken;
        },

        // 로그아웃 하면 값 비우기
        clearUser: (state) => {
            state.displayName = "";
            state.uid = "";
            state.accessToken = "";
        },
    },
});

export const { loginUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
