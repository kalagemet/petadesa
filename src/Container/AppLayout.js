import React, { useEffect, useState } from "react";
import {
  Button,
  Grid,
  Header,
  Icon,
  Menu,
  Search,
  Segment,
  Sidebar,
} from "semantic-ui-react";
import { Consumer } from "../Context";
import { SideBar } from "../SideBar/SideBar";
import "../Style/style.scss";
import { MenuBar } from "./MenuBar";

export function AppLayout(props) {
  return (
    <Consumer>
      {({ title, slider, setSlider }) => (
        <div className="app-layout">
          <MenuBar />
          <div className="content-panel">
            <Sidebar.Pushable>
              <Sidebar
                className="sidebar-panel"
                as={Menu}
                animation="overlay"
                direction="left"
                icon="labeled"
                visible={slider}
                // onHide={()=>setSlider(false)}
                vertical
                // width='wide'
              >
                <SideBar />
              </Sidebar>
              <Sidebar.Pusher>
                <Segment className="header-maps">
                  <Grid>
                    <Grid.Row columns="three" stretched>
                      <Grid.Column
                        width={3}
                        verticalAlign="middle"
                        className="header-button"
                      >
                        <Button onClick={() => setSlider(!slider)} fluid icon>
                          <Icon size="large" name="th list" />
                        </Button>
                      </Grid.Column>
                      <Grid.Column textAlign="center">
                        <Header as="h3" style={{ paddingTop: "10px" }} dividing>
                          {title}
                        </Header>
                      </Grid.Column>
                      <Grid.Column
                        floated="right"
                        verticalAlign="middle"
                        className="cari-header"
                      >
                        <Search
                          placeholder="cari..."
                          input={{ icon: "search", iconPosition: "left" }}
                          loading={false}
                        />
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                </Segment>
                <Segment vertical className="maps-canvas">
                  {props.children}
                </Segment>
              </Sidebar.Pusher>
            </Sidebar.Pushable>
          </div>
        </div>
      )}
    </Consumer>
  );
}
