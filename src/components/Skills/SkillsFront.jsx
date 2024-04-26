
import React from 'react';
import Marquee from 'react-fast-marquee';

import Img2 from '../../assets/images/api.png';
import Img4 from '../../assets/images/boot1.png';
import Img5 from '../../assets/images/css1.png';
import Img7 from '../../assets/images/github.png';
import Img8 from '../../assets/images/gitlab.png';
import Img10 from '../../assets/images/html1.png';
import Img11 from '../../assets/images/js1.png';
import Img16 from '../../assets/images/npm-color.png';
import Img21 from '../../assets/images/react-c.png';
import Img24 from '../../assets/images/stack.png';
import Img26 from '../../assets/images/trel.png';
import Img27 from '../../assets/images/node.png';
import Img28 from '../../assets/images/materialize.png';
import './skills.css';

function SkillsFront() {
    return (
      <div>        
            <Marquee direction="left" speed={60} delay={0}>                
                <img src={Img2} alt="api" className="h-15"/>
                <img src={Img4} alt="bootstrap" className="h-15"/>
                <img src={Img5} alt="css" className="h-15"/>
                <img src={Img7} alt="github" className="h-15"/>
                <img src={Img8} alt="gitlab" className="h-15"/>
                <img src={Img10} alt="html" className="h-15"/>
                <img src={Img11} alt="javascript" className="h-15"/>
                <img src={Img16} alt="npm" className="h-15"/>
                <img src={Img21} alt="react" className="h-15"/>
                <img src={Img24} alt="stack" className="h-15"/>
                <img src={Img26} alt="trello" className="h-15"/>
                <img src={Img27} alt="nodeJs" className="h-15"/>
                <img src={Img28} alt="materialize" className="h-15"/>
            </Marquee>
        </div>
    )
}

export default SkillsFront

