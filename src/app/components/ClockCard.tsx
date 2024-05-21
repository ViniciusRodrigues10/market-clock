'use client';
import React from 'react';

interface CityClockProps {
    cityName: string;
    time: string;
}

export const ClockCard: React.FC<CityClockProps> = ({ cityName, time }) => {
    return (
        <div className="w-64 h-32 text-white p-4 rounded-lg relative flex items-center justify-center shadow-lg border border-gray-700">
            <div className="absolute top-2 left-2 text-sm font-semibold">
                {cityName}
            </div>
            <div className="text-2xl font-bold mt-4">
                {time}
            </div>
        </div>
    );
};
