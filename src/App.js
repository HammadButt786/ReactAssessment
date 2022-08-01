import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import DashBoard from "./DashBoard";
import NewRecruitment from "./NewRecruitment";
import Update from "./Update";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<DashBoard />} />{" "}
          <Route exact path="/new-recruitment" element={<NewRecruitment />} />
          <Route exact path="/update/:id" element={<Update />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
