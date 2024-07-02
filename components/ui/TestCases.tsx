import React from 'react';

const TestCases = ({ testCases }: {testCases: string}) => {
  return (
<div className="pb-24 pt-10 max-lg:pb-10  h-screen"> {/* Add padding bottom to create space for the scrollbar */}
      <h3 className='text-3xl font-semibold'>Generated Test Cases:</h3>
      <div className="h-[600px] max-lg:h-[500px] max-lg:w-[400px] w-[900px] rounded-xl  overflow-y-scroll"> {/* Adjust height and width as needed */}
        {testCases.split('\n').map((line, index) => (
          <p key={index} className="text-white">{line}</p>
        ))}
      </div>
    </div>
  );
}

export default TestCases;
