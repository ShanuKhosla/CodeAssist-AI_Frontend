'use client'
import React, { useState, useRef, ChangeEvent, KeyboardEvent } from 'react';
import axios from 'axios';
import { ThreeDots } from 'react-loader-spinner';
import { FiPaperclip } from 'react-icons/fi';
import { ToastContainer, toast, ToastOptions } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import OptimizedCode from './ui/OptimizedCode';
import BackToHome from './ui/BackToHome';

interface OptimizationOutput {
  code: string;
  optimizations: string[];
}

const Optimize: React.FC = () => {
  const [code, setCode] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [output, setOutput] = useState<OptimizationOutput>({ code: '', optimizations: [] });
  const [file, setFile] = useState<File | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const notifySuccess = (message: string) => toast.success(message, toastConfig);
  const notifyError = (message: string) => toast.error(message, toastConfig);

  const handleOptimize = async () => {
    if (code.trim() === '') {
      notifyError('Please enter some code to optimize.');
      return;
    }
    setLoading(true);
    try {
      const response = await axios.post<{ output: OptimizationOutput }>('https://codeassist-ai.onrender.com/optimize-code', {
        code,
      });
      setOutput(response.data.output);
      notifySuccess('Code optimized successfully!');
    } catch (error) {
      console.error('Error fetching optimization:', error);
      notifyError('Failed to optimize code. Please try again.');
    } finally {
      setLoading(false);
      setCode('');
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleFileUpload = async () => {
    if (!file) {
      notifyError('Please select a file first.');
      return;
    }
    setLoading(true);
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post<{ output: OptimizationOutput }>('https://codeassist-ai.onrender.com/upload-file', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setOutput(response.data.output);
      notifySuccess('File uploaded and optimized successfully!');
    } catch (error) {
      console.error('Error uploading file:', error);
      notifyError('Failed to upload and optimize file. Please try again.');
    } finally {
      setLoading(false);
      setFile(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  const handleFileClick = () => {
    fileInputRef.current?.click();
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (!loading && code.trim() !== '') {
        handleOptimize();
      }
    }
  };

  return (
    <div className='text-[#f0f0f0] h-screen w-full flex flex-col items-center justify-center'>
      <BackToHome />
      <div className='w-full bg-black-100 z-10 fixed bottom-0 p-2'>
        <div className='px-60 max-lg:p-1'>
          <div className='flex items-center justify-center'>
            <textarea
              placeholder='Enter code...'
              value={code}
              onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setCode(e.target.value)}
              onKeyPress={handleKeyPress}
              className={`border-2 text-[#f0f0f0] bg-black-200 px-4 py-2 w-full ${code === '' ? 'h-12 rounded-full' : 'h-40 rounded-xl'} ring-0 flex items-center justify-center resize-none`}
            />
            <button
              className='relative right-10 bg-black-100 contrast-150 p-2 rounded-full'
              onClick={handleFileClick}
            >
              <FiPaperclip />
              <input
                type='file'
                ref={fileInputRef}
                onChange={handleFileChange}
                style={{ display: 'none' }}
              />
            </button>
          </div>
          <div className='flex justify-center gap-4 mt-2'>
            <button
              className={`text-black-100 px-6 py-2 bg-[#f0f0f0] rounded-full flex items-center justify-center ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
              onClick={handleOptimize}
              disabled={loading || (code.trim() === '')}
            >
              {loading ? <ThreeDots color="#000" height={10} width={30} /> : 'Optimize'}
            </button>
            <button
              className={`text-black-100 px-6 py-2 bg-[#f0f0f0] rounded-full flex items-center justify-center ${loading || !file ? 'opacity-50 cursor-not-allowed' : ''}`}
              onClick={handleFileUpload}
              disabled={loading || !file}
            >
              {loading ? <ThreeDots color="#000" height={10} width={30} /> : 'Upload & Optimize'}
            </button>
          </div>
        </div>
      </div>
      {output.code && (
        <div className='flex items-center justify-center mt-8'>
          <OptimizedCode optimizedCode={output.code} />
        </div>
      )}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

const toastConfig: ToastOptions = {
  position: "top-right",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "dark",
};

export default Optimize;