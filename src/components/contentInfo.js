import top_small from '../assets/icons/labels/Top10_Small.svg'
import CreditsMovie from './creditsMovie'

export default function ContentInfo( {movie, cast} ) {
    return (
        <div className='flex justify-between w-full h-auto px-6 bg-[#141414]'>
            <div className='flex flex-col items-start justify-center gap-4 text-white'>
                <div className='flex gap-3.5'>
                    <div className='flex items-center gap-2'>
                        <p className='text-[#46D369]'>New</p>
                        <p>{movie.runtime}min</p>
                        <p>{movie.release_date}</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <p className='text-white/50 border-2 border-white/50 p-0.5 '>TV-MA</p>
                    </div>
                </div>
                <img src={top_small} alt='top_small' />
                <div className='flex gap-2 w-2/3'>
                    <p>{movie.overview}</p>
                </div>
            </div>
            <CreditsMovie movie={movie} cast={cast}/>
        </div>
    )
}