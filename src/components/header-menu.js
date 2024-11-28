import logo from '../assets/Logo.svg';
import search_header from '../assets/icons/Search_Header.svg';

function HeaderMenu() {
    return (
        <div className='flex w-full h-20 items-center justify-between px-14 bg-gradient-to-b from-black/70 to-black/0'>
            <div className='flex items-center gap-3'>
                <div className='flex items-start gap-11'>
                    <img src={logo} alt='netflix-logo'/>
                    <p>Home</p>
                    <p>TV Shows</p>
                    <p>Movies</p>
                    <p>New & Popular</p>
                    <p>My List</p>
                </div>
                <div className='flex items-center gap-1'>
                    <img src={search_header} alt='search-icon'/>
                </div>
            </div>
        </div>
    );
}

export default HeaderMenu;