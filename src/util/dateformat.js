const arrayMonthIndex = 
[
    "Jan",
    "Feb",
    "Mar",
    "April",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
];

export function getMonthAbbrevByIndex(idx) {
    if (idx < 0 || idx > 11) return null;
    return arrayMonthIndex[idx];
}
