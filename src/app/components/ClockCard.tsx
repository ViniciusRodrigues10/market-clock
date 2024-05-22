import React from 'react';
import { WorldClock } from './WorldClock';
import styles from '../../styles/NeonLetters.module.css';

interface CityClockProps {
    cityName: string;
    timeZone: string;
    marketStatus: boolean;
}

export const ClockCard: React.FC<CityClockProps> = ({ cityName, marketStatus, timeZone }) => {

    const marketStatusColor = marketStatus ? `${styles['text-green-500']} ${styles['neon-text']}` : `${styles['text-red-500']} ${styles['neon-text']}`;
    const marketStatusText = marketStatus ? 'Aberto' : 'Fechado';

    return (
        <div className="w-64 h-48 text-white p-4 rounded-lg relative flex flex-col justify-center bg-white/5 z-10 backdrop-filter backdrop-blur-lg shadow-lg">
            <div className="absolute top-4 left-4 text-sm font-semibold">
                {cityName}
            </div>
            <div className={`absolute top-4 right-4 text-sm font-semibold ${marketStatusColor}`}>
                {marketStatusText}
            </div>
            <hr className="w-full border-t border-[#1f1e1e]" />
            <div className="text-2xl font-bold text-center mt-4">
                <WorldClock timeZone={timeZone} />
            </div>
        </div>
    );
};
