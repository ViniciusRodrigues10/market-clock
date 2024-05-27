function convertHoursToInteger(hour: string): number {
    const [hours, minutes, seconds] = hour.split(":");
    const newHour = hours + minutes + seconds;

    return parseInt(newHour);
}

function parseDateTimeString(dateString: string, timeString: string): Date {
    const [hours, minutes, seconds] = timeString.split(":").map(Number);
    const [day, month, year] = dateString.split("/").map(Number);
    
    return new Date(year, month - 1, day, hours, minutes, seconds);
}

function isWeekend(dateString: string): boolean {
    const [day, month, year] = dateString.split("/").map(Number);
    const date = new Date(year, month - 1, day);
    const dayOfWeek = date.getDay();

    if (dayOfWeek === 0 || dayOfWeek === 6) {
        return true;
    } 
    
    return false;
}

export function marketIsOpen(marketOpening: string, marketClosing:string, currentTime: string, dateString: string): boolean {
    const open = convertHoursToInteger(marketOpening);
    const close = convertHoursToInteger(marketClosing);
    const current = convertHoursToInteger(currentTime);

    const isWeekendDay = isWeekend(dateString);

    if (current >= open && current < close && !isWeekendDay) {
        return true;
    }

    return false
}

export function calculateTimeDifference(currentDateString: string, currentTimeString: string, targetDateString: string, targetTimeString: string): string {
    const currentDateTime = parseDateTimeString(currentDateString, currentTimeString);
    let targetDateTime = parseDateTimeString(targetDateString, targetTimeString);
    
    let differenceInMillis = targetDateTime.getTime() - currentDateTime.getTime();
    let isNegative = differenceInMillis < 0;
    
    if (isNegative) {
        targetDateTime.setDate(targetDateTime.getDate() + 1);
        differenceInMillis = targetDateTime.getTime() - currentDateTime.getTime();
    }

    const hours = Math.floor(differenceInMillis / (1000 * 60 * 60));
    const minutes = Math.floor((differenceInMillis % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((differenceInMillis % (1000 * 60)) / 1000);

    const formattedHours = String(hours).padStart(2, '0');
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}
