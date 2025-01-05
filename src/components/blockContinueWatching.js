import smallLogo from "../assets/icons/netflix_icons/SizeSmall_TypeLetter.svg";
import videoProgression from "../assets/icons/VideoProgressionBar.svg";

function BlockContinueWatching({ data, ids }) {

    const filteredMovies = data?.filter(movie => ids.includes(Number(movie.id))) || [];

    return (
        <div className="flex gap-1.5 max-w-full overflow-x-scroll overflow-y-hidden">
            {filteredMovies.length > 0 ? (
                filteredMovies.map((movie) => (
                    <div key={movie.id} className="flex flex-col gap-1.5 items-center">
                        <div className="w-52 relative flex-shrink-0">
                            <img
                                src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                                alt={movie.title || movie.name}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute top-2 left-2">
                                <img
                                    src={smallLogo}
                                    alt="logo-netflix"
                                    className="w-auto h-auto"
                                />
                            </div>
                            <div className="absolute bottom-0 left-0 bg-[#141414]/60 w-full">
                                <p className="text-white text-xs">{movie.title || movie.name}</p>
                            </div>
                        </div>
                            <img
                                src={videoProgression}
                                alt="video-progression"
                                className="w-auto h-auto"
                            />
                    </div>
                ))
            ) : (
                <p className="text-white">Aucun film à afficher</p>
            )}
        </div>
    );
}

export default BlockContinueWatching;