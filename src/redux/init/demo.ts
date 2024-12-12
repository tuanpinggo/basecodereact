import { createSlice } from '@reduxjs/toolkit'

const initialDemoState = {
    ac: "aggregatoricapaci",
}

export const demoGlobalState = createSlice({
    name: 'demoGlobalState',
    initialState: initialDemoState,
    reducers: {
        changeDemoGlobalState: (state, action) => {
            state.ac = action.payload
        }
    }
})

export const {changeDemoGlobalState} = demoGlobalState.actions;
export default demoGlobalState.reducer;