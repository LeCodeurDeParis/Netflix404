
import useAllMovies from '../API_DATA';
import MovieBlock from "./movieBlock";

function Main(){
    const { movies } = useAllMovies();
    return (
        <MovieBlock Block_Title={"Matched For You"} Block_Items={movies}/>
    )
}

export default Main;