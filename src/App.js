import Project from './components/project';
import Article from './components/article';
import './App.css';
import {project1,project2,project3} from './User/userprojects'; 
import {article1,article2,article3} from './User/userarticles';
function App() {
  return (
    <>
    <h1>Projects</h1>
    <div className='Projects'>
    <Project {...project1} />
    <Project {...project2} />
    <Project {...project3} />
    </div>
    <h1>Articles</h1>
    <div className='Articles'>
    <Article {...article1}/>
    <Article {...article2}/>
    <Article {...article3}/>
    </div>
    </>
  );
}

export default App;
