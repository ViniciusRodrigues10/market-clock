'use client'

import { useEffect, useState } from "react"

export const Calendar = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date());
        }, 1000); 
        return () => clearInterval(intervalId);
    }, []);

    const dayOfWeek = date.toLocaleDateString('pt-BR', { weekday: 'long' });
    const day = date.getDate();
    const month = date.toLocaleDateString('pt-BR', { month: 'long' });
    const year = date.getFullYear();

    return (
        <div className="flex justify-center items-center text-2xl mt-8">
            {dayOfWeek}, {day} de {month} de {year}
        </div>
    );
}