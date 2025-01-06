import BlockAnimation from "./blockAnimation";
import TitleBlock from "./titleBlock";
import { useNavigate } from "react-router";


function Animation({ Block_Title, Block_Movies, Block_Series}) {
    let allContent = [...Block_Movies, ...Block_Series];

    const navigate = useNavigate();

    const goToDetails = (content) => {
        content.name ? navigate(`/tv/${content.id}`) : navigate(`/movie/${content.id}`);
    };
    return (
        <div className="flex flex-col items-start gap-2 px-5 pt-5 pb-5 relative w-full bg-[#141414]">
            <TitleBlock title={Block_Title} />
            <BlockAnimation items={allContent} onContentClick={goToDetails}/>
        </div>
    )

}

export default Animation;