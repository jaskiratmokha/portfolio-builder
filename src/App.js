import Project from './components/project';
import Article from './components/article';
import Education from './components/education';
import About from './components/About';
import './App.css';
import Projects from './User/userprojects'; 
import articles from './User/userarticles';
import educations from './User/usereducation';
function App() {
  return (
    <>
    <h1>BRIEF SUMMARY</h1>
    <About Aboutname="Jaskirat" Aboutbio="lorem ipsum lorem ipsum lorem ipsum lorem ipsum" Aboutemail="jsmokha33@gmail.com"></About>
    <h1>EDUCATION</h1>
    <div className='Education'>
      {educations.map((education)=>{
        return <Education {...education} />
      }
      )}
    </div>
    <h1>PROJECTS</h1>
    <div className='Projects'>
      {Projects.map((project)=>{
        return <Project {...project} />
      }
      )}
    </div>
    <h1>ARTICLES</h1>
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
