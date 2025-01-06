import ContentInfo from '../components/contentInfo';
import smallLogo from '../assets/icons/netflix_icons/SizeSmall_TypeLetter.svg';
import playButton from '../assets/icons/buttons/Button_Play.svg';
import addButton from '../assets/icons/buttons/Button_AddList.svg';
import likeButton from '../assets/icons/buttons/Button_Like.svg';

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original/";

export default function ContentBanner({ movie }) {
    return (
        <div className="relative w-full h-[95vh]">
            <img
                src={`${IMAGE_BASE_URL}${movie.backdrop_path}`}
                alt={movie.title}
                className="w-full h-full object-cover"
            />
            <div className='flex flex-col items-start justify-center w-full h-[40%] absolute z-10 bottom-0 my-auto gap-5 bg-[linear-gradient(180deg,#14141400_0%,#14141426_11%,#14141459_24%,#14141494_47.76%,#141414_100%)] px-6'>
                <div className='flex items-center gap-2'>
                    <img src={smallLogo} alt="Netflix Logo" className="w-6" />
                    <p className='text-white text-lg tracking-widest'>SERIES</p>
                </div>
                <p className="text-white text-3xl font-bold">{movie.title}</p>
                <div className='flex items-center gap-2 mt-2'>
                    <img src={playButton} alt='play-button' />
                    <img src={addButton} alt='add-button' />
                    <img src={likeButton} alt='like-button' />
                </div>
            </div>
        </div>
    )
}