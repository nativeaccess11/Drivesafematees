import React from 'react';
import { Metadata } from 'next';

export const metadata = {
  title: 'Drive Safe Mate - Your Trusted Driving Companion',
  description: 'Drive Safe Mate - The ultimate driving companion for safe and responsible driving. Get real-time assistance and support for your journey.',
  keywords: 'Drive Safe Mate, driving safety, driving companion, safe driving, driving assistance',
};

const DriveSafeMate = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-white">
      <div className="text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-blue-600 mb-6">
          Drive Safe Mate
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto">
          Your trusted companion for safe and responsible driving
        </p>
      </div>
    </div>
  );
};

export default DriveSafeMate; 