import playButton from '../assets/icons/buttons/Button_Play.svg'
import mInfoButton from '../assets/icons/buttons/Button_More-Info.svg'
function TitlePreview({ movies }){
    if (!movies || movies.length === 0) {
        return <div>Aucun film disponible pour le moment.</div>;
    }
    return (
        <div className='flex flex-col items-center justify-center w-80 h-[45%] absolute z-10 inset-y-0 left-10 my-auto gap-5 bg-gradient-to-r from-black/60 to-black/30 rounded--lg'>
            <p className="text-white text-3xl font-bold">{movies[0].title}</p>
            <p className="w-full text-white">{movies[0].overview}</p>
            <div className='flex items-center'>
                    <img src={playButton} alt='play-button'/>
                    <img src={mInfoButton} alt='more-info-button'/>
            </div>
        </div>
    )
}

export default TitlePreview;