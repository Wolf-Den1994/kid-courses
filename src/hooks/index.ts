import { useEffect, useMemo, useRef, useState, MutableRefObject } from 'react';
import { Course as CourseData, getAllCourses } from '../api';
import { ALL } from '../helpers';

export const useFetchData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const storeData = useRef<CourseData[]>([]);

  const fetchData = async () => {
    const data = await getAllCourses();

    if (!data) {
      setIsError(true);
      return;
    }

    storeData.current = data;
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { isLoading, isError, storeData };
};

export const useFilterCourses = (storeData: MutableRefObject<CourseData[]>, activeTag: string) =>
  useMemo(() => {
    if (activeTag === ALL) {
      return storeData.current;
    }
    return storeData.current.filter(({ tags }) => tags.includes(activeTag));
  }, [activeTag, storeData.current]);

export const useTags = (storeData: MutableRefObject<CourseData[]>, courses: CourseData[]) =>
  useMemo(() => {
    const allTopics = courses.reduce<string[]>((acc, topic) => [...acc, ...topic.tags], [ALL]);
    return [...new Set(allTopics)];
  }, [storeData.current]);
