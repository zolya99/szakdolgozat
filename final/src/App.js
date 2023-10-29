import './App.css';
import LoginButton from './components/Login/LoginButton';
import LogoutButton from './components/Login/LogoutButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Nav/navbar';
import { useAuth0 } from "@auth0/auth0-react";
import Profile from './Profile/Profile';
import Dashboard from './Dashboard/dashboard';
import Card from './Dashboard/card';
import images from './images/images';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBIcon,
  MDBCarousel
} from 'mdb-react-ui-kit';
import Header from './Dashboard/header';
import {
	Routes,
	Route,
  Navigate,
  useNavigate,
  Link,
  BrowserRouter
} from "react-router-dom";
import Hangman from './games/hangman/hangman';
import MemoryCard from './games/memory/memoryCard';

 
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
            </Routes>
            </BrowserRouter>

            
        </>
    );
}
 
export default App;