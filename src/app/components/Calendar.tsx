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
        <div className="text-white flex justify-center items-center text-md mt-8 md:text-2xl">
            {dayOfWeek}, {day} de {month} de {year}
        </div>
    );
}