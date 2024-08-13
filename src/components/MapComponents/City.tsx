import React from 'react';
import styled from 'styled-components';
import { City as CityClass } from '../../game/City.ts';
import { Tooltip } from 'antd';

const CityStyled = styled.div<{ x: number; y: number }>`
  width: 33px;
  height: 33px;
  background-color: #4d96ff;
  border-radius: 3px;
  grid-column: ${({ x }) => x} / span 1;
  grid-row: ${({ y }) => y} / span 1;
`;

const City: React.FC<{ city: CityClass }> = ({ city }) => {
  return (
    <Tooltip title={city.render()}>
      <CityStyled x={city.x} y={city.y} />
    </Tooltip>
  );
};

export default City;
