import { LocalStorageKey } from '@/constants/LocalStoreage';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
// import { useTheme } from 'next-themes';

// function getDefaultMode(){

//     const { systemTheme } = useTheme()

//     const getLocalStorage = localStorage.getItem(LocalStorageKey.themeMode)

//     if(!getLocalStorage) return systemTheme

//     return getLocalStorage
// }

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