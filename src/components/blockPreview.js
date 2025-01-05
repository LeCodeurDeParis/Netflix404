import smallLogo from "../assets/icons/netflix_icons/SizeSmall_TypeLetter.svg";
import rAdded from "../assets/icons/labels/RecentlyAdded_Medium.svg";
import lSoon from "../assets/icons/labels/LeavingSoon_Medium.svg";
import { useEffect, useState } from "react";


function BlockPreview({ movies, recentlyAddedCount, leavingSoonCount }) {

    const [randomIndexes, setRandomIndexes] = useState({
        recentlyAdded: [],
        leavingSoon: []
    });


    useEffect(() => {

        // Générer des index aléatoires uniques sans se chevaucher
        const generateNonOverlappingRandomIndexes = (totalCount, recentlyAddedCount, leavingSoonCount) => {
            const allIndexes = new Set();
            const recentlyAddedIndexes = new Set();
            const leavingSoonIndexes = new Set();

            // Ensure we don't request more unique indexes than available movies
            const effectiveRecentlyAddedCount = Math.min(recentlyAddedCount, totalCount);
            const effectiveLeavingSoonCount = Math.min(leavingSoonCount, totalCount - effectiveRecentlyAddedCount);

            // Generate Recently Added indexes
            while (recentlyAddedIndexes.size < effectiveRecentlyAddedCount) {
                const randomIndex = Math.floor(Math.random() * totalCount);
                if (!allIndexes.has(randomIndex)) {
                    recentlyAddedIndexes.add(randomIndex);
                    allIndexes.add(randomIndex);
                }
            }

            // Generate Leaving Soon indexes
            while (leavingSoonIndexes.size < effectiveLeavingSoonCount) {
                const randomIndex = Math.floor(Math.random() * totalCount);
                if (!allIndexes.has(randomIndex)) {
                    leavingSoonIndexes.add(randomIndex);
                    allIndexes.add(randomIndex);
                }
            }

            return {
                recentlyAdded: [...recentlyAddedIndexes],
                leavingSoon: [...leavingSoonIndexes]
            };
        };

        // Skip the first movie (movies.slice(1))
        setRandomIndexes(generateNonOverlappingRandomIndexes(
            movies.length - 1,
            recentlyAddedCount,
            leavingSoonCount
        ));
    }, [movies, recentlyAddedCount, leavingSoonCount]);

    return (
        <div className="flex gap-1.5 max-w-full overflow-x-scroll overflow-y-hidden">
            {movies.slice(1).map((movie, index) => {
                const originalIndex = index + 1;

                return (
                    <div key={movie.id} className="w-32 relative flex-shrink-0">
                        <img
                            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                            alt={movie.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute top-2 left-2">
                            <img
                                src={smallLogo}
                                alt="logo-netflix"
                                className="w-auto h-auto"
                            />
                        </div>
                        {/* Label Recently Added */}
                        {randomIndexes.recentlyAdded.includes(originalIndex) && (
                            <div className="absolute h-full top-40 left-7">
                                <img src={rAdded} alt="recently-added" />
                            </div>
                        )}

                        {/* Label Leaving Soon */}
                        {randomIndexes.leavingSoon.includes(originalIndex) && (
                            <div className="absolute h-full top-40 left-7">
                                <img src={lSoon} alt="leaving-soon" />
                            </div>
                        )}
                    </div>
                )
            })}
        </div>
    )
}


export default BlockPreview;