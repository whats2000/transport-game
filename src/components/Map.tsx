import React from 'react';
import styled from 'styled-components';

import { City, Path, Router, Server } from './MapComponents';
import {
  City as CityClass,
  GameObject,
  Path as PathClass,
  Router as RouterClass,
  Server as ServerClass,
} from '../game';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(51, 10px);
  grid-template-rows: repeat(51, 10px);
  gap: 1px;
  background-color: #333;
`;

const Map: React.FC = () => {
  const cities = [
    new CityClass('City 1', '5 / span 3', '10 / span 3'),
    new CityClass('City 2', '45 / span 3', '10 / span 3'),
    new CityClass('City 3', '5 / span 3', '40 / span 3'),
    new CityClass('City 4', '45 / span 3', '40 / span 3'),
    new CityClass('City 5', '25 / span 3', '48 / span 3'),
  ];

  const server = new ServerClass('24 / span 5', '1 / span 5');

  const routers = [
    new RouterClass('cross', '26 / span 1', '11 / span 1'),
    new RouterClass('t', '26 / span 1', '41 / span 1'),
    new RouterClass('t', '16 / span 1', '11 / span 1'),
    new RouterClass('t', '16 / span 1', '41 / span 1'),
  ];

  // Create paths between objects
  const paths = [
    new PathClass(server, routers[0]),
    new PathClass(routers[0], routers[1]),
    new PathClass(routers[0], routers[2]),
    new PathClass(routers[0], cities[1]),
    new PathClass(routers[1], cities[3]),
    new PathClass(cities[4], routers[1]),
    new PathClass(routers[2], cities[0]),
    new PathClass(routers[2], routers[3]),
    new PathClass(routers[3], cities[2]),
  ];

  // Generate path coordinates, ensuring no collisions with existing objects
  const existingObjects: GameObject[] = [...cities, server, ...routers];

  return (
    <Grid>
      {paths.map((pathObj, index) => (
        <Path key={index} pathObj={pathObj} existingObjects={existingObjects} />
      ))}

      <Server server={server} />

      {cities.map((city, index) => (
        <City key={index} city={city} />
      ))}

      {routers.map((router, index) => (
        <Router key={index} router={router} />
      ))}
    </Grid>
  );
};

export default Map;
