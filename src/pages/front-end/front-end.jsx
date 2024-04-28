import { motion } from "framer-motion";
// import projects from "../../../public/assets/projects2.json";
import ProjectSingular from "../../components/project/project";
import SkillsFront from "../../components/Skills/SkillsFront";
import ProjectSlider from "../../components/ProjectSlider/ProjectSlider";

export default function FrontEnd() {
    return (
        <div>
            <SkillsFront />
            <ProjectSlider />
            {/* <motion.div
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                exit={{ scaleY: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1>Front-End Developer Projects</h1>
                <div className="row" >
                    {projects.map((project) => (
                        <div className="col-md-4 col-sm-12" key={project.id}>
                            <ProjectSingular
                                name={project.name}
                                description={project.description}
                                image={project.image}
                                repo={project.repo}
                                deployed={project.deployed}
                            />
                        </div>

                    ))}

                </div>
            </motion.div> */}
        </div>
    )
}