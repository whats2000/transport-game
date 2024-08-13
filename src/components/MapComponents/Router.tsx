import React from 'react';
import styled from 'styled-components';
import { Router as RouterClass } from '../../game/Router.ts';
import { Tooltip } from 'antd';

const RouterStyled = styled.div<{
  x: number;
  y: number;
  backgroundColor: string;
}>`
  width: 10px;
  height: 10px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  grid-column: ${({ x }) => x + 1} / span 1;
  grid-row: ${({ y }) => y + 1} / span 1;
`;

const Router: React.FC<{ router: RouterClass }> = ({ router }) => {
  const backgroundColor = router.type === 'cross' ? '#f1c40f' : '#27ae60';
  return (
    <Tooltip title={router.render()}>
      <RouterStyled
        x={router.x}
        y={router.y}
        backgroundColor={backgroundColor}
      />
    </Tooltip>
  );
};

export default Router;
