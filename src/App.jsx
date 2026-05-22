import { Route, Routes } from 'react-router-dom'
import MovieCard from './components/MovieCard'
import Favourite from './pages/Favourite'
import Home from './pages/Home'
import NavBar from './components/NavBar'

function App() {
  return (
    <div>
    <NavBar/>
    <main className="">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/favourites" element={<Favourite/>}/>
      </Routes>
    </main>
    </div>
  )
}

export default App
