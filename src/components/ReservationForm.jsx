import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addReservation } from '../store/slices/reservationSlice';

export default function ReservationForm({ onReservationComplete }) {
    const dispatch = useDispatch();
    const [guestName, setGuestName] = useState('');
    const [checkInDate, setCheckInDate] = useState('');
    const [checkOutDate, setCheckOutDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newReservation = {
            id: Date.now(),
            guestName,
            checkInDate,
            checkOutDate,
        };
        console.log("Dispatching Reservation:", newReservation); 
        dispatch(addReservation(newReservation)); 
        onReservationComplete();
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Reserve Room</h3>
            <div className="mb-4">
                <label className="block text-gray-700">Guest Name:</label>
                <input
                    type="text"
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Check-In Date:</label>
                <input
                    type="date"
                    value={checkInDate}
                    onChange={(e) => setCheckInDate(e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Check-Out Date:</label>
                <input
                    type="date"
                    value={checkOutDate}
                    onChange={(e) => setCheckOutDate(e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />
            </div>
            <button
                type="submit"
                className="w-full bg-blue-500 text-gray-800 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
            >
                Reserve
            </button>
        </form>
)}