import './style.css';
import heroImage from '../../assets/images/laptop_notebook.jpg'

function Hero() {
    return (
      <div className="hero-container">
            <div className="hero-image"> 
                <img src={heroImage} className='hero' alt="Hero"/>
                <div className="hero-text">
                    <h1>Welcome to LyricLift, the home of international music</h1>
                    <p>Songs from around the world, all translated into English</p>
                </div>
            </div>
        </div>
      
    );
  }
  
  export default Hero;
  // <div className="hero text-center" >
               
  //     </div>