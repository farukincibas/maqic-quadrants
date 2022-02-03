import React, { useContext, useState } from 'react';
import { Circle, Container, Label } from './index.styles';
import { Context } from '../../../../store/context';
import { ActionTypes, Company } from '../../../../store/reducer';


interface CompanyProps {
  company: Company;
}

const Point: React.FC<CompanyProps> = ({ company }) => {
  const { dispatch } = useContext(Context);
  const [isDragging, setIsDragging] = useState(false);

  const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
    const parent = (e.target as HTMLDivElement).parentElement!.getBoundingClientRect();

    const updatedCompany = {
      ...company,
      ability: -((e.clientY - parent.y - 500) / 5).toFixed(2),
      vision: +((e.clientX - parent.x) / 5).toFixed(2),
    };
    dispatch({ type: ActionTypes.updateCompany, payload: updatedCompany });
  };



  return (
    <>
      <Container
        style={{ bottom: `${company.ability}%`, left: `${company.vision}%` }}
        draggable
        onDrag={handleDrag}
        onDragOver={(e) => e.preventDefault()}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={() => setIsDragging(false)}
      >
        <Label>{company.label}</Label>
        <Circle  style={{ bottom: `${company.ability}%`, left: `${company.vision}%`,visibility: `${isDragging ? 'visible' : 'hidden'}` }}></Circle>
      </Container>

      
    </>
  );
};

export default Point;