import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="text-center mb-4">
        <img
          src="https://i.imgur.com/J62VhlX.png"
          alt="Robotics Showcase"
        />
      </div>
      <div className="bg-gray-100 p-4 rounded shadow mb-4 text-center">
        <h1 className="text-3xl font-bold mb-4">Welcome to Our Robotics Showcase</h1>
      </div>
      <div className="flex justify-center mb-4">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/fu3DKAtH0jc?si=fxttUMSxX2YpOcP8"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="bg-gray-100 p-4 rounded shadow mb-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Robot Events</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="bg-white p-4 rounded shadow">
          <img src="https://images.unsplash.com/photo-1581091220976-78e9c4d7fdac" alt="Robot Event" className="w-full h-48 object-cover rounded mb-2" />
          <h2 className="text-xl font-semibold">Robot Event 1</h2>
          <p className="text-gray-600">Description of the event...</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <img src="https://images.unsplash.com/photo-1581091220976-78e9c4d7fdac" alt="Robot Event" className="w-full h-48 object-cover rounded mb-2" />
          <h2 className="text-xl font-semibold">Robot Event 2</h2>
          <p className="text-gray-600">Description of the event...</p>
        </div>
      </div>

      <div className="bg-gray-100 p-4 rounded shadow mb-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Robot Builds</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <img src="https://images.unsplash.com/photo-1581091220976-78e9c4d7fdac" alt="Robot Build" className="w-full h-48 object-cover rounded mb-2" />
          <h2 className="text-xl font-semibold">Robot Build 1</h2>
          <p className="text-gray-600">Description of the build...</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <img src="https://images.unsplash.com/photo-1581091220976-78e9c4d7fdac" alt="Robot Build" className="w-full h-48 object-cover rounded mb-2" />
          <h2 className="text-xl font-semibold">Robot Build 2</h2>
          <p className="text-gray-600">Description of the build...</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
