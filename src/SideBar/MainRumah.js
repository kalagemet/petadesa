import React, { Component } from "react";
import { Button, Divider, Form, Header, Radio } from "semantic-ui-react";

export class MainRumah extends Component {
  render() {
    return (
      <div>
        <Header as="h5" className="headerNav">
          Titik Rumah
          <Header.Subheader>Set maps display</Header.Subheader>
        </Header>
        <Divider />
        <div className="sidebar-content">
          <Form>
            <Form.Field>
              <Radio label="Tampilkan Semua" checked toggle type="checkbox" />
            </Form.Field>
            <Form.Field>
              <Radio label="Rumah Tak Layak Huni" toggle type="checkbox" />
            </Form.Field>
            <Form.Field>
              <Radio label="Fasilitas Umum" toggle type="checkbox" />
            </Form.Field>
            <Form.Field>
              <Radio label="Toko / Tempat Produksi" toggle type="checkbox" />
            </Form.Field>
            <Form.Field>
              <Radio label="Milik Pemerintah" toggle type="checkbox" />
            </Form.Field>
          </Form>
          <Divider />
          <Form>
            <Form.Field>
              <Radio label="Tampilkan Blok" checked slider type="checkbox" />
            </Form.Field>
            <Form.Field>
              <Radio label="Tampilkan Wilayah RT" slider type="checkbox" />
            </Form.Field>
            <Form.Field>
              <Radio
                label="Tampilkan Wilayah RW"
                checked
                slider
                type="checkbox"
              />
            </Form.Field>
            <Form.Field>
              <Radio label="Tampilkan Wilayah Dusun" slider type="checkbox" />
            </Form.Field>
          </Form>
        </div>
        <Divider />
        <Button
          labelPosition="right"
          icon="chevron right"
          content="Tampilkan"
          basic
          primary
        />
      </div>
    );
  }
}
