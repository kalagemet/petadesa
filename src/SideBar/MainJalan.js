import React, { Component } from "react";
import { Button, Divider, Form, Header, Radio } from "semantic-ui-react";

export class MainJalan extends Component {
  render() {
    return (
      <div>
        <Header as="h5" className="headerNav">
          Jalan
          <Header.Subheader>Set maps display</Header.Subheader>
        </Header>
        <Divider />
        <div className="sidebar-content">
          <Form>
            <Form.Field>
              <Radio label="Semua Rute" checked toggle type="checkbox" />
            </Form.Field>
            <Form.Field>
              <Radio label="Jalan Desa" toggle type="checkbox" />
            </Form.Field>
            <Form.Field>
              <Radio label="Jalan Non Desa" toggle type="checkbox" />
            </Form.Field>
            <Form.Field>
              <Radio label="Jalan Tani" toggle type="checkbox" />
            </Form.Field>
            <Form.Field>
              <Radio label="Rute Gang / Jalan Kecil" toggle type="checkbox" />
            </Form.Field>
            <Form.Field>
              <Radio
                label="Persebaran Bangunan Tidak Layak"
                toggle
                type="checkbox"
              />
            </Form.Field>
            <Form.Field>
              <Radio
                label="Persebaran Jalan Tidak Layak"
                toggle
                type="checkbox"
              />
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
