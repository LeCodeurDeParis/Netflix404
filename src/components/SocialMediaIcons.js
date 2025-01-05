import facebook from '../assets/icons/social_icons/Facebook.svg';
import instagram from '../assets/icons/social_icons/Instagram.svg';
import twitter from '../assets/icons/social_icons/Twitter.svg';
import youtube from '../assets/icons/social_icons/YouTube.svg';

function SocialMediaIcons(){
    return (
        <div className="flex items-center gap-4">
            <img src={facebook} alt="facebook" className="w-6 h-6"/>
            <img src={instagram} alt="instagram" className="w-6 h-6"/>
            <img src={twitter} alt="twitter" className="w-6 h-6"/>
            <img src={youtube} alt="youtube" className="w-6 h-6"/>
        </div>
    );
}

export default SocialMediaIcons;