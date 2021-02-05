import React, { Component } from "react";
import { Button, Divider, Form, Header, Radio } from "semantic-ui-react";

export class MainBlok extends Component {
  render() {
    return (
      <div>
        <Header as="h5" className="headerNav">
          Blok Tanah
          <Header.Subheader>Set maps display</Header.Subheader>
        </Header>
        <Divider />
        <div className="sidebar-content">
          <Form>
            <Form.Field>
              <Radio
                label="Tampilkan Semua Blok"
                checked
                toggle
                type="checkbox"
              />
            </Form.Field>
            <Form.Field>
              <Radio label="Lahan Pemukiman" toggle type="checkbox" />
            </Form.Field>
            <Form.Field>
              <Radio label="Lahan Pertanian" toggle type="checkbox" />
            </Form.Field>
            <Form.Field>
              <Radio label="Lahan Kosong" toggle type="checkbox" />
            </Form.Field>
            <Form.Field>
              <Radio label="Lahan Kas Desa" toggle type="checkbox" />
            </Form.Field>
          </Form>
          <Divider />
          <Form>
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
