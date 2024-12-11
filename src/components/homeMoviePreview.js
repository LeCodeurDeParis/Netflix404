import usePopularMovies from '../MOVIE_DATA_POPULAR';
import BackdropPreview from './backdropPreview';


const HomeMoviePreview = () => {

    const { movies } = usePopularMovies();

    return (
        <div>
            <BackdropPreview movies={movies} />
        </div>
    )
}

export default HomeMoviePreview;