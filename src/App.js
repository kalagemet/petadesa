import 'mapbox-gl/dist/mapbox-gl.css';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { AppLayout } from './Container/AppLayout';
import Maps from './Maps/BlokMaps/Maps';
import ClusterMaps from './Maps/ClasterMaps/ClasterMaps';
import MapsRumah from './Maps/MapsRumah/MapsRumah';

function App() {
  return (
    <BrowserRouter>
      <AppLayout>
        <Switch>
          <Route exact path='/'>
            <Redirect to='/peta1'/>
          </Route>
          <Route exact path='/peta1' component={Maps} />
          <Route exact path='/peta2' component={MapsRumah} />
          <Route exact path='/peta3' component={ClusterMaps} />
        </Switch>
      </AppLayout>
    </BrowserRouter>
  );
}

export default App;
