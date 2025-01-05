import FooterContent from "./footer_content";
import SocialMediaIcons from "./SocialMediaIcons";

function Footer() {
  return (
    <footer>
        <div className="flex flex-col items-start gap-3 px-56 pt-16 bg-[#141414]">
            <SocialMediaIcons />
            <FooterContent />
        </div>
    </footer>
  );
}

export default Footer;