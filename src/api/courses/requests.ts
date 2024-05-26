import axios from 'axios';
import { ResponseStatus } from '../../helpers';
import type { Course } from './model';

export const getAllCourses = async (): Promise<Course[]|null> => {
  try {
    const baseUrl = import.meta.env.VITE_BASE_URL;

    const { data, status } = await axios.get(`${baseUrl}/docs/courses.json`);

    if (status !== ResponseStatus.OK) {
      throw new Error('Something went wrong');
    }

    return data;
  } catch (err) {
    console.error('Error getAllData:', err);
    return null;
  }
};
