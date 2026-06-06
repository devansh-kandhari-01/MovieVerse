import MovieCard from "../components/MovieCard"
import {getPopularMovies, searchMovies} from "../services/api"
import { useEffect, useState } from "react"

function Home(){
    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() =>{
        async function loadMovies(){
            try{
            const movies = await getPopularMovies();
            setMovies(movies);
        }
        catch (err){
            console.log(err);
            setError("Failed to load movies.");
        }
        finally{
            setLoading(false);
        }
        }
        loadMovies();
    }, []);
    async function handleSearch(e){
        e.preventDefault();
        try{
            setLoading(true);
            setError(null);
            let movies;
            if (!searchQuery.trim()){
                movies = await getPopularMovies();
                setMovies(movies);
            }
            else{
                movies = await searchMovies(searchQuery);
                setMovies(movies);
            }
        }
        catch (err){
            console.log(err);
            setError("Failed to search movies.");
        }
        finally{
            setLoading(false)
        }
    }
    return (
        <div className="bg-primary flex flex-col gap-2.5 p-3 items-center">
            <div className="text-white border rounded-2xl p-1.5">
                <form onSubmit={handleSearch} className="">
                    <input type="text" placeholder="Search for the movie..." className="focus:outline-none p-1" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>
                    <button type="submit" className="">{"\u{1F50D}"}</button>
                </form>
            </div>
            {loading && (<p className="text-center text-white mb-5">Loading...</p>)}
            {error && (<p className="text-center text-red-500 mb-5">{error}</p>)}
            <div className="grid grid-rows-1 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {   
                movies.map((movie) => (
                    <MovieCard movie={movie} key={movie.id}/>
                ))
            }
        </div>
        </div>
    )
}

export default Home