import BlockPreview from "./blockPreview";
import TitleBlock from "./titleBlock";

function MovieBlock({ Block_Title, Block_Items, firstBlock }) {
    if (firstBlock) {
        return (
            <div className=" flex flex-col items-start gap-2 px-5 pt-6 pb-5 relative max-w-full bg-[linear-gradient(180deg,#14141400_0%,#14141426_11%,#14141459_24%,#14141494_47.76%,#141414_100%)] ">
                <TitleBlock title={Block_Title} />
                <BlockPreview movies={Block_Items} recentlyAddedCount={3} leavingSoonCount={2} />
            </div>
        )
    } else {
        return (
            <div className="flex flex-col items-start gap-2 px-5 pt-5 pb-5 relative max-w-full bg-[#141414]">
                <TitleBlock title={Block_Title} />
                <BlockPreview movies={Block_Items} recentlyAddedCount={3} leavingSoonCount={2} />
            </div>
        )
    }
}

export default MovieBlock;