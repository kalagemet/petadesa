import React, { Component } from "react";
import {
  Button,
  Divider,
  Grid,
  Header,
  Icon,
  List,
  Table,
  Image,
} from "semantic-ui-react";
import { ContextType } from "../Context";

export class DetailRumah extends Component {
  static contextType = ContextType;
  render() {
    return (
      <div>
        <Header as="h5" className="headerNav">
          Rumah Warga
          <Header.Subheader>Detail informasi</Header.Subheader>
        </Header>
        <Divider />
        <div className="sidebar-content">
          <Grid>
            <Grid.Row columns="two">
              <Grid.Column>
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
                    <List.Icon
                      name="move"
                      size="large"
                      verticalAlign="middle"
                    />
                    <List.Content>
                      <List.Header as="a">120 m2</List.Header>
                      <List.Description>Luas Lahan</List.Description>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Icon
                      name="home"
                      size="large"
                      verticalAlign="middle"
                    />
                    <List.Content>
                      <List.Header as="a">100 m2</List.Header>
                      <List.Description>Luas Bangunan</List.Description>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Icon
                      name="map pin"
                      size="large"
                      verticalAlign="middle"
                    />
                    <List.Content>
                      <List.Header as="a">Detail Alamat</List.Header>
                      <List.Description>
                        RT 003 RW 004, Dusun Randu Bintang
                      </List.Description>
                    </List.Content>
                  </List.Item>
                </List>
              </Grid.Column>
              <Grid.Column>
                <Image
                  src="https://react.semantic-ui.com/images/wireframe/square-image.png"
                  size="medium"
                  rounded
                />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns="two">
              <Grid.Column>
                <Table celled striped>
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell>Nama</Table.HeaderCell>
                      <Table.HeaderCell>NIK</Table.HeaderCell>
                      <Table.HeaderCell>NO KK</Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>
                    <Table.Row>
                      <Table.Cell collapsing>
                        <Icon name="user" /> Abdulloh bin Toha
                      </Table.Cell>
                      <Table.Cell>3303031111870001</Table.Cell>
                      <Table.Cell collapsing>3303031312040034</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell collapsing>
                        <Icon name="user" /> Abdulloh bin Toha
                      </Table.Cell>
                      <Table.Cell>3303031111870001</Table.Cell>
                      <Table.Cell collapsing textAlign="right">
                        3303031312040034
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell collapsing>
                        <Icon name="user" /> Abdulloh bin Toha
                      </Table.Cell>
                      <Table.Cell>3303031111870001</Table.Cell>
                      <Table.Cell collapsing>3303031312040034</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell collapsing>
                        <Icon name="user" /> Abdulloh bin Toha
                      </Table.Cell>
                      <Table.Cell>3303031111870001</Table.Cell>
                      <Table.Cell collapsing>3303031312040034</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell collapsing>
                        <Icon name="user" /> Abdulloh bin Toha
                      </Table.Cell>
                      <Table.Cell>3303031111870001</Table.Cell>
                      <Table.Cell collapsing>3303031312040034</Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table>
              </Grid.Column>
              <Grid.Column>
                <Table celled striped>
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell>Kepala Keluarga</Table.HeaderCell>
                      <Table.HeaderCell>No KK</Table.HeaderCell>
                      <Table.HeaderCell>Bantuan</Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>
                    <Table.Row>
                      <Table.Cell collapsing>
                        <Icon name="users" /> Abdulloh bin Toha
                      </Table.Cell>
                      <Table.Cell>3303031111870001</Table.Cell>
                      <Table.Cell collapsing>DTKS, DD, PKH</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell collapsing>
                        <Icon name="users" /> Toha bin Abdulloh
                      </Table.Cell>
                      <Table.Cell>3303031111870001</Table.Cell>
                      <Table.Cell collapsing>
                        <i>Tidak ada</i>
                      </Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
        <Divider />
        <Button.Group floated="right">
          <Button
            labelPosition="right"
            icon="pencil alternate"
            content="Edit Detail"
            basic
            primary
          />
          <Button
            labelPosition="right"
            icon="close"
            content="Close"
            basic
            color="red"
            onClick={() => this.context.setSidebar("main-rumah")}
          />
        </Button.Group>
      </div>
    );
  }
}
