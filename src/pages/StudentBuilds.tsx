import React from 'react';

const StudentBuilds: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Student Builds</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold text-center">Grade 4</h2>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQivFHhP_Dp4vJ2ss7Nz9ROpw4LnZMcRY4Veg&s" alt="Student Build" className="w-full h-48 object-contain rounded mb-2" />
          <p className="text-gray-600 text-center">Name: Thrower</p>
          <p className="text-gray-600 text-center">Group: 2</p>
          <p className="text-gray-600 text-center">Range: long</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold text-center">Grade 5</h2>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFWB20ts_LJbcL_jIFt836mMnh5ChePHpBi86yDZCriJ3nOI9uDjlHpCzztfNpuJMO-qw&usqp=CAU" alt="Student Build" className="w-full h-48 object-contain rounded mb-2" />
          <p className="text-gray-600 text-center">Name: Arm</p>
          <p className="text-gray-600 text-center">Group: 1</p>
          <p className="text-gray-600 text-center">Range: short</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold text-center">Grade 6</h2>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBE4iqgTjts-H25qiSIH7hyi5cbKqgUx_PTe-qQCQ90iCgobHgL2pAwumtuQsLGtsvbXA&usqp=CAU" alt="Student Build" className="w-full h-48 object-contain rounded mb-2" />
          <p className="text-gray-600 text-center">Name: Long Thrower</p>
          <p className="text-gray-600 text-center">Group: 1</p>
          <p className="text-gray-600 text-center">Range: long</p>
        </div>
      </div>
    </div>
  );
};

export default StudentBuilds;
