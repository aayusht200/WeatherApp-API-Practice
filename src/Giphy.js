export class Giphy {
    async get(value) {
        let giphyData = {};
        if (value === '') {
            value = 'weather';
        }
        giphyData = await fetch(
            `https://api.giphy.com/v1/gifs/translate?api_key=NbMEdX5Y7aTd0MwSUMN3oXxzl28oLvFb&s=${value}`
        );
        return await giphyData.json();
    }
}
