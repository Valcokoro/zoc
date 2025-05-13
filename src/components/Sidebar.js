import { FaHome, FaHandHoldingUsd, FaHandshake, FaChartBar, FaUserCircle, FaSignOutAlt } from 'react-icons/fa';
import { SiAnalogue } from "react-icons/si";
import Link from './Link';


function Sidebar(){
    const links = [
        {label: "Dashboard", path: "/dashboard", icon: <FaHome />},
        {label: "Borrowers", path:"/dashboard/borrowers", icon: <FaHandHoldingUsd />},
        {label: "My Offers", path:"/dashboard/offers", icon: <FaHandshake />},
        {label: "Analytics", path: "dashboard/analytics", icon: <FaChartBar />},
        {label: "Profile",   path: "dashboard/profile", icon: <FaUserCircle />},
        {label: "Logout",    path: "/logout", icon: <FaSignOutAlt /> }
    ]

    const renderedLinks = links.map((link) => {
        return <Link 
                  key={link.label} 
                  to={link.path} 
                  className="flex items-center gap-3 text-blue-950 font-medium
                           hover:text-yellow-600 transition-colors duration-200 px-4 
                           py-2 rounded-md hover:bg-gray-100 w-full">
                            <div className="flex">
                                <span className="text-lg">{link.icon}</span>
                                <span>{link.label}</span>    
                            </div>
                                
                </Link>
    })
    return (
        <div className="min-h-screen w-64 bg-white border-r shadow-md p-6 flex flex-col justify-between">
            <div className="flex items-center space-x-2 mb-10">
            <SiAnalogue className="text-blue-950 text-2xl" />
            <span className="text-yellow-600 italic text-4xl font-bold tracking-wide font-serif">zoc</span>
            </div>
            <nav className="flex flex-col gap-3 flex-grow">
                {renderedLinks}
            </nav>

            <div className="mt-auto text-sm text-gray-400  pt-6">
                © {new Date().getFullYear()} Zoc
            </div>

        </div>
    )
}

export default Sidebar;