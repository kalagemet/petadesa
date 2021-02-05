import "mapbox-gl/dist/mapbox-gl.css";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import NotFound from "./Container/404";
import { AppLayout } from "./Container/AppLayout";
import { Context } from "./Context";
import Maps from "./Maps/BlokMaps/Maps";
import ClusterMaps from "./Maps/ClasterMaps/ClasterMaps";
import MapsRumah from "./Maps/MapsRumah/MapsRumah";
import StreetMaps from "./Maps/StreetMaps/StreetMaps";

function App() {
  return (
    <BrowserRouter>
      <Context>
        <AppLayout>
          <Switch>
            <Route exact path="/">
              <Redirect to="/peta1" />
            </Route>
            <Route path="/peta1" component={Maps} />
            <Route path="/peta2" component={MapsRumah} />
            <Route path="/peta3" component={ClusterMaps} />
            <Route path="/peta4" component={StreetMaps} />
            <Route path="*" component={NotFound} />
          </Switch>
        </AppLayout>
      </Context>
    </BrowserRouter>
  );
}

export default App;
