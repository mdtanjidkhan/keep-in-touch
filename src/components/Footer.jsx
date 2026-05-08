import { AiFillInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF, FaInstagramSquare } from "react-icons/fa";


const Footer = () => {
    return (
        <div className=" bg-[#244D3F] p-6 ">
            <div className="text-center text-white mt-10 space-y-2 ">
                <h2 className="font-bold md:text-[40px]">KeenKeeper</h2>
                <p className=" text-xs md:font-medium text-gray-400">Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                 <p><small className="font-bold text-xl ">Social Link</small></p>
                 <div className="flex justify-center items-center gap-2 mt-2">
                    <div className="">
                        <span className="cursor-pointer"><FaInstagramSquare></FaInstagramSquare></span>
                    </div>
                    <div>
                       <span className="cursor-pointer"><FaFacebookF></FaFacebookF></span>
                    </div>
                    <div>
                         <span className="cursor-pointer"><BsTwitter></BsTwitter></span>
                    </div>
                 </div>
            </div>
            <hr className="text-gray-500 w-11/12 mx-auto mt-5" />
             <div className="text-center md:flex justify-between w-11/12 mx-auto mt-3 mb-6">
                <div>
                    <p className="font-medium">© 2026 KeenKeeper. All rights reserved.</p>
                </div>
                  <div className="mt-2 md:flex gap-3">
                    <span className="text-gray-400 font-medium">Privacy Policy </span>
                    <span className="text-gray-400 font-medium">Terms of Service </span>
                    <span className="text-gray-400 font-medium">  Cookies</span>
                  </div>
             </div>

        </div>
    );
};

export default Footer;