import { useEffect, useState, useRef, useMemo, useCallback } from "react"
import { Course as CourseData, getAllCourses } from "../../api";
import { ALL } from "../../helpers";
import Courses from "../../components/Courses";
import Topics from "../../components/Topics";
import Error from "../../components/Error";
import Loading from "../../components/Loading";

const HomePage = () => {
  const [courses, setCourses] = useState<CourseData[]>([]);
  const [activeTag, setActiveTag] = useState(ALL);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const storeData = useRef<CourseData[]>([])

  const fetchData = async () => {
    const data = await getAllCourses();

    if (!data) {
      setIsError(true);
      return
    }

    setCourses(data);
    storeData.current = data;
    setIsLoading(false);
  }

  const filterData = () => {
    if (activeTag === ALL) {
      setCourses(storeData.current);
      return
    }

    const filteredCourses = storeData.current.filter(({ tags }) => tags.includes(activeTag));
    setCourses(filteredCourses);
  }

  const allTags = useMemo(() => {
    const allTopics = courses.reduce<string[]>((acc, topic) => [...acc, ...topic.tags], [ALL]);
    return [...new Set(allTopics)];
  }, [storeData.current]);

  const handleClick = useCallback((tag: string) => setActiveTag(tag), []);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    filterData();
  }, [activeTag])

  if (isError) {
    return <Error />
  }

  if (isLoading) {
    return <Loading />
  }

  return (
    <>
      <Topics allTags={allTags} activeTag={activeTag} onClickTag={handleClick} />
      <Courses courses={courses} />
    </>
  )
}

export default HomePage;
