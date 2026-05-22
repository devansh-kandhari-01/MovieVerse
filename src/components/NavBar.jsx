import { Link } from "react-router-dom";

function NavBar(){
    return (
        <nav className="bg-secondary text-white flex justify-between items-center px-8 py-4 shadow-lg">
            <div className=" w-1/3">
                <Link to="/">MovieVerse</Link>
            </div>
            <div className="flex justify-evenly w-1/2">
                <Link to="/">Home</Link>
                <Link to="/favourites">Favourite</Link>
            </div>
        </nav>
    )
}

export default NavBar