import { useEffect, useState } from "react"
import { Course as CourseData, getAllCourses } from "../../api";
import Course from "../Course";
import './styles.scss'

const Courses = () => {
  const [courses, setCourses] = useState<CourseData[]>([]);
  const [isError, setIsError] = useState(false);

  const fetchData = async () => {
    const data = await getAllCourses();

    if (!data) {
      setIsError(true);
      return
    }

    setCourses(data)
  }

  useEffect(() => {
    fetchData();
  }, [])

  if (isError) {
    return (
      <div>Something went wrong :\</div>
    )
  }

  return (
    <div className="courses">
      {courses.map(({ id, name, image, bgColor, tags }) => (
        <Course
          key={id}
          name={name}
          image={image}
          bgColor={bgColor}
        />
      ))}
    </div>
  )
}

export default Courses;
