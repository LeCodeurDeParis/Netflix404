import BlockPreview from "./blockPreview";
import TitleBlock from "./titleBlock";

function MovieBlock({Block_Title, Block_Items}) {
    return (
        <div className="-mt-[35vh] flex flex-col items-start gap-4 px-5 pt-5 pb-14 bg-[linear-gradient(180deg,#14141400_0%,#14141426_11.03%,#14141459_23.77%,#14141494_47.76%,#141414_91.44%)] relative">
            <TitleBlock title={Block_Title} />
            <BlockPreview movies={Block_Items} recentlyAddedCount={3} leavingSoonCount={2}/>
        </div>
    )
}

export default MovieBlock;