import Project from './components/project';
import Article from './components/article';
import Education from './components/education';
import './App.css';
import Projects from './User/userprojects'; 
import articles from './User/userarticles';
import educations from './User/usereducation';
function App() {
  return (
    <>
    <h1>Education</h1>
    <div className='Education'>
      {educations.map((education)=>{
        return <Education {...education} />
      }
      )}
    </div>
    <h1>Projects</h1>
    <div className='Projects'>
      {Projects.map((project)=>{
        return <Project {...project} />
      }
      )}
    </div>
    <h1>Articles</h1>
    <div className='Articles'>
    {articles.map((article)=>{
      return <Article {...article} />
    }
    )}
    </div>
    </>
  );
}

export default App;
