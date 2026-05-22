import { createContext, useEffect, useState } from "react";

export const FavouriteContext = createContext();
function FavouriteProvider({children}){
    const [favourites, setFavourite] = useState(()=>{
        try{
            return JSON.parse(localStorage.getItem("favourites")) || [];
        }
        catch{
            return [];
        }
        }
    );
    useEffect(()=>{
        localStorage.setItem("favourites", JSON.stringify(favourites));
    }, [favourites]);
    function addMovieToFav(movie){
        setFavourite([...favourites, movie]);
    }
    function removeMovieFromFav(movieId){
        setFavourite(favourites.filter((movie)=>{
            return movie.id !== movieId;
        }))
    }
    return (
        <FavouriteContext.Provider value={{favourites, addMovieToFav, removeMovieFromFav}}>
            {children}
        </FavouriteContext.Provider>
    )
}

export default FavouriteProvider