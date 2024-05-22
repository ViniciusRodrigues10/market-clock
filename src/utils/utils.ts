function convertHoursToInteger(hour: string): number {
    const [hours, minutes, seconds] = hour.split(":");
    const newHour = hours + minutes + seconds;

    return parseInt(newHour);
}

export function marketIsOpen(marketOpening: string, marketClosing:string, currentTime: string): boolean {
    const open = convertHoursToInteger(marketOpening);
    const close = convertHoursToInteger(marketClosing);
    const current = convertHoursToInteger(currentTime);

    if (current >= open && current < close) {
        return true;
    }

    return false
}
