import projects from "../data_analytics/projects.js";
import ProjectSingular from "../../components/project/project";
import SkillsData from "../../components/Skills/SkillsData";
import { motion } from "framer-motion";

export default function DataAnalytics() {
    return (
        <div>
            <SkillsData />
            <h1>Data Analytics Projects</h1>
            <motion.div
                animate={{
                    scale: [2, 1],
                    rotate: [90, 0],
                }}
                transition={{
                    duration: 0.8,
                    ease: "easeInOut",
                }}
                className="projects"
            >
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
            </motion.div>
        </div>
    )
}