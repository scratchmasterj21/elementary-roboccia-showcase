import React from 'react';

const Events: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Upcoming Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold">Event 1</h2>
          <p className="text-gray-600">Date: 2023-10-15</p>
          <p className="text-gray-600">Description of the event...</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold">Event 2</h2>
          <p className="text-gray-600">Date: 2023-11-20</p>
          <p className="text-gray-600">Description of the event...</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold">Event 3</h2>
          <p className="text-gray-600">Date: 2023-12-05</p>
          <p className="text-gray-600">Description of the event...</p>
        </div>
      </div>
    </div>
  );
};

export default Events;
