import {
  BrowserRouter as Router
} from "react-router-dom";
import { Routes } from './routes'
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './components/template/Menu/Menu'
import Header from './components/template/Header/Header'

function App() {
  return (
    <>
    <Header/>
    <Menu/>
    <Router>
      <Routes/>
    </Router>
    </>
  );
}

export default App;
