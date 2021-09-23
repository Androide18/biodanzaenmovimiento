import "./assets/css/App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import Intro from "./components/Intro";
import Biodanza from "./components/Biodanza";
import Facilitadoras from "./components/Facilitadoras";
import Clases from "./components/Clases";
import Eventos from "./components/Eventos";
import Contacto from "./components/Contacto";
import FormHook from "./components/FormHook";
import InscripcionExitosa from "./components/InscripcionExitosa";
import Formasdepago from "./components/Formasdepago";

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
          <Route path="/form" component={FormHook} />
          <Route path="/inscripcionExitosa" component={InscripcionExitosa} />
          <Route path="/formasdepago" component={Formasdepago} />
      </div>
    </Router>
  );
}

export default App;
