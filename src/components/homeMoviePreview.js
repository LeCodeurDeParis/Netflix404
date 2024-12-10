import useAllMovies from '../API_DATA';
import BackdropPreview from './backdropPreview';


const HomeMoviePreview = () => {

    const { movies } = useAllMovies();

    return (
        <div>
            <BackdropPreview movies={movies} />
        </div>
    )
}

export default HomeMoviePreview;