import React, { useEffect, useState } from 'react';
import { getWorldDate, getWorldTime, updateWorldDate, updateWorldTime } from '../../utils/ClockFunctions'
import { marketIsOpen } from '../../utils/utils'
import styles from '../../styles/NeonLetters.module.css';

interface CityClockProps {
    cityName: string;
    timeZone: string;
    marketOpeningTime: string;
    marketClosingTime: string;
}

export const ClockCard: React.FC<CityClockProps> = ({ cityName, timeZone, marketOpeningTime, marketClosingTime }) => {
    const [date, setDate] = useState<string>(() => getWorldDate(timeZone));
    const [time, setTime] = useState<string>(() => getWorldTime(timeZone));
    const [negotiableMarket, setNegotiableMarket] = useState<boolean>(() => marketIsOpen(marketOpeningTime, marketClosingTime, time));

    useEffect(() => {
        const clearDateUpdate = updateWorldDate(timeZone, setDate);
        const clearTimeUpdate = updateWorldTime(timeZone, setTime);
        
        const marketStatusInterval = setInterval(() => {
            const isOpen = marketIsOpen(marketOpeningTime, marketClosingTime, time);
            setNegotiableMarket(isOpen);
        }, 1000);

        return () => {
            clearDateUpdate();
            clearTimeUpdate();
            clearInterval(marketStatusInterval);
        };
    }, [timeZone, marketOpeningTime, marketClosingTime, time]);

    const marketStatusColor = negotiableMarket ? `${styles['text-green-500']} ${styles['neon-text']}` : `${styles['text-red-500']} ${styles['neon-text']}`;
    const marketStatusText = negotiableMarket ? 'Aberto' : 'Fechado';

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
                <p className="text-3xl font-bold tabular-nums">{time}</p>
                <p className="text-sm mt-2">{date}</p>
            </div>
        </div>
    );
};
