import './education.css'

function Education ({institute,title,duration,percentage}) {
  return (
    <div className="education-section">
  <ul className="education-list">
    <li className="education-card">
      <div className="education-info">
        <h3 className="institute-name">{institute}</h3>
        <p className="course-name">{title}</p>
        <p className="duration">{duration}</p>
        <p className="percentage">{percentage}</p>
      </div>
    </li>
  </ul>
</div>
  )
}
export default Education;