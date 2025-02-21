import { createSlice } from '@reduxjs/toolkit';

const hotelSlice = createSlice({
    name: 'hotels',
    initialState: [], 
    reducers: {
        addHotel: (state, action) => {
            state.push(action.payload);
        },
    },
});

export const { addHotel } = hotelSlice.actions;
export default hotelSlice.reducer;