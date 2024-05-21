'use client';
import React from 'react';
import { WorldClock } from './WorldClock';

interface CityClockProps {
    cityName: string;
    temiZone: string;
    marketStatus: boolean;
}

export const ClockCard: React.FC<CityClockProps> = ({ cityName, marketStatus, temiZone }) => {

    const marketStatusColor = marketStatus == true ? 'text-green-500' : 'text-red-500';
    const marketStatusText = marketStatus ? 'Aberto' : 'Fechado';

    return (
        <div className="w-64 h-48 text-white p-4 rounded-lg relative flex flex-col justify-center shadow-lg border border-gray-900">
            <div className="absolute top-4 left-4 text-sm font-semibold">
                {cityName}
            </div>
            <div className={`absolute top-4 right-4 text-sm font-semibold ${marketStatusColor}`}>
                {marketStatusText}
            </div>
            <hr className="w-full border-t border-gray-900" />
            <div className="text-2xl font-bold text-center mt-4">
                <WorldClock timeZone={temiZone} />
            </div>
        </div>
    );
};
