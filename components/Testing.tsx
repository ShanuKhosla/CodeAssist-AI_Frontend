'use client'
import React, { useState } from 'react';
import axios from 'axios';
import TestCases from './ui/TestCases'; // Import TestCases component
import BackToHome from './ui/BackToHome';

const Testing = () => {
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState(''); // State to store Gemini's output

  const handleTesting = async () => {
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:5000/test-code', {
        code,
      });
      setOutput(response.data.output.testCases); // Update state with Gemini's output
    } catch (error) {
      console.error('Error fetching test cases:', error);
    } finally {
      setLoading(false);
      setCode('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Prevent the default action (new line) when Enter is pressed
      if (!loading && code.trim() !== '') {
        handleTesting();
      }
    }
  };

  return (
    <div className='text-[#f0f0f0] h-screen w-full flex flex-col items-center justify-center'>
      <BackToHome />
      <div className='w-full bg-black-100 z-10 fixed bottom-0 p-2'>
        <div className='px-60 max-lg:p-1'>
          <textarea
            placeholder='Enter code...'
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            onKeyPress={handleKeyPress} // Add onKeyPress event listener
            className={`border-2 text-[#f0f0f0] bg-black-200 px-4 py-2 w-full ${code === '' ? 'h-12 rounded-full' : 'h-40 rounded-xl'} ring-0 flex items-center justify-center resize-none`}
          />
          <button
            className={`text-black-100 my-2 px-6 py-2 bg-[#f0f0f0] rounded-full flex items-center justify-center mx-auto ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={handleTesting}
            disabled={loading || code.trim() === ''}
          >
            {loading ? 'Generating...' : 'Generate Test Cases'}
          </button>
        </div>
      </div>
      {output && (
        <div className='flex items-center justify-center mt-8'>
          <TestCases testCases={output} />
        </div>
      )}
    </div>
  );
};

export default Testing;
