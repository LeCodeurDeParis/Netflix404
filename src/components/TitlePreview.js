const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original"

function TitlePreview({ movies }){
    if (!movies || movies.length === 0) {
        return <div>Aucun film disponible pour le moment.</div>;
    }
    const backdrop_path = movies[0].backdrop_path
    return (
        <div className='flex items-center justify-center w-16'>
            <img src={`${IMAGE_BASE_URL}${backdrop_path}`} />
        </div>
    )
}

export default TitlePreview;