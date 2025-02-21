import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addHotel } from '../store/slices/hotelSlice';

export default function HotelForm({ onHotelAdded }) {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newHotel = {
            id: Date.now(),
            name,
            location,
        };
        console.log("Dispatching Hotel:", newHotel); 
        dispatch(addHotel(newHotel)); 
        onHotelAdded();
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Add New Hotel</h3>
            <div className="mb-4">
                <label className="block text-gray-700">Name:</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Location:</label>
                <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />
            </div>
            <button
                type="submit"
                className="w-full bg-blue-500 text-gray-800 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
            >
                Add Hotel
            </button>
        </form>
    );
}