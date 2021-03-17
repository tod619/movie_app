const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=4ed06ff5dbd4de0485c0eb2df0fcfb35&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARC_URL = 'https://api.themoviedb.org/3/search/movie?api_key=4ed06ff5dbd4de0485c0eb2df0fcfb35&query="'

async function getMovies(url) {
    const res = await fetch(url)

    const data = await res.json()

    console.log(data.results)
}

getMovies(API_URL)