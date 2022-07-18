import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState,useEffect} from 'react';
import Loader from 'react-loaders'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAndroid, faAngular ,faGitAlt, faJava, faLinux, faReact} from '@fortawesome/free-brands-svg-icons'



const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => { 
            setLetterClass('text-animate-hover');
        }, 4000);
    }, []);
   

    return (
        <>
        <div className="container about-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters 
                    letterClass = {letterClass}
                    strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']} 
                    idx={15}
                    />
                </h1>
                <p>
                    I am a very Ambitious front-end developer, looking for 
                    a role in an established IT company with opportunity to 
                    work with up-to-date technologies on challenging and 
                    diverse projects.
                </p>
                <p>
                    I'm quite confident, naturally curious about how things 
                    work, and working on improving my skills in computer science 
                    sectors day by day.
                </p>
                <p>
                    If i need to define myself in a sentence that would be An 
                    ambitious lad can only run towards knowledge.
                </p>
            </div>

            <div className="stage-cube-cont">
                <div className="cube-spinner">
                    <div className="face1">
                        <FontAwesomeIcon icon={ faAndroid } color="#3DDC84" />
                    </div>
                    <div className="face2">
                        <FontAwesomeIcon icon={faAngular } color="#DD0031"/>
                    </div>
                    <div className="face3">
                        <FontAwesomeIcon icon={faReact } color="#5ED4F4"/>
                    </div>
                    <div className="face4">
                        <FontAwesomeIcon icon={ faGitAlt } color="#EC4D28" />
                    </div>
                    <div className="face5">
                        <FontAwesomeIcon icon={ faLinux } color="#fff" />
                    </div>
                    <div className="face6">
                        <FontAwesomeIcon icon={ faJava } color="#f89820 " />
                    </div>

                </div>

            </div>
        </div>
        <Loader type="pacman" />
        </>
    )
}

export default About
