import { reactive } from 'vue'

export const store = reactive ({
    ApiKeys: '04d067d5316796289cdcde528f149e1d',
    ApiMovie: 'https://api.themoviedb.org/3/search/movie?api_key=04d067d5316796289cdcde528f149e1d&language=en-US&query=',
    ApiSerie: 'https://api.themoviedb.org/3/search/tv?api_key=04d067d5316796289cdcde528f149e1d&language=it_IT&query=',
    ApiTopFilm: 'https://api.themoviedb.org/3/movie/top_rated?api_key=04d067d5316796289cdcde528f149e1d&language=it_IT&query=',
    ApiFlag: 'https://countryflagsapi.com/png/ae',
    MovieList: [],
    SerieList: [],
    TopFilm: [],
});