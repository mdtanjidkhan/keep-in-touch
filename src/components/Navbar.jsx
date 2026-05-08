"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ImStatsDots } from "react-icons/im";
import { IoHomeOutline } from "react-icons/io5";
import { RiTimeLine } from "react-icons/ri";



const Navbar = () => {
    const pathname = usePathname();
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm justify-between">
                <div className="">
                    <a className="hidden md:block btn btn-ghost font-bold text-xl">Keen<span className="text-[#244D3F]">Keeper</span></a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal md:px-10 font-semibold gap-3">
                        <li><Link href="/" className={pathname === "/" ? "bg-[#244D3F] text-white" : ""}><IoHomeOutline></IoHomeOutline> Home</Link></li>
                        <li><Link href="/timeline" className={pathname === "/timeline" ? "bg-[#244D3F] text-white" : ""}><RiTimeLine></RiTimeLine> Timeline</Link></li>
                        <li><Link href="/stats" className={pathname === "/stats" ? "bg-[#244D3F] text-white" : ""}><ImStatsDots></ImStatsDots>Stats</Link></li>
                    </ul>
                    
                </div>
            </div>
        </div>
    );
};

export default Navbar;
