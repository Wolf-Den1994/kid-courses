import { useEffect, useState } from "react"
import { Course as CourseData, getAllCourses } from "./api";
import { ALL } from "./helpers/constants";
import Courses from "./components/Courses";
import Topics from "./components/Topics";
import './styles.scss';

const App = () => {
  const [courses, setCourses] = useState<CourseData[]>([]);
  const [isError, setIsError] = useState(false);
  const [allTags, setAllTags] = useState<string[]>([]);

  const collectTopics = (data: CourseData[]) => {
    const allTopics = data.reduce<string[]>((acc, topic) => [...acc, ...topic.tags], [ALL]);
    const uniqTopics = [...new Set(allTopics)];
    setAllTags(uniqTopics);
  }

  const fetchData = async () => {
    const data = await getAllCourses();

    if (!data) {
      setIsError(true);
      return
    }

    collectTopics(data)
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
    <div className="wrapper">
      <Topics allTags={allTags} />
      <Courses courses={courses} />
    </div>
  )
}

export default App;
