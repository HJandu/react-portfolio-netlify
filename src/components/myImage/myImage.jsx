import myPicture from '../../assets/images/my_image.png';
import './myImage.css';

export default function MyImage() {
  return <img src={myPicture} alt="picture of Hardip Jandu" className='pic'/>;
};