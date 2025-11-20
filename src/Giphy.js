export class Giphy {
    async get(value = 'weather') {
        // Normalize blank input
        if (value.trim() === '') value = 'weather';

        const cacheKey = `giphy-${value}`;

        // 1. Check cache
        const cached = localStorage.getItem(cacheKey);
        if (cached) {
            return JSON.parse(cached);
        }

        // 2. Fetch from API
        const res = await fetch(
            `https://api.giphy.com/v1/gifs/translate?api_key=NbMEdX5Y7aTd0MwSUMN3oXxzl28oLvFb&s=${value}`
        );

        const data = await res.json();

        // 3. Save to cache for dev
        localStorage.setItem(cacheKey, JSON.stringify(data));

        return data;
    }
}
