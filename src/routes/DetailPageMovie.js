import useMovieById from '../MOVIE_ID_DATA';
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original/";


export default function DetailPageMovie() {

    const pathname = window.location.pathname;
    const id = pathname.split('/').pop();
    const movie = useMovieById(id);
    return (
        <>
            <div className="relative w-full ">
                <img
                src={`${IMAGE_BASE_URL}${ movie.backdrop_path }`}
                alt={movie.title}
                className="w-full h-full object-cover"
                />
            </div>
            <div className='flex flex-col items-center justify-center w-96 h-[45%] absolute z-10 top-0 bottom-[20vh] left-10 my-auto gap-5 bg-gradient-to-r from-black/60 to-black/40 rounded-lg p-6'>
            <p className="text-white text-3xl font-bold">{movie.title}</p>
            </div>
        </>
    );
}

