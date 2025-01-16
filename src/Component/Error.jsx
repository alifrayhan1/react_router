import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ErrorPage = () => {
    let navigate = useNavigate();
    const HandelSubmit = ()=>{
        navigate("/")
    }
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-lg mb-6">The page you are looking for does not exist.</p>
      <Link to="/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Go to Homepage
      </Link>
      <button onClick={HandelSubmit} className='btn bg-orange-500 m-5 p-2 rounded-md font-bold'>go to homepage useNavigateDom</button>
    </div>
  );
};

export default ErrorPage;
