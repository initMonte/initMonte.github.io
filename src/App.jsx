import { Route, Routes, Link, useParams } from 'react-router-dom'
import './App.css';
import { Home } from './pages/Home'

const Projects = () => {
  const projects = [
    'first-page',
    'Adidas-Dummy-page',
    'portfolio-2024',
    'my-home'
  ]

  return (
    <div>
    <ul>
      {projects.map(project => (
        <li key={project}><Link to={`/projects/${project}`}>{project}</Link></li>
      ))}
      </ul>
    </div>
  )
}

const Project = () => {
  const { project } = useParams()

  return (
    <div>
      {project}
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/projects/:project' element={<Project />} />
      <Route path='*' element={<h1>Not Found</h1>} />
    </Routes>
  );
}

export default App;
