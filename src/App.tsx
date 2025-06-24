import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import { Menu } from './components';
import { Home } from './screens';

function App() {

  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App
