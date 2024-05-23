import { Clock } from './components/Clock';
import { Calendar } from './components/Calendar';
import { ClockCity } from './components/ClockCity';

export default function Home() {
  const now = new Date()
  return (
    <main className="flex min-h-screen flex-col bg-[#000000]">
      <Clock time={now.getTime()} />
      <Calendar />
      <ClockCity /> 
    </main>  
  );
}
