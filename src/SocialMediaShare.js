import {
  FacebookShareButton,
  WhatsappShareButton,
  RedditShareButton,
  FacebookIcon,
  RedditIcon,
  WhatsappIcon,
  TwitterIcon,
  TwitterShareButton,
} from "react-share";

const SocialMediaShare = () => {
  return (
    <div className="SocialMediaShare">
      <FacebookShareButton
        url="https://youthful-snyder-d713d9.netlify.app/"
        quote={"Nominate your favourite films with the Shoppies!"}
        hashtag="#Shoppies"
      >
        <FacebookIcon size={32} round={true}></FacebookIcon>
      </FacebookShareButton>
      <RedditShareButton
        url="https://youthful-snyder-d713d9.netlify.app/"
        title={"Nominate your favourite films with the Shoppies!"}
        hashtag="#Shoppies"
      >
        <RedditIcon size={32} round={true}></RedditIcon>
      </RedditShareButton>
      <WhatsappShareButton
        url="https://youthful-snyder-d713d9.netlify.app/"
        title={"Nominate your favourite films with the Shoppies!"}
      >
        <WhatsappIcon size={32} round={true}></WhatsappIcon>
      </WhatsappShareButton>
      <TwitterShareButton
        url="https://youthful-snyder-d713d9.netlify.app/"
        title={"Nominate your favourite films with the Shoppies!"}
        tags={["#Shoppies"]}
      >
        <TwitterIcon size={32} round={true}></TwitterIcon>
      </TwitterShareButton>
    </div>
  );
};

export default SocialMediaShare;
