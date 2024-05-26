import equals from 'array-equal';
import { memo } from 'react';
import type { Course as CourseData } from '../../api';
import Course from '../Course';
import './styles.scss';

type CoursesProps = {
  courses: Omit<CourseData, 'tags'>[]
}

const Courses = ({ courses }: CoursesProps) => (
  <div className="courses">
    {courses.map(({
      id, name, image, bgColor,
    }) => (
      <Course
        key={id}
        name={name}
        image={image}
        bgColor={bgColor}
      />
    ))}
  </div>
);

export default memo(Courses, (prevProps, nextProps) => equals(prevProps.courses, nextProps.courses));
