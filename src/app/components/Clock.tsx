'use client'

import { useEffect, useState } from "react"

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
    
    return <div className="flex justify-center items-center text-9xl tabular-nums md:mt-60 ">{time.toLocaleTimeString()}</div>
}