import "./assets/css/App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Biodanza from "./components/Biodanza";
import Facilitadoras from "./components/Facilitadoras";
import Clases from "./components/Clases";
import Eventos from "./components/Eventos";
import Contacto from "./components/Contacto";

function App() {
  return (
    <Router>
      <div className="App">
          <Route exact path="/" component={Intro} />
          <Route path="/home" component={Home} />
          <Route path="/biodanza" component={Biodanza} />
          <Route path="/facilitadoras" component={Facilitadoras} />
          <Route path="/clases" component={Clases} />
          <Route path="/eventos" component={Eventos} />
          <Route path="/contacto" component={Contacto} />
      </div>
    </Router>
  );
}

export default App;
