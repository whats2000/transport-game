import React from 'react';
import styled from 'styled-components';
import { Server as ServerClass } from '../../game';
import { Tooltip } from 'antd';

const ServerStyled = styled.div<{ x: number; y: number }>`
  width: 55px;
  height: 55px;
  background-color: #ff6b6b;
  border-radius: 3px;
  grid-column: ${({ x }) => x - 1} / span 5;
  grid-row: ${({ y }) => y - 1} / span 5;
`;

const Server: React.FC<{ server: ServerClass }> = ({ server }) => {
  return (
    <Tooltip title={server.render()}>
      <ServerStyled x={server.x} y={server.y} />
    </Tooltip>
  );
};

export default Server;
