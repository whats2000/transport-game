import React from 'react';
import styled from 'styled-components';
import { City as CityClass } from '../../game/City.ts';

const CityStyled = styled.div<{ gridColumn: string; gridRow: string }>`
  width: 30px;
  height: 30px;
  background-color: #4d96ff;
  border-radius: 3px;
  grid-column: ${({ gridColumn }) => gridColumn};
  grid-row: ${({ gridRow }) => gridRow};
`;

const City: React.FC<{ city: CityClass }> = ({ city }) => {
  return <CityStyled gridColumn={city.gridColumn} gridRow={city.gridRow} />;
};

export default City;
