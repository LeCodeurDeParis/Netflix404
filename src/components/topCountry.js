import BlockCountry from "./blockCountry";
import TitleBlock from "./titleBlock";

function TopCountry({ Block_Items }) {
    return(
        <div className="flex flex-col items-start gap-2 px-5 pt-5 pb-5 relative max-w-full bg-[#141414]">
            <TitleBlock title={"Top Country"} />
            <BlockCountry content={Block_Items} />
        </div>
    )
}

export default TopCountry;