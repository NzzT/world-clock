const TIMEZONES = [
    { city: "New York", country: "United States", tz: "America/New_York" },
    { city: "Los Angeles", country: "United States", tz: "America/Los_Angeles" },
    { city: "Chicago", country: "United States", tz: "America/Chicago" },
    { city: "Denver", country: "United States", tz: "America/Denver" },
    { city: "Phoenix", country: "United States", tz: "America/Phoenix" },
    { city: "Anchorage", country: "United States", tz: "America/Anchorage" },
    { city: "Honolulu", country: "United States", tz: "Pacific/Honolulu" },
    { city: "Toronto", country: "Canada", tz: "America/Toronto" },
    { city: "Vancouver", country: "Canada", tz: "America/Vancouver" },
    { city: "Montreal", country: "Canada", tz: "America/Toronto" },
    { city: "Calgary", country: "Canada", tz: "America/Edmonton" },
    { city: "Edmonton", country: "Canada", tz: "America/Edmonton" },
    { city: "London", country: "United Kingdom", tz: "Europe/London" },
    { city: "Paris", country: "France", tz: "Europe/Paris" },
    { city: "Berlin", country: "Germany", tz: "Europe/Berlin" },
    { city: "Madrid", country: "Spain", tz: "Europe/Madrid" },
    { city: "Rome", country: "Italy", tz: "Europe/Rome" },
    { city: "Amsterdam", country: "Netherlands", tz: "Europe/Amsterdam" },
    { city: "Zurich", country: "Switzerland", tz: "Europe/Zurich" },
    { city: "Stockholm", country: "Sweden", tz: "Europe/Stockholm" },
    { city: "Oslo", country: "Norway", tz: "Europe/Oslo" },
    { city: "Helsinki", country: "Finland", tz: "Europe/Helsinki" },
    { city: "Warsaw", country: "Poland", tz: "Europe/Warsaw" },
    { city: "Prague", country: "Czech Republic", tz: "Europe/Prague" },
    { city: "Vienna", country: "Austria", tz: "Europe/Vienna" },
    { city: "Brussels", country: "Belgium", tz: "Europe/Brussels" },
    { city: "Lisbon", country: "Portugal", tz: "Europe/Lisbon" },
    { city: "Athens", country: "Greece", tz: "Europe/Athens" },
    { city: "Bucharest", country: "Romania", tz: "Europe/Bucharest" },
    { city: "Kiev", country: "Ukraine", tz: "Europe/Kiev" },
    { city: "Moscow", country: "Russia", tz: "Europe/Moscow" },
    { city: "Istanbul", country: "Turkey", tz: "Europe/Istanbul" },
    { city: "Dubai", country: "UAE", tz: "Asia/Dubai" },
    { city: "Riyadh", country: "Saudi Arabia", tz: "Asia/Riyadh" },
    { city: "Karachi", country: "Pakistan", tz: "Asia/Karachi" },
    { city: "Kolkata", country: "India", tz: "Asia/Kolkata" },
    { city: "Mumbai", country: "India", tz: "Asia/Kolkata" },
    { city: "Delhi", country: "India", tz: "Asia/Kolkata" },
    { city: "Dhaka", country: "Bangladesh", tz: "Asia/Dhaka" },
    { city: "Kathmandu", country: "Nepal", tz: "Asia/Kathmandu" },
    { city: "Colombo", country: "Sri Lanka", tz: "Asia/Colombo" },
    { city: "Bangkok", country: "Thailand", tz: "Asia/Bangkok" },
    { city: "Jakarta", country: "Indonesia", tz: "Asia/Jakarta" },
    { city: "Singapore", country: "Singapore", tz: "Asia/Singapore" },
    { city: "Kuala Lumpur", country: "Malaysia", tz: "Asia/Kuala_Lumpur" },
    { city: "Hong Kong", country: "Hong Kong", tz: "Asia/Hong_Kong" },
    { city: "Shanghai", country: "China", tz: "Asia/Shanghai" },
    { city: "Beijing", country: "China", tz: "Asia/Shanghai" },
    { city: "Seoul", country: "South Korea", tz: "Asia/Seoul" },
    { city: "Tokyo", country: "Japan", tz: "Asia/Tokyo" },
    { city: "Taipei", country: "Taiwan", tz: "Asia/Taipei" },
    { city: "Manila", country: "Philippines", tz: "Asia/Manila" },
    { city: "Yangon", country: "Myanmar", tz: "Asia/Rangoon" },
    { city: "Tashkent", country: "Uzbekistan", tz: "Asia/Tashkent" },
    { city: "Almaty", country: "Kazakhstan", tz: "Asia/Almaty" },
    { city: "Yekaterinburg", country: "Russia", tz: "Asia/Yekaterinburg" },
    { city: "Novosibirsk", country: "Russia", tz: "Asia/Novosibirsk" },
    { city: "Vladivostok", country: "Russia", tz: "Asia/Vladivostok" },
    { city: "Sydney", country: "Australia", tz: "Australia/Sydney" },
    { city: "Melbourne", country: "Australia", tz: "Australia/Melbourne" },
    { city: "Brisbane", country: "Australia", tz: "Australia/Brisbane" },
    { city: "Perth", country: "Australia", tz: "Australia/Perth" },
    { city: "Auckland", country: "New Zealand", tz: "Pacific/Auckland" },
    { city: "Fiji", country: "Fiji", tz: "Pacific/Fiji" },
    { city: "Cairo", country: "Egypt", tz: "Africa/Cairo" },
    { city: "Lagos", country: "Nigeria", tz: "Africa/Lagos" },
    { city: "Nairobi", country: "Kenya", tz: "Africa/Nairobi" },
    { city: "Johannesburg", country: "South Africa", tz: "Africa/Johannesburg" },
    { city: "Accra", country: "Ghana", tz: "Africa/Accra" },
    { city: "Casablanca", country: "Morocco", tz: "Africa/Casablanca" },
    { city: "Addis Ababa", country: "Ethiopia", tz: "Africa/Addis_Ababa" },
    { city: "São Paulo", country: "Brazil", tz: "America/Sao_Paulo" },
    { city: "Buenos Aires", country: "Argentina", tz: "America/Argentina/Buenos_Aires" },
    { city: "Bogotá", country: "Colombia", tz: "America/Bogota" },
    { city: "Lima", country: "Peru", tz: "America/Lima" },
    { city: "Santiago", country: "Chile", tz: "America/Santiago" },
    { city: "Mexico City", country: "Mexico", tz: "America/Mexico_City" },
    { city: "Caracas", country: "Venezuela", tz: "America/Caracas" },
    { city: "Reykjavik", country: "Iceland", tz: "Atlantic/Reykjavik" },
    { city: "Algiers", country: "Algeria", tz: "Africa/Algiers" },
    { city: "Tehran", country: "Iran", tz: "Asia/Tehran" },
    { city: "Baghdad", country: "Iraq", tz: "Asia/Baghdad" },
    { city: "Kabul", country: "Afghanistan", tz: "Asia/Kabul" },
    { city: "Islamabad", country: "Pakistan", tz: "Asia/Karachi" },
    { city: "Pyongyang", country: "North Korea", tz: "Asia/Pyongyang" },
    { city: "Ulaanbaatar", country: "Mongolia", tz: "Asia/Ulaanbaatar" },
];

let clocks = [];

let timeFormat = 12;

let nextId = 1;

const localTz = Intl.DateTimeFormat().resolvedOptions().timeZone;

function getTimeInTz(tz) {
    const now = new Date();
    const opts = { timeZone: tz, hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' };
    const dateOpts = { timeZone: tz, weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' };
    return {
        raw: now,
        timeStr: now.toLocaleTimeString('en-US', opts),
        dateStr: now.toLocaleDateString('en-US', dateOpts),
        h: parseInt(now.toLocaleString('en-US', { timeZone: tz, hour: '2-digit', hour12: false })),
        m: parseInt(now.toLocaleString('en-US', { timeZone: tz, minute: '2-digit' })),
        s: parseInt(now.toLocaleString('en-US', { timeZone: tz, second: '2-digit' })),
        date: new Date(now.toLocaleString('en-US', { timeZone: tz }))
    };
}

function getOffsetLabel(tz) {
    const now = new Date();
    const tzDate = new Date(now.toLocaleString('en-Us', { timeZone: tz }));
    const localDate = new Date(now.toLocaleString('en-US', { timeZone: localTz }));
    const diffMs = tzDate - localDate;
    const diffH = diffMs / 3600000;
    if (diffH === 0) return 'Same as Local';
    const sign = diffH > 0 ? '+' : '';
    const absH = Math.abs(diffH);
    const hrs = Math.floor(absH);
    const mins = Math.round((absH - hrs) * 60);
    return mins > 0 ? `${sign}${diffH > 0 ? '' : '-'
        }${hrs}h ${mins}m vs local` : `${sign}${diffH}h vs local`;
}

function getDayDiff(tz) {
    const now = new Date();
    const localDate = new Date(now.toLocaleString('en-US', { timeZone: localTz }));
    const tzDate = new Date(now.toLocaleDateString('en-US', { timeZone: tz }));
    const localDay = new Date(localDate.getFullYear(), localDate.getMonth(), localDate.getDate()).getTime();
    const tzDay = new Date(tzDate.getFullYear(), tzDate.getMonth(), tzDate.getDate()).getTime();
    const diff = (tzDay - localDay) / 86400000;
    if (diff > 0) return { label: '+1 tomorrow', cls: 'tomorrow' };
    if (diff < 0) return { label: '-1 yesterday', cls: 'yesterday' };
    return null;
}

function populateSelect() {
    const sel = document.getElementById('tz-select');
    const grouped = {};
    TIMEZONES.forEach(t => {
        if (!grouped[t.country]) grouped[t.country] = [];
        grouped[t.country].push(t);
    });
    const countries = Object.keys(grouped).sort();
    countries.forEach(country => {
        const og = document.createElement('optgroup');
        og.label = country;
        grouped[country].forEach(t => {
            const opt = document.createElement('option');
            opt.value = t.tz + '|' + t.city + '|' + t.country;
            opt.textContent = t.city;
            og.appendChild(opt);
        });
        sel.appendChild(og);
    });
}