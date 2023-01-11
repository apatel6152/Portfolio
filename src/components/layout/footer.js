import Link from 'next/link';
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
  return (
    <footer className="py-2 border-t-2">
      <div className="flex justify-center items-center pt-3">
        <div className="p-1 m-1 rounded-full hover:bg-[#eee] ">
          <SocialIcon
            url="https://www.linkedin.com/in/amit-patel-755a95178/"
            target="_blank"
            fgColor="#164760"
            bgColor="transparent"
          />
        </div>
        <div className="p-1 m-1 rounded-full hover:bg-[#eee]">
          <SocialIcon
            url="https://github.com/apatel6152"
            target="_blank"
            fgColor="#164760"
            bgColor="transparent"
          />
        </div>
        <div className="p-1 m-1 rounded-full hover:bg-[#eee] ">
          <SocialIcon
            url="https://www.instagram.com/amit_patel_303/"
            target="_blank"
            fgColor="#164760"
            bgColor="transparent"
          />
        </div>
        <div className="p-1 m-1 rounded-full hover:bg-[#eee]">
          <SocialIcon
            url="https://www.facebook.com/profile.php?id=100005975611113"
            target="_blank"
            fgColor="#164760"
            bgColor="transparent"
          />
        </div>
      </div>
      {/* <Container className="flex justify-center items-center text-sm font-medium"> */}
      <div className='flex justify-center items-center text-base font-semibold pb-5'>
        © {new Date().getFullYear()}&nbsp;
        <Link href={'/'} target="_blank" rel="noopener noreferrer">
          Amit Patel
        </Link>
        . All Rights Reserved.
        </div>
      {/* </Container> */}
    </footer>
  );
};

export default Footer;
