import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Header, Icon, Menu, Segment } from "semantic-ui-react";

export function MenuBar(params) {
  let path = useLocation().pathname;

  return (
    <Segment vertical className="menu-bar">
      <Header as="h3" dividing>
        <Icon name="map" />
        Peta Desa App
        <Header.Subheader>Display the village</Header.Subheader>
      </Header>
      <Menu.Item active={path === "/peta1" ? true : false}>
        <Link to="/peta1">
          <Icon name="th" size="large" />
          Peta Marker Blok
        </Link>
      </Menu.Item>
      <Menu.Item active={path === "/peta2" ? true : false}>
        <Link to="/peta2">
          <Icon name="map pin" size="large" />
          Peta Titik
        </Link>
      </Menu.Item>
      <Menu.Item active={path === "/peta3" ? true : false}>
        <Link to="/peta3">
          <Icon name="chart area" size="large" />
          Peta Cluster
        </Link>
      </Menu.Item>
      <Menu.Item active={path === "/peta4" ? true : false}>
        <Link to="/peta4">
          <Icon name="road" size="large" />
          Peta Jalan
        </Link>
      </Menu.Item>
      <Menu.Item active={path === "/peta5" ? true : false}>
        <Link to="/peta5">
          <Icon name="tint" size="large" />
          Peta Sungai
        </Link>
      </Menu.Item>
    </Segment>
  );
}
