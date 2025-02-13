import CastCard from "./castCard";

export default function Cast({ cast }) {
    if (!cast || !Array.isArray(cast.cast)) {
        return <p className="text-white/50">No cast information available.</p>;
    }
    return (
        <div className="flex items-center gap-12 justify-start py-12 px-6 overflow-x-scroll bg-inherit">
            {cast.cast.slice(0, 10).map((data) => (
                <CastCard key={data.id} actor={data} />
            ))}
        </div>
    );
}