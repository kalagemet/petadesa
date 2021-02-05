import React, { Component } from "react";
import { Button, Divider, Header, List } from "semantic-ui-react";

export class DetailBlok extends Component {
  render() {
    return (
      <div>
        <Header as="h5" className="headerNav">
          Blok 44
          <Header.Subheader>informasi blok</Header.Subheader>
        </Header>
        <Divider />
        <div className="sidebar-content">
          <List divided selection>
            <List.Item>
              <List.Icon
                name="user outline"
                size="large"
                verticalAlign="middle"
              />
              <List.Content>
                <List.Header as="a">Abdulloh Bin Toha</List.Header>
                <List.Description>Pemilik</List.Description>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon
                name="user outline"
                size="large"
                verticalAlign="middle"
              />
              <List.Content>
                <List.Header as="a">Abdulloh Bin Toha</List.Header>
                <List.Description>Pengelola / Penggarap</List.Description>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon
                name="file alternate outline"
                size="large"
                verticalAlign="middle"
              />
              <List.Content>
                <List.Header as="a">Sertifikat Hak Milik</List.Header>
                <List.Description>Jenis Kepemilikan</List.Description>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name="move" size="large" verticalAlign="middle" />
              <List.Content>
                <List.Header as="a">120 Ha</List.Header>
                <List.Description>Luas Lahan</List.Description>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name="map pin" size="large" verticalAlign="middle" />
              <List.Content>
                <List.Header as="a">Lahan Pertanian</List.Header>
                <List.Description>Kategori Blok</List.Description>
              </List.Content>
            </List.Item>
          </List>
        </div>
        <Divider />
        <Button
          labelPosition="right"
          icon="pencil alternate"
          content="Edit Blok"
          basic
          primary
        />
      </div>
    );
  }
}
