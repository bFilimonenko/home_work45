import { CourseCard } from '../CourseCard/CourseCard.jsx';
import { StyledBox } from './styledComponents.js';

export const CoursesList = ({ items}) => {
  return (
    <StyledBox>
      {items.map((item) => (
        <CourseCard key={item.id} {...item} />
      ))}
    </StyledBox>
  );
};
