import React, { Component } from "react";
import { Header, Icon, Segment } from "semantic-ui-react";
import { ContextType } from "../Context";

export default class NotFound extends Component {
  static contextType = ContextType;
  componentDidMount() {
    this.context.setTitle("Halaman Tidak Tersedia");
    this.context.setSidebar("main-menu");
    this.context.setSlider(false);
  }

  componentWillUnmount() {
    this.context.setTitle("Peta App");
    this.context.setSidebar("main-menu");
    this.context.setSlider(true);
  }

  render() {
    return (
      <Segment vertical style={{ paddingTop: "40vh" }}>
        <Header as="h1" icon textAlign="center">
          <Icon name="compass" circular />
          <Header.Content>Error 404</Header.Content>
          <Header.Subheader>
            Mohon priksa kembali URL anda !!!
            <br />
            Atau pilih menu pada samping halaman ini
          </Header.Subheader>
        </Header>
      </Segment>
    );
  }
}
