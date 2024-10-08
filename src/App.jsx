import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import TermsPage from "./pages/Terms"
import HomePage from "./pages/Home"
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/terms" element={<TermsPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  )
}

export default App
