import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';
import { useState } from 'react';
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'



const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['G','a', 'u', 'r', 'a', 'v',' ','T', 'h', 'a', 'k', 'a','r', 'e']
    const jobArray = ['W','e','b', ' ', 'A', 'n', 'd', ' ','A','n','d', 'r', 'o', 'i', 'd', ' ','D','e','v','l','o','p','e','r','.']

    useEffect(() => {
        setTimeout(() => { 
            setLetterClass('text-animate-hover');
        }, 4000);
    }, []);

    return(
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,</span>
                <br />
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span>
                <span> </span>
                <AnimatedLetters letterClass={letterClass} 
                strArray={nameArray}
                idx={20}/>
                <br />
                <AnimatedLetters letterClass={letterClass} 
                strArray={jobArray}
                idx={10}/>
                </h1>
                <h2>Frontend Developer / Java expert / Kotlin / Git / GitHub / Coding Enthusiast</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>

        </div>
        <Loader type="pacman" />
        </>
        );
}

export default Home
