import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-center mb-4">
        <img
          src="https://i.imgur.com/J62VhlX.png"
          alt="Robotics Showcase"
          style={{ width: '300px', height: 'auto' }}
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
          <img src="https://roboccia.com/wp-content/uploads/2022/04/top-01-001-1536x960.png" alt="Robot Event" className="w-full h-48 object-cover rounded mb-2" />
          <h2 className="text-xl font-semibold">Roboccia Events</h2>
          <p className="text-gray-600">Roboccia Cup Events</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <img src="https://roboccia.com/wp-content/uploads/2022/04/top-01-002-768x480.png" alt="Robot Event" className="w-full h-48 object-cover rounded mb-2" />
          <h2 className="text-xl font-semibold">Felice Events</h2>
          <p className="text-gray-600">Gunma Felice Academy Events</p>
        </div>
      </div>

      <div className="bg-gray-100 p-4 rounded shadow mb-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Robot Builds</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <img src="https://prcdn.freetls.fastly.net/release_image/105988/1/105988-1-9efcd72ed9d298525c9d45b2a6374be6-3900x2925.jpg?format=jpeg&auto=webp&quality=85%2C65&width=1950&height=1350&fit=bounds" alt="Robot Build" className="w-full h-48 object-cover rounded mb-2" />
          <h2 className="text-xl font-semibold">Robot Build 1</h2>
          <p className="text-gray-600">Robot Thrower Build</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <img src="https://ascii.jp/img/2024/08/27/3786610/l/9b9e3baf4be4dc1a.jpg" alt="Robot Build" className="w-full h-48 object-cover rounded mb-2" />
          <h2 className="text-xl font-semibold">Robot Build 2</h2>
          <p className="text-gray-600">Robot Long Thrower Buid</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
