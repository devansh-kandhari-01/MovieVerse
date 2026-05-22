import { useContext } from "react"
import MovieCard from "../components/MovieCard";
import {FavouriteContext} from "../context/FavouriteProvider"

function Favourite(){
    const {favourites} = useContext(FavouriteContext);
    if (favourites.length === 0){
        return (
            <div className="flex flex-col justify-center items-center text-center text-white font-bold text-2xl h-screen">
                <h1>No favourite movies yet</h1>
                <p>Start adding movies to your favourite and they will appear here!</p>
            </div>
        )
    } 
    return ( 
            <div className="bg-primary flex flex-col gap-2.5 p-3 items-center">
            <div className="grid grid-rows-1 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {   
                favourites.map((movie) => (
                    <MovieCard movie={movie} key={movie.id}/>
                ))
            }
        </div>
        </div>
    )
}

export default Favourite