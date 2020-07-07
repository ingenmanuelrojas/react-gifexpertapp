export const getGifs = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=2gydL3BBblnsNLBmhEHm4fo3GFgCQiqj`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    //Crear un nuevo objeto con los datos que necesitamos del api
    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });

    return gifs;
}