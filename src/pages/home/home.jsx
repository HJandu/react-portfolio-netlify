import React from 'react';
import Hero from '../../components/Hero/Hero';
import Experience from '../../components/Experience/Experience';
import SkillsMain from '../../components/Skills/skill';
import MyImage from '../../components/myImage/myImage';
import { motion } from 'framer-motion';
import './home.css';

export default function Home() {
    return (
        <div>
            {/* <h1>Home</h1> */}
            <SkillsMain />
            <div className="home">
                <motion.div
                    className="name"
                    initial={{
                        x: -300,
                        scale: 0.5,
                    }}
                    animate={{
                        x: 0,
                        scale: 1,
                    }}
                    transition={{ duration: 1 }}
                >
                    Hardip <font color="yellow">Jandu</font>   <MyImage/>
                </motion.div>
                <motion.div
                    class="desc"
                    initial={{
                        x: 300,
                        scale: 0.5,
                    }}
                    animate={{
                        x: 0,
                        scale: 1,
                    }}
                    transition={{ duration: 1 }}
                >
                    <font>Data Analyst</font> with over a decade <font>Youtube</font> Teacher based
                    in Wolverhampton
                    
                </motion.div>
            </div>
            {/* <Hero/> */}
            <Experience />
        </div>
    )
}