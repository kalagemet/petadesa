import { Header } from "semantic-ui-react";
import { MainBlok } from "./MainBlok";
import { Consumer } from "../Context";
import { DetailBlok } from "./DetailBlok";
import { MainRumah } from "./MainRumah";
import { DetailRumah } from "./DetailRumah";
import { MainClaster } from "./MainClaster";
import { MainJalan } from "./MainJalan";

export function SideBar() {
  return (
    <Consumer>
      {({ sidebar, setSlider }) => {
        if (sidebar == "main-blok") {
          return <MainBlok />;
        }
        if (sidebar == "detail-blok") {
          return <DetailBlok />;
        }
        if (sidebar == "main-rumah") {
          return <MainRumah />;
        }
        if (sidebar == "detail-rumah") {
          return <DetailRumah />;
        }
        if (sidebar == "main-claster") {
          return <MainClaster />;
        }
        if (sidebar == "main-jalan") {
          return <MainJalan />;
        } else {
          return <Default />;
        }
      }}
    </Consumer>
  );
}

const Default = () => {
  return (
    <div className="no-menu">
      <Header as="h5" className="headerNav">
        Map Option
        <Header.Subheader>Set maps display</Header.Subheader>
      </Header>
      <p>Pilih menu pada Navigation Bar</p>
    </div>
  );
};
