import React from 'react';
import styled from 'styled-components';
import { Path as PathClass } from '../../game/Path.ts';
import { GameObject } from '../../game/GameObject.ts';

const PathSegmentStyled = styled.div<{ gridColumn: string; gridRow: string }>`
  width: 10px;
  height: 10px;
  background-color: #ccc;
  grid-column: ${({ gridColumn }) => gridColumn};
  grid-row: ${({ gridRow }) => gridRow};
`;

const Path: React.FC<{ pathObj: PathClass; existingObjects: GameObject[] }> = ({
  pathObj,
  existingObjects,
}) => {
  const pathSegments = pathObj.generatePath(existingObjects);

  return (
    <>
      {pathSegments.map((segment, index) => (
        <PathSegmentStyled
          key={index}
          gridColumn={segment.gridColumn}
          gridRow={segment.gridRow}
        />
      ))}
    </>
  );
};

export default Path;
