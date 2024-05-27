'use client'
import { Clock } from './components/Clock';
import { Calendar } from './components/Calendar';
import { ClockCity } from './components/ClockCity';
import useClockTitle from '@/utils/useClockTitle';

export default function Home() {
  const now = new Date()
  useClockTitle();
  
  return (
    <main className="flex min-h-screen flex-col bg-[#000000]">
      <Clock time={now.getTime()} />
      <Calendar />
      <ClockCity /> 
    </main>  
  );
}
