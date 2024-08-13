import React from 'react';
import styled from 'styled-components';
import { Path as PathClass } from '../../game';

const PathSegmentStyled = styled.div<{ x: number; y: number }>`
  width: 10px;
  height: 10px;
  background-color: #ccc;
  grid-column: ${({ x }) => x + 1};
  grid-row: ${({ y }) => y + 1};
`;

const Path: React.FC<{ pathObj: PathClass }> = ({ pathObj }) => {
  const pathSegments = pathObj.generatePath();

  return (
    <>
      {pathSegments.map((segment, index) => (
        <PathSegmentStyled key={index} x={segment.x} y={segment.y} />
      ))}
    </>
  );
};

export default Path;
