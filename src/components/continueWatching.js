import BlockContinueWatching from "./blockContinueWatching";
import TitleBlock from "./titleBlock";

function ContinueWatching({ Block_Title, Block_Items }) {
  let movie_ids = [939243, 912649, 402431, 839033, 762509];
  
  return (
    <div className="flex flex-col items-start gap-2 px-5 pt-5 pb-5 relative w-full bg-[#141414]">
        <TitleBlock title={Block_Title} />
        <BlockContinueWatching data={Block_Items} ids={movie_ids}/>
    </div>
  );
}

export default ContinueWatching;