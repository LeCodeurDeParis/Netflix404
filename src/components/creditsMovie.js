export default function CreditsMovie({ content, cast }) {

    if (!cast || !Array.isArray(cast.cast)) {
        return <p className="text-white/50">No cast information available.</p>;
    }

    if (!content || !Array.isArray(content.genres)) {
        return <p className="text-white/50">No genre information available.</p>;
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
                {content.genres.map((data) => (
                    <p key={data.id}>{data.name}</p>
                ))}
            </div>
        </div>
    );
}