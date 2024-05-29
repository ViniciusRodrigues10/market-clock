'use client'
import { ClockCard } from './ClockCard';

 export const ClockCity = () => {

    return (
        <div className="mx-auto max-w-screen-xl p-16 mt-10 md:mt-20 flex justify-center">
            <ul className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                <ClockCard cityName={'New York'} timeZone={'America/New_York'} marketOpeningTime={"09:30:00"} marketClosingTime={"16:00:00"} />
                <ClockCard cityName={'Toronto'} timeZone={'America/Toronto'} marketOpeningTime={"09:30:00"} marketClosingTime={"16:00:00"} />
                <ClockCard cityName={'Chicago'} timeZone={'America/Chicago'}  marketOpeningTime={"09:30:00"} marketClosingTime={"16:00:00"} />
                <ClockCard cityName={'São Paulo'} timeZone={'America/Sao_Paulo'} marketOpeningTime={"10:00:00"} marketClosingTime={"17:00:00"} />
                <ClockCard cityName={'Wellington'} timeZone={'Pacific/Auckland'} marketOpeningTime={"10:00:00"} marketClosingTime={"16:45:00"} />
                <ClockCard cityName={'Sydney'} timeZone={'Australia/Sydney'} marketOpeningTime={"10:00:00"} marketClosingTime={"16:00:00"} />
                <ClockCard cityName={'Tokyo'} timeZone={'Asia/Tokyo'} marketOpeningTime={"09:00:00"} marketClosingTime={"15:00:00"} />
                <ClockCard cityName={'Shanghai'} timeZone={'Asia/Shanghai'} marketOpeningTime={"09:30:00"} marketClosingTime={"15:00:00"} />
                <ClockCard cityName={'Hong Kong'} timeZone={'Asia/Hong_Kong'} marketOpeningTime={"09:30:00"} marketClosingTime={"16:00:00"} />
                <ClockCard cityName={'Singapore'} timeZone={'Asia/Singapore'} marketOpeningTime={"09:00:00"} marketClosingTime={"17:00:00"} />
                <ClockCard cityName={'Mumbai'} timeZone={'Asia/Kolkata'} marketOpeningTime={"09:15:00"} marketClosingTime={"15:30:00"} />
                <ClockCard cityName={'Dubai'} timeZone={'Asia/Dubai'} marketOpeningTime={"10:00:00"} marketClosingTime={"14:00:00"} />
                <ClockCard cityName={'Riyadh'} timeZone={'Asia/Riyadh'} marketOpeningTime={"10:00:00"} marketClosingTime={"15:00:00"} />
                <ClockCard cityName={'Johannesburg'} timeZone={'Africa/Johannesburg'} marketOpeningTime={"09:00:00"} marketClosingTime={"17:00:00"} />
                <ClockCard cityName={'Moscow'} timeZone={'Europe/Moscow'} marketOpeningTime={"10:00:00"} marketClosingTime={"18:40:00"} />
                <ClockCard cityName={'Frankfurt'} timeZone={'Europe/Berlin'} marketOpeningTime={"08:00:00"} marketClosingTime={"17:30:00"} />
                <ClockCard cityName={'Zurich'} timeZone={'Europe/Zurich'} marketOpeningTime={"09:00:00"} marketClosingTime={"17:30:00"} />
                <ClockCard cityName={'London'} timeZone={'Europe/London'} marketOpeningTime={"08:00:00"} marketClosingTime={"16:30:00"} />
            </ul>
        </div>
    );
};
