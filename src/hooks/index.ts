import { useEffect, useMemo, useRef, useState, Dispatch, MutableRefObject, SetStateAction } from 'react';
import { Course as CourseData, getAllCourses } from '../api';
import { ALL } from '../helpers';

export const useFetchData = () => {
  const [courses, setCourses] = useState<CourseData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const storeData = useRef<CourseData[]>([]);

  const fetchData = async () => {
    const data = await getAllCourses();

    if (!data) {
      setIsError(true);
      return;
    }

    setCourses(data);
    storeData.current = data;
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { courses, setCourses, isLoading, isError, storeData };
};

export const useFilterCourses = (
  storeData: MutableRefObject<CourseData[]>,
  activeTag: string,
  setCourses: Dispatch<SetStateAction<CourseData[]>>,
) => {
  useEffect(() => {
    if (activeTag === ALL) {
      setCourses(storeData.current);
    } else {
      const filteredCourses = storeData.current.filter(({ tags }) => tags.includes(activeTag));
      setCourses(filteredCourses);
    }
  }, [activeTag]);
};

export const useTags = (storeData: MutableRefObject<CourseData[]>, courses: CourseData[]) => {
  const allTags = useMemo(() => {
    const allTopics = courses.reduce<string[]>((acc, topic) => [...acc, ...topic.tags], [ALL]);
    return [...new Set(allTopics)];
  }, [storeData.current]);

  return allTags;
};
