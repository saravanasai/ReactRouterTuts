
import './App.css';
import Header from './Layouts/Header';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Balance from './components/balance';
import Home from './components/Home';
import Error from './components/Error';
import ROUTES, { RenderRoutes } from './Routes/route';

function App() {

   

  return (
      <div>
         <Header />
         <RenderRoutes routes={ROUTES} />
     </div>
  );
}



export default App;
