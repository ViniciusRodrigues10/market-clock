'use client'
import { ClockCard } from './ClockCard';

 export const ClockCity = () => {

    return (
        <div className="mx-auto max-w-screen-xl p-16 mt-20">
            <ul className="grid md:grid-cols-4 gap-8">
                <ClockCard cityName={'New York'} timeZone={'America/New_York'} marketStatus={true} />
                <ClockCard cityName={'Toronto'} timeZone={'America/Toronto'} marketStatus={true} />
                <ClockCard cityName={'Chicago'} timeZone={'America/Chicago'} marketStatus={true} />
                <ClockCard cityName={'São Paulo'} timeZone={'America/Sao_Paulo'} marketStatus={true} />
                <ClockCard cityName={'Wellington'} timeZone={'Pacific/Auckland'} marketStatus={true} />
                <ClockCard cityName={'Sydney'} timeZone={'Australia/Sydney'} marketStatus={true} />
                <ClockCard cityName={'Tokyo'} timeZone={'Asia/Tokyo'} marketStatus={false} />
                <ClockCard cityName={'Shanghai'} timeZone={'Asia/Shanghai'} marketStatus={true} />
                <ClockCard cityName={'Hong Kong'} timeZone={'Asia/Hong_Kong'} marketStatus={true} />
                <ClockCard cityName={'Singapore'} timeZone={'Asia/Singapore'} marketStatus={true} />
                <ClockCard cityName={'Mumbai'} timeZone={'Asia/Kolkata'} marketStatus={true} />
                <ClockCard cityName={'Dubai'} timeZone={'Asia/Dubai'} marketStatus={true} />
                <ClockCard cityName={'Riyadh'} timeZone={'Asia/Riyadh'} marketStatus={true} />
                <ClockCard cityName={'Johannesburg'} timeZone={'Africa/Johannesburg'} marketStatus={true} />
                <ClockCard cityName={'Moscow'} timeZone={'Europe/Moscow'} marketStatus={true} />
                <ClockCard cityName={'Frankfurt'} timeZone={'Europe/Berlin'} marketStatus={true} />
                <ClockCard cityName={'Zurich'} timeZone={'Europe/Zurich'} marketStatus={true} />
                <ClockCard cityName={'London'} timeZone={'Europe/London'} marketStatus={true} />
                </ul>
        </div>
    );
};




