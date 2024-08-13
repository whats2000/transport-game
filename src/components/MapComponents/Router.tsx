import React from 'react';
import styled from 'styled-components';
import { Router as RouterClass } from '../../game/Router.ts';
import { Tooltip } from 'antd';

const RouterStyled = styled.div<{
  gridColumn: string;
  gridRow: string;
  backgroundColor: string;
}>`
  width: 10px;
  height: 10px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  grid-column: ${({ gridColumn }) => gridColumn};
  grid-row: ${({ gridRow }) => gridRow};
`;

const Router: React.FC<{ router: RouterClass }> = ({ router }) => {
  const backgroundColor = router.type === 'cross' ? '#f1c40f' : '#27ae60';
  return (
    <Tooltip title={router.render()}>
      <RouterStyled
        gridColumn={router.gridColumn}
        gridRow={router.gridRow}
        backgroundColor={backgroundColor}
      />
    </Tooltip>
  );
};

export default Router;
