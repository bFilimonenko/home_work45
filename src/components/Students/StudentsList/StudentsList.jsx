import { StudentCard } from '../StudentsCard/StudentCard.jsx';
import { StyledBox } from './styledComponents.js';

export const StudentsList = ({ items }) => {
  return (
    <StyledBox>
      {items.map((item) => (
        <StudentCard key={item.id} {...item} />
      ))}
    </StyledBox>
  );
};
