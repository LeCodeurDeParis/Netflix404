import ContentBanner from '../components/contentBanner';
import ContentInfo from '../components/contentInfo';
import useMovieById from '../MOVIE_ID_DATA';
import useCastMovie from '../CAST_MOVIE_DATA';
import Cast from '../components/cast';



export default function DetailPageMovie() {

    const pathname = window.location.pathname;
    const id = pathname.split('/').pop();
    const movie = useMovieById(id);
    const cast = useCastMovie(id);
    return (
        <div className='bg-[#141414] h-[100vh]'>
            <ContentBanner movie={movie} />
            <ContentInfo movie={movie} cast={cast} />
            <Cast movie={movie} cast={cast} />
        </div>
    );
}

