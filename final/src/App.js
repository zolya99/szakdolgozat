import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Nav/navbar';
import { useAuth0 } from "@auth0/auth0-react";
import Profile from './Profile/Profile';

import Card from './Dashboard/card';

import Header from './Dashboard/header';
import {
	Routes,
	Route,
  BrowserRouter
} from "react-router-dom";
import Hangman from './games/hangman/hangman';
import MemoryCard from './games/memory/MemoryCard';
import Leaderboard from './Leaderboard/Leaderboard.jsx';

 
function App() {
  const { logout, isAuthenticated } = useAuth0();
  let path = Route.path;
    return (
        <>
        <BrowserRouter>
            
            {/*{images.map(images =>
              <Card imageId={images.itemId}src={images.src} text={images.text}/>)}*/}
              {path = "/hangman" && isAuthenticated ? null : null}
            {/*isAuthenticated ? <Profile/> : null*/}
            
            <Routes>
              <Route path="/" element={
                  <>
                  <Header/>
                  <Navbar />
                  <Card/>
                  <Leaderboard/>
                  {isAuthenticated ? <Profile/> : null}
                  </>
              }/>
            <Route path="/hangman" element={
            <>
            <Navbar />
            <Hangman/>
            {/*path = "/hangman"*/}
            </>
            }/>
            <Route path="/memo" element={
            <>
            <Navbar />
            <MemoryCard/>
            {/*path = "/hangman"*/}
            </>
            }/>
            <Route path="/profile" element={
              <>
              <Leaderboard/>
              </>
            }/>
            </Routes>
            
            </BrowserRouter>
            

            
        </>
    );
}
 
export default App;