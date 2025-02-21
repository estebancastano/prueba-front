import React from 'react';
import { useState } from 'react';
import HotelForm from './components/HotelForm';
import ReservationForm from './components/ReservationForm';
import HotelList from './components/HotelList';
import ReservationList from './components/ReservationList';

export default function App() {
  const [showHotelForm, setShowHotelForm] = useState(false);
  const [showReservationForm, setShowReservationForm] = useState(false);

  const handleHotelAdded = () => {
    setShowHotelForm(false);
    alert('Hotel added successfully!');
  };

  const handleReservationComplete = () => {
    setShowReservationForm(false);
    alert('Reservation completed successfully!');
  };

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-10">Hotel Management App</h1>
      <div className="space-y-6 max-w-2xl mx-auto">
        {!showHotelForm ? (
          <button
            onClick={() => setShowHotelForm(true)}
            className="bg-green-500 text-gray-700 px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300"
          >
            Add Hotel
          </button>
        ) : (
          <HotelForm onHotelAdded={handleHotelAdded} />
        )}
        {!showReservationForm ? (
          <button
            onClick={() => setShowReservationForm(true)}
            className="bg-blue-500 text-gray-700 px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Make a Reservation
          </button>
        ) : (
          <ReservationForm onReservationComplete={handleReservationComplete} />
        )}
        <HotelList />
        <ReservationList />
      </div>
    </div>
  );
}