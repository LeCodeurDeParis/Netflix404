import usePopularMovies from '../MOVIE_DATA_POPULAR';
import usePopularSeries from '../SERIES_DATA_POPULAR';
import BlockContent from "./blockContent";
import TopCountry from './topCountry';

function Main(){
    const { movies } = usePopularMovies();
    const { series } = usePopularSeries();
    return (
        <div className="flex flex-col items-start -mt-[35vh]">
            <BlockContent Block_Title={"Matched For You"} Block_Items={movies} firstBlock={true}/>
            <BlockContent Block_Title={"Popular Series"} Block_Items={series} firstBlock={false}/>
            <TopCountry Block_Items={movies}/>
            <BlockContent Block_Title={"We Think You'll Love These"} Block_Items={series} firstBlock={false}/>
            <BlockContent Block_Title={"Animation"} Block_Items={series} firstBlock={false}/>
            <BlockContent Block_Title={"Inspiring Movies"} Block_Items={movies} firstBlock={false}/>
        </div>
    )
}

export default Main;