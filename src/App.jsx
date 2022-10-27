import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Dashboard, Register, Error, Landing } from "./pages";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
};

export default App;
