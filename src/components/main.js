import usePopularMovies from '../MOVIE_DATA_POPULAR';
import usePopularSeries from '../SERIES_DATA_POPULAR';
import useTopRatedMovies from '../TOP_RATED_DATA';
import useTrendingMovies from '../TRENDING_MOVIE_DATA';
import useDiscoverMovies from '../DISCOVER_MOVIE_DATA';
import Animation from './animation';
import BlockContent from "./blockContent";
import ContinueWatching from './continueWatching';
import TopCountry from './topCountry';

function Main(){

    const { movies } = usePopularMovies('movie/popular', 2);
    const { series } = usePopularSeries();
    const { topmovies } = useTopRatedMovies();
    const { trendingmovies } = useTrendingMovies();
    const { discovermovies } = useDiscoverMovies();

    return (
        <main>
            <div className="flex flex-col items-start -mt-[35vh]">
                <BlockContent Block_Title={"Matched For You"} Block_Items={movies} firstBlock={true}/>
                <BlockContent Block_Title={"Popular Series"} Block_Items={series} firstBlock={false}/>
                <TopCountry Block_Title={"Top 10 movies in the U.S today"} Block_Items={trendingmovies}/>
                <BlockContent Block_Title={"We Think You'll Love These"} Block_Items={series} firstBlock={false}/>
                <Animation Block_Title={"Animation"} Block_Movies={movies} Block_Series={series}/>
                <BlockContent Block_Title={"Inspiring Movies"} Block_Items={movies} firstBlock={false}/>
                <ContinueWatching Block_Title={"Continue Watching"} Block_Items={movies}/>
                <BlockContent Block_Title={"Watch In One Weekend"} Block_Items={movies} firstBlock={false}/>
                <BlockContent Block_Title={"Critically Acclaimed Movies"} Block_Items={topmovies} firstBlock={false}/>
                <BlockContent Block_Title={"Today's Fresh Picks for You"} Block_Items={discovermovies} firstBlock={false}/>
            </div>
        </main>
    )
}

export default Main;