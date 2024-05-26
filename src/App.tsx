import { useEffect, useState, useRef } from "react"
import { Course as CourseData, getAllCourses } from "./api";
import { ALL } from "./helpers/constants";
import Courses from "./components/Courses";
import Topics from "./components/Topics";
import './styles.scss';

const App = () => {
  const [courses, setCourses] = useState<CourseData[]>([]);
  const [isError, setIsError] = useState(false);
  const [allTags, setAllTags] = useState<string[]>([]);
  const [activeTag, setActiveTag] = useState(ALL);

  const storeData = useRef<CourseData[]>([])

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

    collectTopics(data);
    setCourses(data);
    storeData.current = data;
  }

  const filterData = () => {
    if (activeTag === ALL) {
      setCourses(storeData.current);
      return
    }

    const filteredCourses = storeData.current.filter(({ tags }) => tags.includes(activeTag));
    setCourses(filteredCourses);
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    filterData();
  }, [activeTag])

  if (isError) {
    return (
      <div>Something went wrong :\</div>
    )
  }

  return (
    <div className="wrapper">
      <Topics allTags={allTags} activeTag={activeTag} onClickTag={(tag) => setActiveTag(tag)} />
      <Courses courses={courses} />
    </div>
  )
}

export default App;
