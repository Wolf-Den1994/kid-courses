import type { Course as CourseData } from '../../api'
import './styles.scss'

type CourseProps = Omit<CourseData, 'id'|'tags'>

const Course = ({ name, image, bgColor }: CourseProps) => {
  return (
    <div className="course">
      <div className="course__picture" style={{ backgroundColor: bgColor }}>
        <img className="course__image" src={image} alt={name} />
      </div>
      <div className="course__name">{name}</div>
    </div>
  )
}

export default Course;
