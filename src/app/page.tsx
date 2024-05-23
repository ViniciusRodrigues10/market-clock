import { Clock } from './components/Clock';
import { Calendar } from './components/Calendar';
import { ClockCity } from './components/ClockCity';

export default function Home() {
  const now = new Date()
  return (
    <main>
      <Clock time={now.getTime()} />
      <Calendar />
      <ClockCity /> 
    </main>  
  );
}
