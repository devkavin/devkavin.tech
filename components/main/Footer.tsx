// import React from "react";
// import {
//   RxDiscordLogo,
//   RxGithubLogo,
//   RxInstagramLogo,
//   RxTwitterLogo,
//   RxLinkedinLogo,
// } from "react-icons/rx";

// import { FaYoutube } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
//         <div className="w-full flex flex-col items-center justify-center m-auto">
//             <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">

//                 <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
//                     <div className="font-bold text-[16px]">Community</div>
//                     <p className="flex flex-row items-center my-[15px] cursor-pointer">
//                         <FaYoutube />
//                         <span className="text-[15px] ml-[6px]">Youtube &#123;Loading&#125;</span>
//                     </p>
//                     <p className="flex flex-row items-center my-[15px] cursor-pointer">
//                         <RxGithubLogo />
//                         <span className="text-[15px] ml-[6px]">Github</span>
//                     </p>
//                     <p className="flex flex-row items-center my-[15px] cursor-pointer">
//                         <RxDiscordLogo />
//                         <span className="text-[15px] ml-[6px]">Discord &#123;Loading&#125;</span>
//                     </p>
//                 </div>
//                 <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
//                     <div className="font-bold text-[16px]">Social Media</div>
//                     <p className="flex flex-row items-center my-[15px] cursor-pointer">
//                         <RxInstagramLogo />
//                         <span className="text-[15px] ml-[6px]">Instagram &#123;Loading&#125;</span>
//                     </p>
//                     <p className="flex flex-row items-center my-[15px] cursor-pointer">
//                         <RxTwitterLogo />
//                         <span className="text-[15px] ml-[6px]">Twitter</span>
//                     </p>
//                     <p className="flex flex-row items-center my-[15px] cursor-pointer">
//                         <RxLinkedinLogo />
//                         <span className="text-[15px] ml-[6px]">Linkedin</span>
//                     </p>
//                 </div>
//                 <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
//                     <div className="font-bold text-[16px]">About</div>
//                    <p className="flex flex-row items-center my-[15px] cursor-pointer">

//                         <span className="text-[15px] ml-[6px]">Become a Sponsor</span>
//                     </p>
//                     <p className="flex flex-row items-center my-[15px] cursor-pointer">

//                         <span className="text-[15px] ml-[6px]">Learn about me</span>
//                     </p>
//                     <p className="flex flex-row items-center my-[15px] cursor-pointer">

//                         <span className="text-[15px] ml-[6px]">kavindra.senanayake@gmail.com</span>
//                     </p>
//                 </div>
//             </div>

//             <div className="mb-[20px] text-[15px] text-center">
//                 &copy; Devkavin 2023 Inc. All rights reserved
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Footer
import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap z-[20]">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Community</div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <FaYoutube />
              <a href="#" className="text-[15px] ml-[6px]">
                Youtube &#123;Work in progress..&#125;
              </a>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <RxGithubLogo />
              <a
                href="https://github.com/devkavin"
                className="text-[15px] ml-[6px]"
              >
                Github
              </a>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <RxDiscordLogo />
              <a href="#" className="text-[15px] ml-[6px]">
                Discord &#123;Work in progress..&#125;
              </a>
            </p>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Social Media</div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <RxInstagramLogo />
              <a href="#" className="text-[15px] ml-[6px]">
                Instagram &#123;Work in progress..&#125;
              </a>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <RxTwitterLogo />
              <a
                href="https://twitter.com/devkavin"
                className="text-[15px] ml-[6px]"
              >
                Twitter
              </a>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <RxLinkedinLogo />
              <a
                href="https://www.linkedin.com/in/kavindra-senanayake/"
                className="text-[15px] ml-[6px]"
              >
                Linkedin
              </a>
            </p>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">About</div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <a href="/sponsor" className="text-[15px] ml-[6px]">
                Become a Sponsor
              </a>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <a href="#about-me" className="text-[15px] ml-[6px]">
                Learn about me
              </a>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <a
                href="mailto:kavindra.senanayake@gmail.com"
                className="text-[15px] ml-[6px]"
              >
                kavindra.senanayake@gmail.com
              </a>
            </p>
          </div>
        </div>

        <div className="mb-[20px] text-[15px] text-center">
          &copy; Devkavin 2023 Inc. All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
