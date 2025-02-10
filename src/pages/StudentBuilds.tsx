import React from 'react';

const StudentBuilds: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Student Builds</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold">Grade 1</h2>
          <img src="https://images.unsplash.com/photo-1581091220976-78e9c4d7fdac" alt="Student Build" className="w-full h-48 object-cover rounded mb-2" />
          <p className="text-gray-600">Description of the build...</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold">Grade 2</h2>
          <img src="https://images.unsplash.com/photo-1581091220976-78e9c4d7fdac" alt="Student Build" className="w-full h-48 object-cover rounded mb-2" />
          <p className="text-gray-600">Description of the build...</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold">Grade 3</h2>
          <img src="https://images.unsplash.com/photo-1581091220976-78e9c4d7fdac" alt="Student Build" className="w-full h-48 object-cover rounded mb-2" />
          <p className="text-gray-600">Description of the build...</p>
        </div>
      </div>
    </div>
  );
};

export default StudentBuilds;
