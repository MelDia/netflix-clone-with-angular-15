export class MovieClass {
    id: number;
    adult: boolean;
    backdrop_path: string;
    title: string;
    original_language: string;
    original_title: string;
    overview: string;
    poster_path: string;
    media_type: string;
    genre_ids: string[];
    popularity: number;
    release_date: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
    name: string;

    constructor(data: any) {
        this.id = data.id;
        this.adult = data.adult;
        this.backdrop_path = data.backdrop_path;
        this.title = data.title;
        this.original_language = data.original_language;
        this.original_title = data.original_title;
        this.overview = data.overview;
        this.poster_path = data.poster_path;
        this.media_type = data.media_type;
        this.genre_ids = data.genre_ids;
        this.popularity = data.popularity;
        this.release_date = data.release_date;
        this.video = data.video;
        this.vote_average = data.vote_average;
        this.vote_count = data.vote_count;
        this.name = data.name;
    }



}
