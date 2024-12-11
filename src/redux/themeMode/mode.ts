import { createSlice } from '@reduxjs/toolkit'

const initialThemeMode = {
    mode: "light",
}

export const themeMode = createSlice({
    name: 'themeMode',
    initialState: initialThemeMode,
    reducers: {
        changeThemeMode: (
            state, 
            action
        ) => {
            state.mode = action.payload;
        },
    }
})

export const {changeThemeMode} = themeMode.actions;
export default themeMode.reducer;