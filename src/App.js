import './App.scss';
import { Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import Home from './components/Home';
import video from './assets/images/video.mp4'
import About from './components/About';
import Contact from './components/Contact';

function App() {
    return ( 
    <>
    <div className="App">
     <video autoPlay loop muted>
        <source src = {video} type="video/mp4"/>
     </video>
    </div>
        <Routes >
        <Route path = '/' element = { < Layout /> }>
        <Route index element = { < Home /> } />
        <Route path = 'about' element = { < About /> } />
        <Route path = 'contact' element = { < Contact /> } />
        </Route>     
        </Routes > 
        </>
    );
}

export default App;