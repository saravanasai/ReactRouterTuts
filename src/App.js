
import './App.css';
import Header from './Layouts/Header';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Balance from './components/balance';
import Home from './components/Home';
import Error from './components/Error';
import ROUTES, { RenderRoutes } from './Routes/route';

function App() {

   

  return (
    <div style={{ display: "flex", height: "100vh", alignItems: "stretch" }}>
      <div style={{ flex: 0.3, backgroundColor: "#f2f2f2" }}>route menu</div>
      <div> <RenderRoutes routes={ROUTES} /></div>
    </div>
  );
}



export default App;
