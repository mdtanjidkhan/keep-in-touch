import Link from "next/link";
import { IoHomeOutline } from "react-icons/io5";
import { RiTimeLine } from "react-icons/ri";



const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">KeenKeeper</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-10 font-semibold">
                        <li><Link href="/" className=""><IoHomeOutline></IoHomeOutline> Home</Link></li>
                        <li><Link href="/timeline"><RiTimeLine></RiTimeLine> Timeline</Link></li>
                        <li><Link href="/stats">Stats</Link></li>
                    </ul>
                    
                </div>
            </div>
        </div>
    );
};

export default Navbar;
