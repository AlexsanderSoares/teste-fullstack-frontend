import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import App from "./App";
import PopulationState from "./pages/populationState";
import States from "./pages/states";
import StatesPopulation from "./pages/statesPopulation";

const Router = () => (
    <BrowserRouter>
        <App>
            <Routes>
                  <Route exact path="/" element={<States/>}/>
                  <Route exact path="/populacao/sp" element={<PopulationState/>}/>
                  <Route exact path="/v2/estados" element={<StatesPopulation/>}/>
            </Routes>
        </App>
    </BrowserRouter>
  );

  export default Router;