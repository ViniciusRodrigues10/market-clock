'use client';
import React from 'react';

interface CityClockProps {
    cityName: string;
    time: string;
}

export const ClockCard: React.FC<CityClockProps> = ({ cityName, time }) => {
    return (
        <div className="w-64 h-32 text-white p-4 rounded-lg relative flex flex-col justify-center shadow-lg border border-gray-900">
            <div className="absolute top-4 left-4 text-sm font-semibold">
                {cityName}
            </div>
            <hr className="w-full border-t border-gray-900" />
            <div className="text-2xl font-bold text-center mt-4">
                {time}
            </div>
        </div>
    );
};
