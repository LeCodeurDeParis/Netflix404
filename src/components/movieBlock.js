import BlockPreview from "./blockPreview";
import TitleBlock from "./titleBlock";

function MovieBlock({Block_Title, Block_Items}) {
    return (
        <div className="flex flex-col items-start gap-4 px-5">
            <TitleBlock title={Block_Title} />
            <BlockPreview movies={Block_Items} />
        </div>
    )
}

export default MovieBlock;