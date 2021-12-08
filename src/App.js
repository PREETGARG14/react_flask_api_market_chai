//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navbar from './component/Navbar';
import Login from './component/Login';
import Home from './component/Home';
import Market from './component/Market';
import Register from './component/Register';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/market" component={Market} />
          <Route exact path="/register" component={Register} />
      </Switch>
    </Router>
  );
}

export default App;
