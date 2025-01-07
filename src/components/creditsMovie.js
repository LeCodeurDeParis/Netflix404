export default function CreditsMovie({ movie, cast }) {

    // Vérification pour éviter des erreurs si cast ou cast.cast est indéfini
    if (!cast || !Array.isArray(cast.cast)) {
        return <p className="text-white/50">No cast information available.</p>;
    }

    return (
        <div className="flex flex-col items-start gap-3.5 text-white w-1/3">
            <div className="flex gap-4">
                <p className="text-white/50 px-2">Cast:</p>
                {cast.cast.slice(0, 3).map((data) => (
                    <p key={data.id}>{data.name}</p>
                ))}
            </div>
            <div className="flex gap-4">
                <p className="text-white/50 px-2">Genres:</p>
                {movie.genres.map((data) => (
                    <p key={data.id}>{data.name}</p>
                ))}
            </div>
        </div>
    );
}