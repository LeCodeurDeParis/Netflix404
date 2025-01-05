
import smallLogo from "../assets/icons/netflix_icons/SizeSmall_TypeLetter.svg";
import NumberTop from "./numberTop";

function BlockCountry({ data }){
    return (
        <div className="flex gap-3 max-w-full overflow-x-scroll overflow-y-hidden">
            {data.slice(1, 11).map((data, index) => {
                return (
                    <div className="flex">
                        <NumberTop number={index + 1} />
                        <div key={data.id} className="w-32 relative flex-shrink-0">
                            <img
                                src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
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