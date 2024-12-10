import playButton from '../assets/icons/buttons/Button_Play.svg'
import mInfoButton from '../assets/icons/buttons/Button_More-Info.svg'
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original"

function BackdropPreview({ movies }) {

    if (!movies || movies.length === 0) {
        return <div>No backdrop available</div>;
      }
    
  return (
    <>
      <div className="relative w-full h-[110vh]">
        <img
          src={`${IMAGE_BASE_URL}${ movies[0].backdrop_path }`}
          alt={movies[0].title}
          className="w-full h-full object-cover"
        />
        <div className='flex flex-col items-center justify-center w-96 h-[45%] absolute z-10 top-0 bottom-[20vh] left-10 my-auto gap-5 bg-gradient-to-r from-black/60 to-black/40 rounded-lg p-6'>
          <p className="text-white text-3xl font-bold">{movies[0].title}</p>
          <p className="w-full text-white">{movies[0].overview}</p>

          <div className='flex items-center gap-2.5'>
            <img src={playButton} alt='play-button'/>
            <img src={mInfoButton} alt='more-info-button'/>
          </div>
        </div>
      </div>
    </>
  );
}

export default BackdropPreview;