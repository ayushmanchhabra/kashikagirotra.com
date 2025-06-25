import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import { Menu } from './components';
import { Home, Juno } from './screens';

function App() {

  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/juno" element={<Juno />} />
      </Routes>
    </Router>
  )
}

export default App
