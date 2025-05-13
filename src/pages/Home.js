import Navbar from '../components/Navbar';



function Home(){
    return (
            <div>
                <Navbar />
                <div className="m-10 sm:m-16 md:m-20 lg:m-20 justify-center px-8 sm:px-16 md:px-56">
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold text-blue-950 text-center sm:text-left">
                       <span className="ml-0 sm:ml-8">The Smarter Way</span> <br /> to Lend and Borrow
                    </h1>
                    <p className="font-serif  font-light text-blue-950 text-center sm:text-left sm:text-lg leading-relaxed max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        Zoc is a peer-to-peer lending platform that connects borrowers and lenders across borders using verified credit history. 
                        Borrowers get flexible funding with terms that suit their needs, while lenders earn returns based on negotiated interest rates. 
                        Lending and borrowing—smarter, fairer, and more human.
                    </p>
                </div>
            </div>
        )
};

export default Home;