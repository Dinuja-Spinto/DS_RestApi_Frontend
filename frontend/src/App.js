import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

//UI
import DeliveryDetails from "./components/DeliveryDetails";
import CdeliveryDetails from "./components/CdeliveryDetails";

function App() {
  return (
      <Router>
        <div>


            <Route path="/det" exact component={DeliveryDetails}/>
            <Route path="/confirm" exact component={CdeliveryDetails}/>



        </div>
      </Router>
  );
}

export default App;
