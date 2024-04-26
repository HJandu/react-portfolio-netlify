// import Icon from '@mdi/react';
// import { mdiLanguagePython, mdiLanguageHtml5, mdiLanguageJavascript,  } from '@mdi/js';

import React from 'react';
import Marquee from 'react-fast-marquee';
import Img1 from '../../assets/images/anaconda.png';
import Img2 from '../../assets/images/api.png';
import Img3 from '../../assets/images/aws1.png';
import Img4 from '../../assets/images/boot1.png';
import Img5 from '../../assets/images/css1.png';
import Img6 from '../../assets/images/excel1.png';
import Img7 from '../../assets/images/github.png';
import Img8 from '../../assets/images/gitlab.png';
import Img9 from '../../assets/images/Google_Colab.png';
import Img10 from '../../assets/images/html1.png';
import Img11 from '../../assets/images/js1.png';
import Img12 from '../../assets/images/jupyter.png';
import Img13 from '../../assets/images/mat.png';
import Img14 from '../../assets/images/mongodb.png';
import Img15 from '../../assets/images/mysql-new.png';
import Img17 from '../../assets/images/numpy.png';
import Img18 from '../../assets/images/Pandas.png';
import Img19 from '../../assets/images/postgressql.png';
import Img20 from '../../assets/images/python.png';
import Img22 from '../../assets/images/sql-c.png';
import Img23 from '../../assets/images/sqlite.png';
import Img24 from '../../assets/images/stack.png';
import Img25 from '../../assets/images/tensorflow.png';
import Img27 from '../../assets/images/tableau1.png';
import './skills.css';

function SkillsData() {
    return (
      <div>        
            <Marquee direction="left" speed={100} delay={0}>
                <img src={Img1} alt="anaconda" className="h-15"/>
                <img src={Img2} alt="api" className="h-15"/>
                <img src={Img3} alt="aws" className="h-15"/>
                <img src={Img4} alt="bootstrap" className="h-15"/>
                <img src={Img5} alt="css" className="h-15"/>
                <img src={Img6} alt="excel" className="h-15"/>
                <img src={Img7} alt="github" className="h-15"/>
                <img src={Img8} alt="gitlab" className="h-15"/>
                <img src={Img9} alt="google colab" className="h-15"/>
                <img src={Img10} alt="html" className="h-15"/>
                <img src={Img11} alt="javascript" className="h-15"/>
                <img src={Img12} alt="jupyter notebook" className="h-15"/>
                <img src={Img13} alt="matplotlib" className="h-15"/>
                <img src={Img14} alt="mongodb" className="h-15"/>
                <img src={Img15} alt="mysql" className="h-15"/>
                <img src={Img17} alt="numpy" className="h-15"/>
                <img src={Img18} alt="pandas" className="h-15"/>
                <img src={Img19} alt="postgresql" className="h-15"/>
                <img src={Img20} alt="python" className="h-15"/>
                <img src={Img22} alt="sql" className="h-15"/>
                <img src={Img23} alt="sqlite" className="h-15"/>
                <img src={Img24} alt="stack" className="h-15"/>
                <img src={Img25} alt="tensorflow" className="h-15"/>
                <img src={Img27} alt="tableau" className="h-15"/>
            </Marquee>
        </div>
    )
}

export default SkillsData

