import { useState } from 'react';
import { SiAnalogue } from "react-icons/si";
import Link from './Link';
import Button from "./Button";
import { FaChevronDown } from 'react-icons/fa';
import Blog from '../Assets/blog.svg';
import People from '../Assets/people.svg';
import Faqs from '../Assets/faqs.svg';
import Careers from '../Assets/careers.svg';
import Support from '../Assets/support.svg';


function Navbar(){
    const [showDropdown, setShowDropdown] = useState(false);
    return (
        <div className="flex items-center gap-8 justify-between p-5 mt-5 px-20">
            <div className="flex items-center space-x-2">
                <SiAnalogue className="text-blue-950 text-2xl" />
                <span className="text-yellow-600 italic text-4xl font-bold tracking-wide font-serif">
                    zoc
                </span>
            </div>
            <div className="flex items-center gap-8 font-sans ml-11 text-xl">
                <span className="text-blue-950 font-semibold  tracking-wide cursor-pointer">
                    <Link to="/lend">
                    Lend  
                    </Link>
                </span>
                <span className="text-blue-950 font-semibold tracking-wide cursor-pointer">
                    <Link to="/borrow">
                    Borrow  
                    </Link>
                </span>
                <span className="text-blue-950 font-semibold tracking-wide cursor-pointer">
                    <Link to="/repay">
                    Repay  
                    </Link>
                </span>
                <div className="relative"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
            >
                <div className="flex items-center gap-1 cursor-pointer text-blue-950 hover:text-yellow-600">
                    <span className="text-xl font-medium font-sans">Resources</span>
                    <FaChevronDown className="text-sm" />
                </div>
                {showDropdown && (
                <div className="absolute flex font-sans top-full mt-2 w-80 h-60 bg-white border border-gray-200 shadow-md rounded-lg z-50">
                <ul className="flex flex-col">
                    <li className="px-4 py-2 hover:bg-gray-100">
                        <span className="flex items-center gap-2">
                            <img src={Blog} alt="Blog Icon" height="25" width="25" />
                            <Link to="/blog">Blog</Link>
                        </span> 
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100">
                        <span className="flex items-center gap-2">
                            <img src={People} alt="People Icon" height="25" width="25" />
                            <Link to="/about">About us</Link>
                        </span>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100">
                        <span className="flex items-center gap-2">
                            <img src={Faqs} alt="Faq Icon" height="17" width="17" />
                            <Link to="/faqs">FAQ</Link>
                        </span>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100">
                        <span className="flex items-center gap-2">
                            <img src={Careers} alt="Careers Icon" height="17" width="17" />
                            <Link to="/careers">Careers</Link>
                        </span>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100">
                        <span className="flex items-center gap-2">
                            <img src={Support} alt="Support Icon" height="17" width="17" />
                            <Link to="/support">Support</Link>
                        </span>
                    </li>
                </ul>
                </div>
          )}
                
            </div>
            </div>
            
            <div className="flex space-x-2">
                <Button step="Sign in" text="text-blue-950" 
                        border="border-2 border-blue-950 rounded-lg"
                        hover=" hover:bg-blue-950 hover:text-white"/>
                <Button step="Get Started" text="text-white" 
                        border="border-2 border-white rounded-lg"
                        background="bg-yellow-600"/>
            </div>
        </div>

    )
}

export default Navbar;