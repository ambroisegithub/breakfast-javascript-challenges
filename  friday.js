function fridayTheThirteenths(start, end) {
    if (!end) {
        end = start;
    }

    const result = [];

    for (let year = start; year <= end; year++) {
        for (let month = 1; month <= 12; month++) {
            const date = new Date(year, month - 1, 13);
            if (date.getDay() === 5) { // Check if it's a Friday (0 = Sunday, 1 = Monday, ..., 5 = Friday, 6 = Saturday)
                const monthStr = month < 10 ? `${month}` : `${month}`;
                result.push(`${monthStr}/13/${year}`);
            }
        }
    }

    return result.join(' ');
}