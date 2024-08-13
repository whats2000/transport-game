import React from 'react';
import styled from 'styled-components';
import { Server as ServerClass } from '../../game/Server.ts';
import { Tooltip } from 'antd';

const ServerStyled = styled.div<{ gridColumn: string; gridRow: string }>`
  width: 50px;
  height: 50px;
  background-color: #ff6b6b;
  border-radius: 3px;
  grid-column: ${({ gridColumn }) => gridColumn};
  grid-row: ${({ gridRow }) => gridRow};
`;

const Server: React.FC<{ server: ServerClass }> = ({ server }) => {
  return (
    <Tooltip title={server.render()}>
      <ServerStyled gridColumn={server.gridColumn} gridRow={server.gridRow} />
    </Tooltip>
  );
};

export default Server;
