import usePopularMovies from '../MOVIE_DATA_POPULAR';
import usePopularSeries from '../SERIES_DATA_POPULAR';
import useTopRatedMovies from '../TOP_RATED_DATA';
import Animation from './animation';
import BlockContent from "./blockContent";
import ContinueWatching from './continueWatching';
import TopCountry from './topCountry';

function Main(){
    const { movies } = usePopularMovies();
    const { series } = usePopularSeries();
    const { topmovies } = useTopRatedMovies();

    return (
        <div className="flex flex-col items-start -mt-[35vh]">
            <BlockContent Block_Title={"Matched For You"} Block_Items={movies} firstBlock={true}/>
            <BlockContent Block_Title={"Popular Series"} Block_Items={series} firstBlock={false}/>
            <TopCountry Block_Items={topmovies}/>
            <BlockContent Block_Title={"We Think You'll Love These"} Block_Items={series} firstBlock={false}/>
            <Animation Block_Title={"Animation"} Block_Movies={movies} Block_Series={series}/>
            <BlockContent Block_Title={"Inspiring Movies"} Block_Items={movies} firstBlock={false}/>
            <ContinueWatching Block_Title={"Continue Watching"} Block_Items={movies}/>
        </div>
    )
}

export default Main;