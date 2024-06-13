import { useState, useCallback } from 'react';
import Courses from '../../components/Courses';
import Error from '../../components/Error';
import Loading from '../../components/Loading';
import Topics from '../../components/Topics';
import { ALL } from '../../helpers';
import { useFetchData, useFilterCourses, useTags } from '../../hooks';

const HomePage = () => {
  const [activeTag, setActiveTag] = useState(ALL);
  const { isLoading, isError, storeData } = useFetchData();
  const filteredCourses = useFilterCourses(storeData, activeTag);

  const allTags = useTags(storeData, filteredCourses);

  const handleClick = useCallback((tag: string) => setActiveTag(tag), []);

  if (isError) {
    return <Error />;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Topics allTags={allTags} activeTag={activeTag} onClickTag={handleClick} />
      <Courses courses={filteredCourses} />
    </>
  );
};

export default HomePage;
