import { SiAnalogue } from "react-icons/si";
import Button from "./Button";


function Navbar(){
    return (
        <div className="flex items-center justify-between p-5 mt-5 px-20">
            <div className="flex items-center space-x-1">
                <SiAnalogue className="text-blue-950 text-2xl" />
                <span className="text-yellow-600 italic text-4xl font-bold tracking-wide font-serif">
                    zoc
                </span>

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