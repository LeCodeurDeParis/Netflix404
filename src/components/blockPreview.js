import smallLogo from "../assets/icons/netflix_icons/SizeSmall_TypeLetter.svg";
import rAdded from "../assets/icons/labels/RecentlyAdded_Medium.svg";
import { useEffect, useState } from "react";


function BlockPreview({ movies, recentlyAddedCount}) {

    const [randomIndexes, setRandomIndexes] = useState([]);

    
    useEffect(() => {
        
        // Générer 3 index aléatoires uniques
        const maxCount = Math.min(recentlyAddedCount, movies.length);
        const indexes = new Set();
        while(indexes.size < maxCount) {
            const randomIndex = Math.floor(Math.random() * movies.length);
            indexes.add(randomIndex);
        }
        setRandomIndexes([...indexes]);
    }, [movies, recentlyAddedCount]);


    return (
        <div className="flex gap-1.5 w-full overflow-x-scroll snap-x snap-mandatory">
            {movies.slice(1).map((movie, index) => {
                const originalIndex = index + 1;
                return (
                <div key={movie.id} className="w-32 relative flex-shrink-0 snap-start">
                    <img 
                        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} 
                        alt={movie.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 left-2">
                        <img 
                            src={smallLogo} 
                            alt="logo-netflix"
                        />
                    </div>
                    {randomIndexes.includes(originalIndex) && (
                        <div className=" absolute h-full top-40 left-5">
                            <img src={rAdded} alt="recently-added" />
                        </div>
                    )}  
                </div>
                )
            })}
        </div>
    )
}

export default BlockPreview;