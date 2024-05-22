export function getWorldDate(timeZone: string): string {
    const date = new Date();
    const options: Intl.DateTimeFormatOptions = {
        timeZone: timeZone,
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    };
    return date.toLocaleDateString('pt-BR', options);
    
}

export function updateWorldDate(timeZone: string, callback: (date: string) => void) {
    const interval = setInterval(() => {
        const currentDate = getWorldDate(timeZone);
        callback(currentDate);
    }, 1000);

    return () => clearInterval(interval);
}

export function getWorldTime(country: string): string {
    const date: Date = new Date();

    const options: Intl.DateTimeFormatOptions = {
        timeZone: country,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    };
    return date.toLocaleTimeString('pt-BR', options);
}

export function updateWorldTime(timeZone: string, callback: (time: string) => void) {
    const interval = setInterval(() => {
        const currentDate = getWorldTime(timeZone);
        callback(currentDate);
    }, 1000);

    return () => clearInterval(interval);
}