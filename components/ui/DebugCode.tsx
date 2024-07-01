// OptimizedCode.js
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';

const OptimizedCode = ({ debuggedCode }) => {
  return (
    <div className="pb-24 pt-10 max-lg:pb-10  h-screen"> {/* Add padding bottom to create space for the scrollbar */}
    <h3 className='text-3xl font-semibold'>Debugged Code:</h3>
    <div className="h-[600px] max-lg:h-[500px] max-lg:w-[400px] w-[900px] rounded-xl  overflow-y-scroll"> {/* Adjust height and width as needed */}
        <SyntaxHighlighter showLineNumbers={true} wrapLines={true} language="javascript" style={okaidia} >
          {debuggedCode}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}

export default OptimizedCode;
