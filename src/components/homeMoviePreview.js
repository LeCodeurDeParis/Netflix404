import useAllMovies from '../API_DATA';
import BackdropPreview from './backdropPreview';

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original"

const HomeMoviePreview = () => {

    const { movies } = useAllMovies();

    return (
        <div>
            <BackdropPreview movies={movies} />
        </div>
    )
}

export default HomeMoviePreview;