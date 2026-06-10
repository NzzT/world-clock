const TIMEZONES = [
    { city: "New York", country: "United States", tz: "America/New_York", lat: 40.71, lon: -74.01 },
    { city: "Los Angeles", country: "United States", tz: "America/Los_Angeles", lat: 34.05, lon: -118.24 },
    { city: "Chicago", country: "United States", tz: "America/Chicago", lat: 41.88, lon: -87.63 },
    { city: "Denver", country: "United States", tz: "America/Denver", lat: 39.74, lon: -104.98 },
    { city: "Phoenix", country: "United States", tz: "America/Phoenix", lat: 33.45, lon: -112.07 },
    { city: "Anchorage", country: "United States", tz: "America/Anchorage", lat: 61.22, lon: -149.90 },
    { city: "Honolulu", country: "United States", tz: "Pacific/Honolulu", lat: 21.31, lon: -157.86 },
    { city: "Toronto", country: "Canada", tz: "America/Toronto", lat: 43.65, lon: -79.38 },
    { city: "Vancouver", country: "Canada", tz: "America/Vancouver", lat: 49.25, lon: -123.12 },
    { city: "Montreal", country: "Canada", tz: "America/Toronto", lat: 45.50, lon: -73.57 },
    { city: "Calgary", country: "Canada", tz: "America/Edmonton", lat: 51.05, lon: -114.07 },
    { city: "Edmonton", country: "Canada", tz: "America/Edmonton", lat: 53.55, lon: -113.47 },
    { city: "London", country: "United Kingdom", tz: "Europe/London", lat: 51.51, lon: -0.13 },
    { city: "Paris", country: "France", tz: "Europe/Paris", lat: 48.85, lon: 2.35 },
    { city: "Berlin", country: "Germany", tz: "Europe/Berlin", lat: 52.52, lon: 13.40 },
    { city: "Madrid", country: "Spain", tz: "Europe/Madrid", lat: 40.42, lon: -3.70 },
    { city: "Rome", country: "Italy", tz: "Europe/Rome", lat: 41.90, lon: 12.50 },
    { city: "Amsterdam", country: "Netherlands", tz: "Europe/Amsterdam", lat: 52.37, lon: 4.90 },
    { city: "Zurich", country: "Switzerland", tz: "Europe/Zurich", lat: 47.38, lon: 8.54 },
    { city: "Stockholm", country: "Sweden", tz: "Europe/Stockholm", lat: 59.33, lon: 18.07 },
    { city: "Oslo", country: "Norway", tz: "Europe/Oslo", lat: 59.91, lon: 10.75 },
    { city: "Helsinki", country: "Finland", tz: "Europe/Helsinki", lat: 60.17, lon: 24.94 },
    { city: "Warsaw", country: "Poland", tz: "Europe/Warsaw", lat: 52.23, lon: 21.01 },
    { city: "Prague", country: "Czech Republic", tz: "Europe/Prague", lat: 50.09, lon: 14.42 },
    { city: "Vienna", country: "Austria", tz: "Europe/Vienna", lat: 48.21, lon: 16.37 },
    { city: "Brussels", country: "Belgium", tz: "Europe/Brussels", lat: 50.85, lon: 4.35 },
    { city: "Lisbon", country: "Portugal", tz: "Europe/Lisbon", lat: 38.72, lon: -9.14 },
    { city: "Athens", country: "Greece", tz: "Europe/Athens", lat: 37.98, lon: 23.73 },
    { city: "Bucharest", country: "Romania", tz: "Europe/Bucharest", lat: 44.43, lon: 26.10 },
    { city: "Kiev", country: "Ukraine", tz: "Europe/Kiev", lat: 50.45, lon: 30.52 },
    { city: "Moscow", country: "Russia", tz: "Europe/Moscow", lat: 55.75, lon: 37.62 },
    { city: "Istanbul", country: "Turkey", tz: "Europe/Istanbul", lat: 41.01, lon: 28.96 },
    { city: "Dubai", country: "UAE", tz: "Asia/Dubai", lat: 25.20, lon: 55.27 },
    { city: "Riyadh", country: "Saudi Arabia", tz: "Asia/Riyadh", lat: 24.69, lon: 46.72 },
    { city: "Karachi", country: "Pakistan", tz: "Asia/Karachi", lat: 24.86, lon: 67.01 },
    { city: "Kolkata", country: "India", tz: "Asia/Kolkata", lat: 22.57, lon: 88.36 },
    { city: "Mumbai", country: "India", tz: "Asia/Kolkata", lat: 19.08, lon: 72.88 },
    { city: "Delhi", country: "India", tz: "Asia/Kolkata", lat: 28.66, lon: 77.23 },
    { city: "Dhaka", country: "Bangladesh", tz: "Asia/Dhaka", lat: 23.72, lon: 90.41 },
    { city: "Kathmandu", country: "Nepal", tz: "Asia/Kathmandu", lat: 27.71, lon: 85.31 },
    { city: "Colombo", country: "Sri Lanka", tz: "Asia/Colombo", lat: 6.93, lon: 79.85 },
    { city: "Bangkok", country: "Thailand", tz: "Asia/Bangkok", lat: 13.75, lon: 100.52 },
    { city: "Jakarta", country: "Indonesia", tz: "Asia/Jakarta", lat: -6.21, lon: 106.85 },
    { city: "Singapore", country: "Singapore", tz: "Asia/Singapore", lat: 1.35, lon: 103.82 },
    { city: "Kuala Lumpur", country: "Malaysia", tz: "Asia/Kuala_Lumpur", lat: 3.14, lon: 101.69 },
    { city: "Hong Kong", country: "Hong Kong", tz: "Asia/Hong_Kong", lat: 22.28, lon: 114.16 },
    { city: "Shanghai", country: "China", tz: "Asia/Shanghai", lat: 31.23, lon: 121.47 },
    { city: "Beijing", country: "China", tz: "Asia/Shanghai", lat: 39.91, lon: 116.39 },
    { city: "Seoul", country: "South Korea", tz: "Asia/Seoul", lat: 37.57, lon: 126.98 },
    { city: "Tokyo", country: "Japan", tz: "Asia/Tokyo", lat: 35.69, lon: 139.69 },
    { city: "Taipei", country: "Taiwan", tz: "Asia/Taipei", lat: 25.05, lon: 121.53 },
    { city: "Manila", country: "Philippines", tz: "Asia/Manila", lat: 14.60, lon: 120.98 },
    { city: "Yangon", country: "Myanmar", tz: "Asia/Rangoon", lat: 16.87, lon: 96.17 },
    { city: "Tashkent", country: "Uzbekistan", tz: "Asia/Tashkent", lat: 41.30, lon: 69.24 },
    { city: "Almaty", country: "Kazakhstan", tz: "Asia/Almaty", lat: 43.24, lon: 76.89 },
    { city: "Sydney", country: "Australia", tz: "Australia/Sydney", lat: -33.87, lon: 151.21 },
    { city: "Melbourne", country: "Australia", tz: "Australia/Melbourne", lat: -37.81, lon: 144.96 },
    { city: "Brisbane", country: "Australia", tz: "Australia/Brisbane", lat: -27.47, lon: 153.02 },
    { city: "Perth", country: "Australia", tz: "Australia/Perth", lat: -31.95, lon: 115.86 },
    { city: "Auckland", country: "New Zealand", tz: "Pacific/Auckland", lat: -36.87, lon: 174.77 },
    { city: "Cairo", country: "Egypt", tz: "Africa/Cairo", lat: 30.04, lon: 31.24 },
    { city: "Lagos", country: "Nigeria", tz: "Africa/Lagos", lat: 6.46, lon: 3.38 },
    { city: "Nairobi", country: "Kenya", tz: "Africa/Nairobi", lat: -1.29, lon: 36.82 },
    { city: "Johannesburg", country: "South Africa", tz: "Africa/Johannesburg", lat: -26.20, lon: 28.04 },
    { city: "Accra", country: "Ghana", tz: "Africa/Accra", lat: 5.56, lon: -0.20 },
    { city: "Casablanca", country: "Morocco", tz: "Africa/Casablanca", lat: 33.59, lon: -7.62 },
    { city: "Addis Ababa", country: "Ethiopia", tz: "Africa/Addis_Ababa", lat: 9.03, lon: 38.74 },
    { city: "São Paulo", country: "Brazil", tz: "America/Sao_Paulo", lat: -23.55, lon: -46.63 },
    { city: "Buenos Aires", country: "Argentina", tz: "America/Argentina/Buenos_Aires", lat: -34.61, lon: -58.38 },
    { city: "Bogotá", country: "Colombia", tz: "America/Bogota", lat: 4.71, lon: -74.07 },
    { city: "Lima", country: "Peru", tz: "America/Lima", lat: -12.05, lon: -77.04 },
    { city: "Santiago", country: "Chile", tz: "America/Santiago", lat: -33.46, lon: -70.65 },
    { city: "Mexico City", country: "Mexico", tz: "America/Mexico_City", lat: 19.43, lon: -99.13 },
    { city: "Caracas", country: "Venezuela", tz: "America/Caracas", lat: 10.48, lon: -66.88 },
    { city: "Reykjavik", country: "Iceland", tz: "Atlantic/Reykjavik", lat: 64.13, lon: -21.82 },
    { city: "Tehran", country: "Iran", tz: "Asia/Tehran", lat: 35.69, lon: 51.39 },
    { city: "Baghdad", country: "Iraq", tz: "Asia/Baghdad", lat: 33.34, lon: 44.40 },
    { city: "Kabul", country: "Afghanistan", tz: "Asia/Kabul", lat: 34.53, lon: 69.17 },
    { city: "Ulaanbaatar", country: "Mongolia", tz: "Asia/Ulaanbaatar", lat: 47.91, lon: 106.88 },
];

// WMO weather code → emoji + description
function wmoToWeather(code, isDay) {
    const day = isDay !== 0;
    const map = {
        0: { icon: day ? '☀️' : '🌙', desc: day ? 'Clear sky' : 'Clear night' },
        1: { icon: day ? '🌤️' : '🌙', desc: 'Mainly clear' },
        2: { icon: '⛅', desc: 'Partly cloudy' },
        3: { icon: '☁️', desc: 'Overcast' },
        45: { icon: '🌫️', desc: 'Foggy' },
        48: { icon: '🌫️', desc: 'Icy fog' },
        51: { icon: '🌦️', desc: 'Light drizzle' },
        53: { icon: '🌦️', desc: 'Drizzle' },
        55: { icon: '🌧️', desc: 'Heavy drizzle' },
        61: { icon: '🌧️', desc: 'Light rain' },
        63: { icon: '🌧️', desc: 'Rain' },
        65: { icon: '🌧️', desc: 'Heavy rain' },
        66: { icon: '🌨️', desc: 'Freezing rain' },
        67: { icon: '🌨️', desc: 'Heavy freezing rain' },
        71: { icon: '🌨️', desc: 'Light snow' },
        73: { icon: '❄️', desc: 'Snow' },
        75: { icon: '❄️', desc: 'Heavy snow' },
        77: { icon: '🌨️', desc: 'Snow grains' },
        80: { icon: '🌦️', desc: 'Light showers' },
        81: { icon: '🌧️', desc: 'Showers' },
        82: { icon: '⛈️', desc: 'Heavy showers' },
        85: { icon: '🌨️', desc: 'Snow showers' },
        86: { icon: '❄️', desc: 'Heavy snow showers' },
        95: { icon: '⛈️', desc: 'Thunderstorm' },
        96: { icon: '⛈️', desc: 'Thunderstorm + hail' },
        99: { icon: '⛈️', desc: 'Severe thunderstorm' },
    };
    return map[code] || { icon: '🌡️', desc: 'Unknown' };
}

// Weather cache (30 min)
const weatherCache = {};

async function fetchWeather(lat, lon) {
    const key = `${lat}_${lon}`;
    const now = Date.now();
    if (weatherCache[key] && now - weatherCache[key].ts < 30 * 60 * 1000) {
        return weatherCache[key].data;
    }
    try {
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weathercode,windspeed_10m,relativehumidity_2m,is_day&wind_speed_unit=kmh&timezone=auto`;
        const res = await fetch(url);
        const json = await res.json();
        const c = json.current;
        const data = {
            tempC: Math.round(c.temperature_2m),
            code: c.weathercode,
            isDay: c.is_day,
            wind: Math.round(c.windspeed_10m),
            humidity: c.relativehumidity_2m,
        };
        weatherCache[key] = { ts: now, data };
        return data;
    } catch (e) {
        return null;
    }
}

// State
let clocks = [];
let timeFormat = 12;
let tempUnit = 'C';
let nextId = 1;
const localTz = Intl.DateTimeFormat().resolvedOptions().timeZone;

function toF(c) { return Math.round(c * 9 / 5 + 32); }
function displayTemp(c) { return tempUnit === 'C' ? `${c}°C` : `${toF(c)}°F`; }

// Time helpers
function getTimeInTz(tz) {
    const now = new Date();
    return {
        dateStr: now.toLocaleDateString('en-US', { timeZone: tz, weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' }),
        h: parseInt(now.toLocaleString('en-US', { timeZone: tz, hour: '2-digit', hour12: false })),
        m: parseInt(now.toLocaleString('en-US', { timeZone: tz, minute: '2-digit' })),
        s: parseInt(now.toLocaleString('en-US', { timeZone: tz, second: '2-digit' })),
        date: new Date(now.toLocaleString('en-US', { timeZone: tz }))
    };
}

function formatTime(tz) {
    const t = getTimeInTz(tz);
    let h = t.h, s = String(t.s).padStart(2, '0'), m = String(t.m).padStart(2, '0');
    if (timeFormat === 12) {
        const ampm = h >= 12 ? 'PM' : 'AM';
        h = h % 12 || 12;
        return { main: `${h}:${m}`, sec: s, ampm };
    }
    return { main: `${String(h).padStart(2, '0')}:${m}`, sec: s, ampm: '' };
}

function getOffsetLabel(tz) {
    const now = new Date();
    const tzDate = new Date(now.toLocaleString('en-US', { timeZone: tz }));
    const localDate = new Date(now.toLocaleString('en-US', { timeZone: localTz }));
    const diffH = (tzDate - localDate) / 3600000;
    if (diffH === 0) return 'Same as local';
    const sign = diffH > 0 ? '+' : '';
    const absH = Math.abs(diffH), hrs = Math.floor(absH), mins = Math.round((absH - hrs) * 60);
    return mins > 0 ? `${sign}${diffH > 0 ? '' : '-'}${hrs}h ${mins}m vs local` : `${sign}${diffH}h vs local`;
}

function getDayDiff(tz) {
    const now = new Date();
    const ld = new Date(now.toLocaleString('en-US', { timeZone: localTz }));
    const td = new Date(now.toLocaleString('en-US', { timeZone: tz }));
    const diff = (new Date(td.getFullYear(), td.getMonth(), td.getDate()) - new Date(ld.getFullYear(), ld.getMonth(), ld.getDate())) / 86400000;
    if (diff > 0) return { label: '+1 tomorrow', cls: 'tomorrow' };
    if (diff < 0) return { label: '-1 yesterday', cls: 'yesterday' };
    return null;
}

function populateSelect() {
    const sel = document.getElementById('tz-select');
    const grouped = {};
    TIMEZONES.forEach(t => { if (!grouped[t.country]) grouped[t.country] = []; grouped[t.country].push(t); });
    Object.keys(grouped).sort().forEach(country => {
        const og = document.createElement('optgroup');
        og.label = country;
        grouped[country].forEach(t => {
            const opt = document.createElement('option');
            opt.value = `${t.tz}|${t.city}|${t.country}|${t.lat}|${t.lon}`;
            opt.textContent = t.city;
            og.appendChild(opt);
        });
        sel.appendChild(og);
    });
}

function updateLocalClock() {
    const t = formatTime(localTz);
    const d = getTimeInTz(localTz);
    document.getElementById('my-clock-time').textContent = t.main + ':' + t.sec + (t.ampm ? ' ' + t.ampm : '');
    document.getElementById('my-clock-date').textContent = d.dateStr;
    const nameEl = document.getElementById('my-clock-name');
    if (nameEl.textContent === 'Detecting location…') {
        const known = TIMEZONES.find(t => t.tz === localTz);
        nameEl.textContent = known ? known.city + ', ' + known.country : localTz.replace(/_/g, ' ');
        document.getElementById('my-clock-tz').textContent = localTz;
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
        if (c.weather) {
            const wt = card.querySelector('.weather-temp');
            if (wt) wt.textContent = displayTemp(c.weather.tempC);
        }
    });
}

function addClock() {
    const sel = document.getElementById('tz-select');
    const val = sel.value;
    if (!val) return;
    const [tz, city, country, lat, lon] = val.split('|');
    if (clocks.find(c => c.tz === tz && c.city === city)) return;

    const id = nextId++;
    const dayDiff = getDayDiff(tz);
    const clock = { id, city, country, tz, lat: parseFloat(lat), lon: parseFloat(lon), weather: null };
    clocks.push(clock);
    document.getElementById('empty-state')?.remove();

    const grid = document.getElementById('clocks-grid');
    const card = document.createElement('div');
    card.className = 'clock-card';
    card.id = 'card-' + id;

    const t = formatTime(tz);
    const d = getTimeInTz(tz);
    const offset = getOffsetLabel(tz);

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
    <div class="weather-strip" id="weather-${id}">
      <span class="weather-loading">Loading weather…</span>
    </div>
  `;
    grid.appendChild(card);

    fetchWeather(clock.lat, clock.lon).then(w => {
        clock.weather = w;
        const strip = document.getElementById('weather-' + id);
        if (!strip || !w) { if (strip) strip.innerHTML = '<span class="weather-loading">Weather unavailable</span>'; return; }
        const wx = wmoToWeather(w.code, w.isDay);
        strip.innerHTML = `
      <div class="weather-icon" role="img" aria-label="${wx.desc}">${wx.icon}</div>
      <div class="weather-info">
        <span class="weather-temp">${displayTemp(w.tempC)}</span>
        <span class="weather-desc">${wx.desc}</span>
      </div>
      <div class="weather-info" style="margin-left:auto;text-align:right;">
        <span class="weather-extra">💨 ${w.wind} km/h</span>
        <span class="weather-extra">💧 ${w.humidity}%</span>
      </div>
    `;
    });
}

function removeClock(id) {
    clocks = clocks.filter(c => c.id !== id);
    const card = document.getElementById('card-' + id);
    if (card) {
        card.style.transition = 'opacity 200ms, transform 200ms';
        card.style.opacity = '0'; card.style.transform = 'scale(0.95)';
        setTimeout(() => {
            card.remove();
            if (clocks.length === 0) {
                document.getElementById('clocks-grid').innerHTML = `<div class="empty-state" id="empty-state">
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

function setUnit(u) {
    tempUnit = u;
    document.getElementById('unit-c').classList.toggle('active', u === 'C');
    document.getElementById('unit-f').classList.toggle('active', u === 'F');
    document.getElementById('unit-c').setAttribute('aria-pressed', u === 'C');
    document.getElementById('unit-f').setAttribute('aria-pressed', u === 'F');
    clocks.forEach(c => {
        if (!c.weather) return;
        const card = document.getElementById('card-' + c.id);
        if (!card) return;
        const wt = card.querySelector('.weather-temp');
        if (wt) wt.textContent = displayTemp(c.weather.tempC);
    });
}

(function () {
    const t = document.querySelector('[data-theme-toggle]'), r = document.documentElement;
    let d = r.getAttribute('data-theme') || (matchMedia('(prefers-color-scheme:dark)').matches ? 'dark' : 'light');
    r.setAttribute('data-theme', d);
    const moon = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
    const sun = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>';
    if (t) {
        t.innerHTML = d === 'dark' ? moon : sun;
        t.addEventListener('click', () => { d = d === 'dark' ? 'light' : 'dark'; r.setAttribute('data-theme', d); t.innerHTML = d === 'dark' ? moon : sun; t.setAttribute('aria-label', 'Switch to ' + (d === 'dark' ? 'light' : 'dark') + ' mode'); });
    }
})();

populateSelect();
updateLocalClock();

const defaults = ['America/New_York|New York|United States|40.71|-74.01', 'Europe/London|London|United Kingdom|51.51|-0.13', 'Asia/Tokyo|Tokyo|Japan|35.69|139.69', 'Australia/Sydney|Sydney|Australia|-33.87|151.21'];
defaults.forEach(v => { document.getElementById('tz-select').value = v; addClock(); });

setInterval(renderAllClocks, 1000);

setInterval(() => {
    clocks.forEach(c => {
        fetchWeather(c.lat, c.lon).then(w => {
            if (!w) return;
            c.weather = w;
            const strip = document.getElementById('weather-' + c.id);
            if (!strip) return;
            const wx = wmoToWeather(w.code, w.isDay);
            strip.innerHTML = `
        <div class="weather-icon" role="img" aria-label="${wx.desc}">${wx.icon}</div>
        <div class="weather-info">
          <span class="weather-temp">${displayTemp(w.tempC)}</span>
          <span class="weather-desc">${wx.desc}</span>
        </div>
        <div class="weather-info" style="margin-left:auto;text-align:right;">
          <span class="weather-extra">💨 ${w.wind} km/h</span>
          <span class="weather-extra">💧 ${w.humidity}%</span>
        </div>
      `;
        });
    });
}, 30 * 60 * 1000);