import React from 'react';
import styled from 'styled-components';

import { City, Path, Router, Server } from './MapComponents';
import {
  City as CityClass,
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
    new CityClass('City 1', 5, 10),
    new CityClass('City 2', 45, 10),
    new CityClass('City 3', 5, 40),
    new CityClass('City 4', 45, 40),
    new CityClass('City 5', 25, 48),
    new CityClass('City 5', 16, 48),
  ];

  const server = new ServerClass(25, 2);

  const routers = [
    new RouterClass('cross', 25, 10),
    new RouterClass('t', 25, 40),
    new RouterClass('t', 16, 10),
    new RouterClass('t', 16, 40),
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
    new PathClass(cities[5], routers[3]),
  ];

  return (
    <Grid>
      {paths.map((pathObj, index) => (
        <Path key={index} pathObj={pathObj} />
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
