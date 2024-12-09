function BlockPreview({ movies }){
    return (
        <div className="flex flex-row">
            {movies.map((movie) => (
                <img key={movie.id} src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title} className="w-32"/>
            ))}
        </div>
    )
}

export default BlockPreview;