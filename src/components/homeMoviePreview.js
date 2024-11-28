import playButton from '../assets/icons/buttons/Button_Play.svg'
import mInfoButton from '../assets/icons/buttons/Button_More-Info.svg'

import useAllMovies from '../API_DATA';
import TitlePreview from './TitlePreview';

const HomeMoviePreview = () => {

    const { movies } = useAllMovies();

    return (
        <div className='inline-flex flex-col items-start gap-5'>
            <TitlePreview movies={movies} />
            <div className='flex items-center'>
                <img src={playButton} alt='play-button'/>
                <img src={mInfoButton} alt='more-info-button'/>
            </div>
        </div>

    )
}

export default HomeMoviePreview;