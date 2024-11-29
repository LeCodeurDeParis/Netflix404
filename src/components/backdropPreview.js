const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original"


function BackdropPreview({ movies }) {

    if (!movies || movies.length === 0) {
        return <div>No backdrop available</div>;
      }
    
  return (
    <div className="relative w-full bg-gradient  from-black">
      <img
        src={`${IMAGE_BASE_URL}${ movies[0].backdrop_path }`}
        alt={movies[0].title}
      />
    </div>
  );
}

export default BackdropPreview;