'use client'
import React, { useState } from 'react';
import axios from 'axios';
import TranslateCode from './ui/TranslateCode';
import BackToHome from './ui/BackToHome';

const Translate = () => {
  const [code, setCode] = useState('');
  const [toLang, setToLang] = useState('');
  const [loading, setLoading] = useState(false);
  const [translatedCode, setTranslatedCode] = useState(''); // State to store translated code

  const handleTranslate = async () => {
    setLoading(true);
    try {
      const response = await axios.post('https://codeassist-ai.onrender.com/translate-code', {
        code,
        toLang,
      });
      setTranslatedCode(response.data.translatedOutput.code); // Update state with translated code
    } catch (error) {
      console.error('Error fetching translation:', error);
    } finally {
      setLoading(false);
      setCode('');
    }
  };

  const handleLanguageChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setToLang(event.target.value);
  };

  const handleKeyPress = (e: { key: string; preventDefault: () => void; }) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Prevent the default action (new line) when Enter is pressed
      if (!loading && code.trim() !== '' && toLang !== '') {
        handleTranslate();
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
            value={code}
            onChange={(e) => setCode(e.target.value)}
            onKeyPress={handleKeyPress} // Add onKeyPress event listener
            className={`border-2 text-black px-4 py-2 w-full ${code === '' ? 'h-12 rounded-full' : 'h-40 rounded-xl'} ring-0 flex items-center justify-center resize-none`}
          />
          <div className='flex items-center justify-center'>
            <select
              className="mt-2 border-2 w-1/2 relative bottom-1 text-black bg-[#f0f0f0] px-4 py-1 h-10 rounded-l-full ring-0"
              value={toLang}
              onChange={handleLanguageChange}
            >
              <option value="">Select Language</option>
              <option value="Python">Python</option>
              <option value="Java">Java</option>
              <option value="JavaScript">JavaScript</option>
              <option value="C++">C++</option>
              <option value="C">C</option>
              <option value="PHP">PHP</option>
              <option value="C#">C#</option>
              <option value="Ruby">Ruby</option>
              <option value="Swift">Swift</option>
              <option value="Go">Go</option>
              <option value="Kotlin">Kotlin</option>
              <option value="R">R</option>
              <option value="Scala">Scala</option>
              <option value="Assembly Language">Assembly Language</option>
              <option value="SQL">SQL</option>
              <option value="Bash">Bash</option>
              <option value="Vue.js">Vue.js</option>
              <option value="React.js">React.js</option>
              <option value="Angular">Angular</option>
              <option value="TypeScript">TypeScript</option>
              <option value="Elm">Elm</option>
              <option value="Haskell">Haskell</option>
              <option value="Rust">Rust</option>
              <option value="Dart">Dart</option>
              <option value="Perl">Perl</option>
              <option value="Objective-C">Objective-C</option>
              <option value="MATLAB">MATLAB</option>
              <option value="Prolog">Prolog</option>
              <option value="Lisp">Lisp</option>
              <option value="Smalltalk">Smalltalk</option>
              <option value="Ada">Ada</option>
            </select>
            <button
              className={`text-black-100 my-2 px-6 py-2 h-10 w-1/2 bg-[#f0f0f0] rounded-r-full flex items-center justify-center mx-auto ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
              onClick={handleTranslate}
              disabled={loading || code.trim() === '' || toLang === ''}
            >
              {loading ? 'Translating...' : 'Translate'}
            </button>
          </div>
        </div>
      </div>
      {translatedCode && (
        <div className='flex items-center justify-center mt-8'>
          <TranslateCode optimizedCode={translatedCode} />
        </div>
      )}
    </div>
  );
};

export default Translate;
