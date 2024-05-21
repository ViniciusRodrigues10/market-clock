'use client'

import { useEffect, useState } from "react"

export const Calendar = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date());
        }, 1000); // Atualiza a data a cada segundo

        return () => clearInterval(intervalId); // Limpa o intervalo quando o componente é desmontado
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