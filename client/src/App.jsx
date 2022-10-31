import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Register, Error, Landing, ProtectedRoutes } from "./pages";
import {
  AddJob,
  AllJobs,
  SharedLayouts,
  Stats,
  Profile,
} from "./pages/dashboard";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoutes>
              <SharedLayouts />
            </ProtectedRoutes>
          }
        >
          <Route index element={<Stats />}></Route>
          <Route path="add-job" element={<AddJob />}></Route>
          <Route path="all-jobs" element={<AllJobs />}></Route>
          <Route path="profile" element={<Profile />}></Route>
        </Route>
        <Route path="/landing" element={<Landing />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
};

export default App;
