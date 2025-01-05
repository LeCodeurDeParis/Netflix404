import Block_Animation from "./blockAnimation";
import TitleBlock from "./titleBlock";

function Animation({ Block_Title, Block_Movies, Block_Series}) {
    let allContent = [...Block_Movies, ...Block_Series];
    return (
        <div className="flex flex-col items-start gap-2 px-5 pt-5 pb-5 relative w-full bg-[#141414]">
            <TitleBlock title={Block_Title} />
            <Block_Animation items={allContent} />
        </div>
    )

}

export default Animation;