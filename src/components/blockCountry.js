
import smallLogo from "../assets/icons/netflix_icons/SizeSmall_TypeLetter.svg";
import NumberTop from "./numberTop";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original/";

function BlockCountry({ content, onMovieClick }){
    return (
        <div className="flex gap-3 max-w-full overflow-x-scroll overflow-y-hidden">
            {content.slice(1, 11).map((data, index) => {
                return (
                    <div key={data.id} className="flex" onClick={() => onMovieClick(data)}>
                        <NumberTop number={index + 1} />
                        <div className="w-32 relative flex-shrink-0 target">
                            <img
                                src={`${IMAGE_BASE_URL}${data.poster_path}`}
                                alt={data.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute top-2 left-2">
                                <img
                                    src={smallLogo}
                                    alt="logo-netflix"
                                    className="w-auto h-auto"
                                />
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default BlockCountry;