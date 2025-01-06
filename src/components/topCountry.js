import BlockCountry from "./blockCountry";
import TitleBlock from "./titleBlock";
import { useNavigate } from "react-router";


function TopCountry({ Block_Title, Block_Items }) {
    const navigate = useNavigate();

    const goToDetails = (content) => {
        content.name ? navigate(`/tv/${content.id}`) : navigate(`/movie/${content.id}`);
    };
    return(
        <div className="flex flex-col items-start gap-2 px-5 pt-5 pb-5 relative max-w-full bg-[#141414]" >
            <TitleBlock title={Block_Title} />
            <BlockCountry content={Block_Items} onMovieClick={goToDetails} />
        </div>
    )
}

export default TopCountry;