import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-6xl font-bold mb-2">404</h1>
      <p className="text-lg text-gray-600 mb-6">Oops! Page Not Found</p>
      <Link
        to="/"
        className="px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 active:bg-blue-800 transition-colors"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
