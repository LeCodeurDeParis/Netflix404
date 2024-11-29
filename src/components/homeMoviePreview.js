

import useAllMovies from '../API_DATA';
import TitlePreview from './TitlePreview';
import BackdropPreview from './backdropPreview';

const HomeMoviePreview = () => {

    const { movies } = useAllMovies();

    return (
        <div>
            <BackdropPreview movies={movies} />
            <TitlePreview movies={movies} />
        </div>

    )
}

export default HomeMoviePreview;