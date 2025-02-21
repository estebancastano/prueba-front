import { configureStore } from '@reduxjs/toolkit';
import reservationReducer from './slices/reservationSlice';
import hotelReducer from './slices/hotelSlice';

export const store = configureStore({
    reducer: {
        hotels: hotelReducer,
        reservations: reservationReducer, 
    },
});