import smallLogo from "../assets/icons/netflix_icons/SizeSmall_TypeLetter.svg";


function BlockAnimation({ items, onContentClick }){
    let animation_content = [];
    items.forEach((movie) => {
        movie.genre_ids.forEach(genre => {
            if(genre === 16){
                animation_content.push(movie);
            }
        });
    })
    return(
        <div className="flex gap-1.5 max-w-full overflow-x-scroll overflow-y-hidden">
            {animation_content.map((movie) => (
                <div key={movie.id} className="w-32 relative flex-shrink-0 target" onClick={() => onContentClick(movie)}>
                    <img
                        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                        alt={movie.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 left-2">
                        <img
                            src={smallLogo}
                            alt="logo-netflix"
                            className="w-auto h-auto"
                        />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default BlockAnimation;