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

function updateLocalClock() {
    const t = formatTime(localTz);
    const d = getTimeInTz(localTz);
    const timeEl = document.getElementById('my-clock-time');
    timeEl.textContent = t.main + ':' + t.sec + (t.ampm ? ' ' + t.ampm : '');
    document.getElementById('my-clock-date').textContent = d.dateStr;
    const tzName = document.getElementById('my-clock-name');
    const tzId = document.getElementById('my-clock-tz');
    if (tzName.textContent === 'Detecting location…') {
        const known = TIMEZONES.find(t => t.tz === localTz);
        tzName.textContent = known ? known.city + ', ' + known.country : localTz.replace(/_/g, ' ');
        tzId.textContent = localTz;
    }
}

function renderAllClocks() {
    updateLocalClock();
    clocks.forEach(c => {
        const card = document.getElementById('card-' + c.id);
        if (!card) return;
        const t = formatTime(c.tz);
        card.querySelector('.clock-display').innerHTML =
            `${t.main}<span class="clock-seconds">:${t.sec}</span>${t.ampm ? '<span class="clock-ampm">' + t.ampm + '</span>' : ''}`;
        card.querySelector('.clock-date').textContent = getTimeInTz(c.tz).dateStr;
    });
}

function addClock() {
    const sel = document.getElementById('tz-select');
    const val = sel.value;
    if (!val) return;
    const [tz, city, country] = val.split('|');
    if (clocks.find(c => c.tz === tz && c.city === city)) return;

    const id = nextId++;
    clocks.push({ id, city, country, tz });
    document.getElementById('empty-state')?.remove();

    const grid = document.getElementById('clocks-grid');
    const card = document.createElement('div');
    card.className = 'clock-card';
    card.id = 'card-' + id;

    const t = formatTime(tz);
    const d = getTimeInTz(tz);
    const offset = getOffsetLabel(tz);
    const dayDiff = getDayDiff(tz);

    card.innerHTML = `
    <div class="clock-card-header">
      <div>
        <div class="clock-card-country">${country}</div>
        <div class="clock-card-city">${city}</div>
        <div class="clock-card-tz">${tz}</div>
      </div>
      <button class="remove-btn" onclick="removeClock(${id})" aria-label="Remove ${city} clock">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>
    </div>
    <div class="clock-display">
      ${t.main}<span class="clock-seconds">:${t.sec}</span>${t.ampm ? '<span class="clock-ampm">' + t.ampm + '</span>' : ''}
    </div>
    <div class="clock-date">
      ${d.dateStr}${dayDiff ? `<span class="day-diff ${dayDiff.cls}">${dayDiff.label}</span>` : ''}
    </div>
    <div class="clock-offset-bar">
      <span>vs your time</span>
      <span class="offset-badge">${offset}</span>
    </div>
  `;
    grid.appendChild(card);
}

function removeClock(id) {
    clocks = clocks.filter(c => c.id !== id);
    const card = document.getElementById('card-' + id);
    if (card) {
        card.style.transition = 'opacity 200ms, transform 200ms';
        card.style.opacity = '0';
        card.style.transform = 'scale(0.95)';
        setTimeout(() => {
            card.remove();
            if (clocks.length === 0) {
                const grid = document.getElementById('clocks-grid');
                grid.innerHTML = `<div class="empty-state" id="empty-state">
          <svg class="empty-state-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
            <circle cx="12" cy="12" r="9"/><ellipse cx="12" cy="12" rx="4" ry="9"/>
            <line x1="3" y1="12" x2="21" y2="12"/><line x1="12" y1="3" x2="12" y2="12"/>
            <line x1="12" y1="12" x2="16" y2="12"/>
          </svg>
          <h3>No world clocks yet</h3>
          <p>Pick a city from the dropdown above and click Add Clock to see its local time.</p>
        </div>`;
            }
        }, 200);
    }
}

function setFormat(fmt) {
    timeFormat = fmt;
    document.getElementById('fmt-12').classList.toggle('active', fmt === 12);
    document.getElementById('fmt-24').classList.toggle('active', fmt === 24);
    document.getElementById('fmt-12').setAttribute('aria-pressed', fmt === 12);
    document.getElementById('fmt-24').setAttribute('aria-pressed', fmt === 24);
    renderAllClocks();
}

(function () {
    const t = document.querySelector('[data-theme-toggle]'), r = document.documentElement;
    let d = r.getAttribute('data-theme') || (matchMedia('(prefers-color-scheme:dark)').matches ? 'dark' : 'light');
    r.setAttribute('data-theme', d);
    const moonSvg = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
    const sunSvg = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>';
    if (t) {
        t.innerHTML = d === 'dark' ? moonSvg : sunSvg;
        t.addEventListener('click', () => {
            d = d === 'dark' ? 'light' : 'dark';
            r.setAttribute('data-theme', d);
            t.innerHTML = d === 'dark' ? moonSvg : sunSvg;
            t.setAttribute('aria-label', 'Switch to ' + (d === 'dark' ? 'light' : 'dark') + ' mode');
        });
    }
})();

populateSelect();
updateLocalClock();

const defaults = ['America/New_York|New York|United States', 'Europe/London|London|United Kingdom', 'Asia/Tokyo|Tokyo|Japan', 'Australia/Sydney|Sydney|Australia'];
defaults.forEach(v => {
    const sel = document.getElementById('tz-select');
    sel.value = v;
    addClock();
});

setInterval(renderAllClocks, 1000);