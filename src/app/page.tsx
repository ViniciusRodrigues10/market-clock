import { Clock } from './components/Clock';
import { Calendar } from './components/Calendar';
import { ClockCity } from './components/ClockCity';
import localFont from '@next/font/local';
const digital = localFont({ src: './fonts/digital.ttf' })

export default function Home() {
  const now = new Date()
  return (
    <main>
      <div className={`${digital.className}`}>
        <Clock time={now.getTime()} />
      </div>
      <Calendar />
      <div className={`${digital.className}`}>
        <ClockCity /> 
      </div>
    </main>  
  );
}
