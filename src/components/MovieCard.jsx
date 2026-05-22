import { useContext } from "react";
import {FavouriteContext} from "../context/FavouriteProvider";

function MovieCard({movie}){
    const {favourites, addMovieToFav, removeMovieFromFav} = useContext(FavouriteContext);   
    const isFavourite = favourites.some((fav)=>{
        return fav.id === movie.id;
    })
    function like(movie){
    return function(){
        if (!isFavourite){
            addMovieToFav(movie);
            alert(`${movie.title} is added to your favourite!`);
        }    
        else {
            removeMovieFromFav(movie.id);
            alert(`${movie.title} is removed from your favourite!`);
        }
    }
    }
    return (
        <div className="flex flex-col border rounded-2xl m-2.5 shadow-2xl text-white p-2.5 h-[620px] overflow-hidden">
            <div className="w-full h-300px">
                <img className="rounded-2xl object-cover h-[450px] w-full" src={ `https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
                <div className="">
                    <button onClick={like(movie)}>{isFavourite ? "\u2764\uFE0F": "\u{1F90D}"}</button>
                </div>
            </div>
            <div className="overflow-hidden">
                <h3>{movie.title}</h3>
                <p>{movie.release_date.split("-")[0]}</p>
                <p className="overflow-hidden line-clamp-3">{movie.overview}</p>
            </div>
        </div>
    )
}

export default MovieCard