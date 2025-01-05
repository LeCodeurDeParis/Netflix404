function FooterContent() {
  return (
    <div className="flex flex-col items-start gap-8 text-[#808080]">
        <div className="flex flex-col items-start gap-8">
            <div className="flex flex-wrap items-start justify-evenly gap-4 w-[980px] ">
                <div className="flex items-start gap-3 w-full text-start">
                    <p className="w-1/4">Audio Description</p>
                    <p className="w-1/4">Help Center</p>
                    <p className="w-1/4">Gift Cards</p>
                    <p className="w-1/4">Media Center</p>
                </div>
                <div className="flex items-start gap-3 w-full text-start">
                    <p className="w-1/4">Investor Relations</p>
                    <p className="w-1/4">Jobs</p>
                    <p className="w-1/4">Netflix Shop</p>
                    <p className="w-1/4">Terms of Use</p>
                </div>
                <div className="flex items-start gap-3 w-full text-start">
                    <p className="w-1/4">Privacy</p>
                    <p className="w-1/4">Legal Notices</p>
                    <p className="w-1/4">Cookie Preferences</p>
                    <p className="w-1/4">Corporate Information</p>
                </div>
                <div className="flex items-start gap-3 w-full text-start">
                    <p className="w-1/4">Contact Us</p>
                    <p className="w-1/4">Do Not Sell or Share My Personal Information</p>
                    <p className="w-1/4">Ad Choices</p>
                </div>
            </div>
        </div>

        <p>1997-2025 Netflix, Inc. </p>
    </div>
  );
}

export default FooterContent;