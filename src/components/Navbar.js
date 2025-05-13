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


function Navbar() {
    const [showDropdown, setShowDropdown] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (

        <div className="p-5 mt-5 px-6 md:px-20">

            {/* Top Row: Logo + Menu Toggle */}
            <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
                <SiAnalogue className="text-blue-950 text-2xl" />
                <span className="text-yellow-600 italic text-4xl font-bold tracking-wide font-serif">zoc</span>
            </div>
            {/* Mobile Menu Toggle Button */}
            <div className="md:hidden">
                <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                <svg className="w-6 h-6 text-blue-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                </button>
            </div>
    
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8 font-sans text-xl">
                <Link to="/lend" className="text-blue-950 font-semibold tracking-wide">Lend</Link>
                <Link to="/borrow" className="text-blue-950 font-semibold tracking-wide">Borrow</Link>
                <Link to="/repay" className="text-blue-950 font-semibold tracking-wide">Repay</Link>
    
                <div
                className="relative"
                onMouseEnter={() => setShowDropdown(true)}
                onMouseLeave={() => setShowDropdown(false)}
                >
                <div className="flex items-center gap-1 cursor-pointer text-blue-950 hover:text-yellow-600">
                    <span className="text-xl text-blue-950 font-medium font-sans">Resources</span>
                    <FaChevronDown className="text-sm" />
                </div>
    
                {showDropdown && (
                    <div className="absolute top-full mt-2 w-80 bg-white border shadow-md rounded-lg z-50">
                    <ul className="flex flex-col font-sans">
                        <NavItem icon={Blog} label="Blog" link="/blog" />
                        <NavItem icon={People} label="About us" link="/about" />
                        <NavItem icon={Faqs} label="FAQ" link="/faqs" />
                        <NavItem icon={Careers} label="Careers" link="/careers" />
                        <NavItem icon={Support} label="Support" link="/support" />
                    </ul>
                    </div>
                )}
                </div>
            </div>
    
            {/* Desktop Buttons */}
            <div className="hidden md:flex space-x-2">
                <Button step="Sign in" text="text-blue-950" border="border-2 border-blue-950 rounded-lg" hover="hover:bg-blue-950 hover:text-white" />
                <Button step="Get Started" text="text-white" border="border-2 border-white rounded-lg" background="bg-yellow-600" />
            </div>
            </div>
    
            {/* Mobile Dropdown Menu */}
            {isMobileMenuOpen && (
                <div className="absolute top-20 left-0 w-full bg-white shadow-lg z-50 px-6 py-6 md:hidden">
                    <nav className="flex flex-col">
                        <div className="mt-6 flex flex-col gap-3">
                                <Button
                                step="Sign in"
                                text="text-blue-950"
                                border="border-2 border-blue-950 rounded-lg"
                                hover="hover:bg-blue-950 hover:text-white"
                                />
                                <Button
                                step="Get Started"
                                text="text-white"
                                border="border-2 border-white rounded-lg"
                                background="bg-yellow-600"
                                />
                            </div>
                        <Link to="/lend" className="block text-blue-950 font-medium">Lend</Link>
                        <Link to="/borrow" className="block text-blue-950 font-medium">Borrow</Link>
                        <Link to="/repay" className="block text-blue-950 font-medium">Repay</Link>
                        <details className="group">
                        <summary className="cursor-pointer text-blue-950 font-medium">Resources</summary>
                        <div className="flex flex-col">
                        <NavItem icon={Blog} label="Blog" link="/blog" />
                        <NavItem icon={People} label="About us" link="/about" />
                        <NavItem icon={Faqs} label="FAQ" link="/faqs" />
                        <NavItem icon={Careers} label="Careers" link="/careers" />
                        <NavItem icon={Support} label="Support" link="/support" />
                        </div>
                        </details>

                    </nav>
                
                </div>
            )}


      </div>
    );
  }
  
  // Helper for menu items with icons
  const NavItem = ({ icon, label, link }) => (
    <div className="px-4 py-2 hover:bg-gray-100">
      <span className="flex items-center gap-2">
        <img src={icon} alt={`${label} icon`} height="20" width="20" />
        <Link to={link}>{label}</Link>
      </span>
    </div>
  );
  
  export default Navbar;
  