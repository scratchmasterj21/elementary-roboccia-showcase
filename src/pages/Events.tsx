import React from 'react';

    const Events: React.FC = () => {
      return (
        <div className="container mx-auto p-4">
          <h1 className="text-3xl font-bold mb-4">Upcoming Events</h1>

          {/* Roboccia Events Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2025 Roboccia Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded shadow">
                <h3 className="text-xl font-semibold">Roboccia Cup 3</h3>
                <p className="text-gray-600">Date: 2025-03-16</p>
                <p className="text-gray-600">Refer to the following website: <a href="https://roboccia.com/rjc2024-info1/">https://roboccia.com/rjc2024-info1/</a></p>
              </div>
            </div>
          </section>

          {/* Felice Events Section */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Felice Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded shadow">
                <h3 className="text-xl font-semibold">Felice Cup 1</h3>
                <p className="text-gray-600">Date: 2026-01-20</p>
                <p className="text-gray-600">Description of the Felice event...</p>
              </div>
            </div>
          </section>

          {/* Past Events Section */}
          <section className="mt-8">
            <h1 className="text-3xl font-bold mb-4">Past Events</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Example Past Event */}
              <div className="bg-white p-4 rounded shadow">
                <h3 className="text-xl font-semibold">Past Event 1</h3>
                <p className="text-gray-600">Date: 2023-09-15</p>
                <p className="text-gray-600">Description of a past event...</p>
              </div>
              {/* Add more past events here */}
            </div>
          </section>
        </div>
      );
    };

    export default Events;
