import { mdiGithub, mdiTwitter, mdiInstagram, mdiLinkedin } from '@mdi/js'
import ReactDOM from 'react-dom';
import './style.css';


export default function IconsContact() {
    return (
        <div className="card border border-0">
            <div className="card-body icons">
                <h5 className="card-title text-center"><ins>Contact Me</ins></h5>
                <p className="card-text">You can find me on the following:</p>
                <ul className="social-wrap">
                    <li className="social">
                        <a href="https://github.com/HJandu"><i className="icon"><svg viewBox="0 0 24 24" style={{ width: '50px', height: '50px' }}><path d={mdiGithub} /></svg></i></a>
                        <a href="#!"><i className="icon"><svg viewBox="0 0 24 24" style={{ width: '50px', height: '50px' }}><path d={mdiTwitter} /></svg></i></a>
                        <a href="#!"><i className="icon"><svg viewBox="0 0 24 24" style={{ width: '50px', height: '50px' }}><path d={mdiInstagram} /></svg></i></a>
                        <a href="https://www.linkedin.com/in/hardip-jandu-325526283/"><i className="icon"><svg viewBox="0 0 24 24" style={{ width: '50px', height: '50px' }}><path d={mdiLinkedin} /></svg></i></a>
                    </li>
                </ul>
                <p className="card-text">Or you can send me a message below:</p>
            </div>

        </div>

    )
}

