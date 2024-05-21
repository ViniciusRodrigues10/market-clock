'use client';
import React from 'react';

interface CityClockProps {
    cityName: string;
    marketStatus: boolean;
    time: string;
}

export const ClockCard: React.FC<CityClockProps> = ({ cityName, marketStatus, time }) => {
    const marketStatusColor = marketStatus == true ? 'text-green-500' : 'text-red-500';
    const marketStatusText = marketStatus ? 'Aberto' : 'Fechado';

    return (
        <div className="w-64 h-40 text-white p-4 rounded-lg relative flex flex-col justify-center shadow-lg border border-gray-900">
            <div className="absolute top-4 left-4 text-sm font-semibold">
                {cityName}
            </div>
            <div className={`absolute top-4 right-4 text-sm font-semibold ${marketStatusColor}`}>
                {marketStatusText}
            </div>
            <hr className="w-full border-t border-gray-900" />
            <div className="text-2xl font-bold text-center mt-4">
                {time}
            </div>
        </div>
    );
};
