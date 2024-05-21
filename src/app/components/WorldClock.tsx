'use client';

import React, { useEffect, useState } from 'react';

interface RealTimeClockProps {
    timeZone: string;
}

export const WorldClock: React.FC<RealTimeClockProps> = ({ timeZone }) => {
    function getWorldTime(country: string): string {
        const date: Date = new Date();
    
        const options: Intl.DateTimeFormatOptions = { timeZone: country, hour: '2-digit', minute: '2-digit', second: '2-digit' };
        return date.toLocaleTimeString('pt-BR', options);
    }
    
    function getWorldDate(country: string): string {
        const date: Date = new Date();
    
        const options: Intl.DateTimeFormatOptions = { timeZone: country, year: 'numeric', month: '2-digit', day: '2-digit' };
        return date.toLocaleDateString('pt-BR', options);
    }

    const [time, setTime] = useState<string>(() => getWorldTime(timeZone));
    const [date, setDate] = useState<string> (() => getWorldDate(timeZone));

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(getWorldTime(timeZone));
            setDate(getWorldDate(timeZone));
        }, 1000);

        return () => clearInterval(interval);
    }, [timeZone]);

    return (
        <div className="flex flex-col items-center justify-center">
            <p className="text-3xl font-bold tabular-nums">{time}</p>
            <p className="text-lg mt-2">{date}</p>
        </div>
    );
};
