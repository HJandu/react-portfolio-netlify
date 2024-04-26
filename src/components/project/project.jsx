import './project.css';
import { motion } from 'framer-motion';

export default function ProjectSingular({ name, description, image, repo, deployed }) {
  return (
    <motion.div
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.5 },
      }} 
      style={{ height: '100%', width: '100%' }} 
      >
      <div className="card project h-100">
        <img src={image} className="card-img-top img-fluid" alt={name} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
          <a href={repo} className="btn btn-primary me-2">Github</a>
          <a href={deployed} className="btn btn-primary">Deployed App</a>
        </div>
      </div>
    </motion.div>
  )
}