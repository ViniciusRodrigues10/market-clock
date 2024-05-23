'use client'
import { useEffect, useState } from "react"
import localFont from '@next/font/local';
const digital = localFont({ src: '../fonts/digital.ttf' });

type Props = {
    time: number
}

export const Clock = ({ time: initial }: Props) => {
    const [time, setTime] = useState(new Date(initial))

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date())
        }, 1000)

        return () => clearInterval(timer)
    }, [])
    
    return <div className={`${digital.className} flex justify-center text-7xl tabular-nums mt-20 md:mt-60 md:text-9xl`}>{time.toLocaleTimeString()}</div>
}