import {
  BrowserRouter as Router
} from "react-router-dom";
import { Routes } from './routes'
import Menu from './components/template/Menu/Menu'

function App() {
  return (
    <>
    <Menu/>
    <Router>
      <Routes/>
    </Router>
    </>
  );
}

export default App;
