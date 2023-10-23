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

 
function App() {
  const { logout, isAuthenticated } = useAuth0();
    return (
        <>
            <Header/>
            <Navbar/>
            {/*{images.map(images =>
              <Card imageId={images.itemId}src={images.src} text={images.text}/>)}*/}
              <Card></Card>
            {isAuthenticated ? <Profile/> : null}
            
        </>
    );
}
 
export default App;