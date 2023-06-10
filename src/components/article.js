import './article.css'
function Article({title,description,link,image}){
    return(
      <>
    <div className="article-card">
    <img src={image} alt="Article Image" />
    <div className="article-details">
      <h3 className="article-title">{title}</h3>
      <p className="article-description">
        {description}
      </p>
      <a href={link} target="_blank" className="article-link">
        Read More
      </a>
    </div>
  </div> 
  </>
    );  
}
export default Article;