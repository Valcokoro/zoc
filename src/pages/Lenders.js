import Button from '../components/Button';

function Lenders(){
    return (
            <div className="min-h-screen text-gray-900 mt-10 ">
                <section className="text-center py-16 px-6 bg-blue-950 text-white">
                    <h1 className="text-2xl md:text-5xl font-bold leading-tight">Put Your Money to Work – Lend & Earn with Zoc</h1>
                    <p className="mt-4 text-2xl md:text-2xl leading-relaxed">Earn competitive returns by lending to verified borrowers worldwide. 
                        Zoc ensures safe, transparent, and profitable peer-to-peer 
                        lending with multi-country credit score verification.
                    </p>
                </section>
                <div className="flex justify-center mt-6 w-full">
                    <Button step="Get Started" text="text-white" 
                            border="border-2 border-white rounded-lg"
                            background="bg-yellow-600"
                            others="px-6 py-3  font-semibold rounded-md hover:bg-yellow-600 transition"/>

                </div>
                
            </div>
        )
};

export default Lenders;