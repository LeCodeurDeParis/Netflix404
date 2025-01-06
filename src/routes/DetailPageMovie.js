import useMovieById from '../MOVIE_ID_DATA';
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original/";


export default function DetailPageMovie() {
    

    const pathname = window.location.pathname;
    const id = pathname.split('/').pop();

    console.log('URL Search Params:', pathname); // Debug log
    console.log('Extracted ID:', id); // Debug log
    const movie = useMovieById(id);
    console.log('Movie:', movie); // Debug log
    return (
        <div>
            <h1>{movie.title}</h1>
            <p>{movie.overview}</p>
            <img src={`${IMAGE_BASE_URL}${movie.poster_path}`} alt={movie.title} />
        </div>
    );
}

