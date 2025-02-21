import React from 'react';
import { useSelector } from 'react-redux';

export default function ReservationList() {
    const reservations = useSelector((state) => state.reservations);
    console.log("Reservations State in Component:", reservations);

    if (!Array.isArray(reservations)) {
        return <p>No reservations found.</p>;
    }

    return (
        <div className="mt-6">
            <h2 className="text-3xl font-bold mb-4 flex justify-center">Reservations</h2>
            <ul className="space-y-4">
                {reservations.map((reservation) => (
                    <li
                        key={reservation.id}
                        className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                    >
                        <p><strong>Guest:</strong> {reservation.guestName}</p>
                        <p><strong>Check-In:</strong> {reservation.checkInDate}</p>
                        <p><strong>Check-Out:</strong> {reservation.checkOutDate}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}