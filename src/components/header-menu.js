import logo from '../assets/Logo.svg';
import search_header from '../assets/icons/Search_Header.svg';
import notification from '../assets/icons/Notification_Header.svg';
import avatarPurple from '../assets/icons/Purple_Avatar.svg';

function HeaderMenu() {
    return (
        <div className='flex w-full h-20 items-center justify-between px-14 bg-gradient-to-b from-black/70 to-black/0 absolute z-10'>
            <div className='flex items-center gap-11'>
                <img src={logo} alt='netflix-logo'/>
                <div className='flex items-start gap-11 text-gray-300'>
                    <p className='text-white'>Home</p>
                    <p>TV Shows</p>
                    <p>Movies</p>
                    <p>New & Popular</p>
                    <p>My List</p>
                    <p>Browse By Languages</p>
                </div>
            </div>
            <div className='flex items-center gap-4'>
                <img src={search_header} alt='search-icon' className='py-0.5'/>
                <img src={notification} alt='notification-icon' className='py-1'/>
                <img src={avatarPurple} alt='avatar-purple-icon'/>
            </div>
        </div>
    );
}

export default HeaderMenu;