export default function CastCard({ actor }) {
    const IMG_ACTOR = 'https://image.tmdb.org/t/p/w500/'+actor.profile_path;
    return (
        <div className="flex flex-col items-center border-2 border-white/50 p-4 min-h-fit flex-1 ">
            <div className="w-32 rounded-full text-white/50">
                <img src={IMG_ACTOR} alt={actor.name} className="w-full h-full object-cover" />
            </div>
            <div className="text-white text-center mt-4 h-full">
                <p>Name: {actor.name}</p>
                <p>Role: {actor.character}</p>
            </div>
        </div>
    )
}