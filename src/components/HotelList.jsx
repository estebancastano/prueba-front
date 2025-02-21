import React from 'react';
import { useSelector } from 'react-redux';

export default function HotelList() {
    const hotels = useSelector((state) => state.hotels);
    console.log("Hotels State in Component:", hotels); 

    if (!Array.isArray(hotels)) {
        return <p>No hotels found.</p>;
    }

    return (
        <div className="mt-6">
            <h2 className="text-3xl font-bold mb-4 flex justify-center">Hotels</h2>
            <ul className="space-y-4">
                {hotels.map((hotel) => (
                    <li
                        key={hotel.id}
                        className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                    >
                        <p><strong>Name:</strong> {hotel.name}</p>
                        <p><strong>Location:</strong> {hotel.location}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}