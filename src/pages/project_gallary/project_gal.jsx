import projects from "../../assets/projects.json";
// single card component imported here
import ProjectSingular from "../../components/project/project";
export default function ProjectGal() {
    return(
        <div>
            <h1>Project Gallery</h1>
            <div className="row" >
                {projects.map((project)=>(
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
        </div>
    )
}